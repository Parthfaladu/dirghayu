<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Subscription, Payment};
use App\User;
use Auth;
use Yajra\DataTables\Facades\DataTables;
use Exception;
use Carbon\Carbon;
use PDF;
use App\Http\Requests\{SubscriptionStoreRequest, SubscriptionUpdateRequest, SubscriptionDeleteRequest};

class SubscriptionController extends Controller
{
    public function subscriptionList($id = null)
    {
        $userRole = Auth::user()->roles[0];
        $userId   = Auth::user()->id;

    	if($id != null)
    	{
    		$subscriptions = Subscription::with('user','package')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $subscriptions])->setStatusCode(200);

    	} 
        $subscriptions = Subscription::with(['user','package','payment'=>function($q){
                                            $q->latest()->limit(1);
                                        }])
                                    ->when($userRole->name == "customer", function($q) use($userId){
                                        $q->where("user_id", $userId);
                                    })
                                    ->get();
        return Datatables::of($subscriptions)->make(true);
    }
    
    public function create(SubscriptionStoreRequest $request)
    {
        $subscription                  = new Subscription;
        $subscription->user_id         = $request->get('user_id');
        $subscription->package_name    = $request->get('package_name');
        $subscription->amount          = $request->get('amount');
        $subscription->duration        = $request->get('duration');
        $subscription->start_date      = Carbon::parse($request->get('start_date'));
        $subscription->end_date        = Carbon::parse($request->get('end_date'));
        $subscription->trial_days      = $request->get('trial_days');
        $subscription->remark          = $request->get('remark');
        $subscription->save();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully subscription created."])->setStatusCode(200);
    }

    public function update(SubscriptionUpdateRequest $request)
    {
        $subscription               = Subscription::where('id', $request->get('id'))->first();
        $subscription->user_id      = $request->get('user_id');
        $subscription->package_name = $request->get('package_name');
        $subscription->amount       = $request->get('amount');
        $subscription->duration     = $request->get('duration');
        $subscription->start_date   = Carbon::parse($request->get('start_date'));
        $subscription->trial_days   = $request->get('trial_days');
        $subscription->remark       = $request->get('remark');
        $subscription->update();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully Subscription updated."])->setStatusCode(200);
    }

    public function delete(SubscriptionDeleteRequest $request)
    {
        $subscriptions = Subscription::where('id',$request->get('id'))->get();
        
        foreach($subscriptions as $subscription)
        {
            Payment::where('subscription_id',$subscription->id)->delete();
        }

        Subscription::where('id', $request->get('id'))->delete();
        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product deleted."])->setStatusCode(200);
    }

    private function getSubscriptionReport($customerId, $packageName, $status)
    {
        $userRole = Auth::user()->roles[0];
        $userId = Auth::user()->id;
        $subscriptions = Subscription::with(['user','package','payment'=>function($q){
            $q->latest()->limit(1);
        }]);
        
        if($customerId !== null && $customerId !== 'null') {
            $subscriptions = $subscriptions->where('user_id', $customerId);
        }

        if($packageName !== null && $packageName !== 'null') {
            $subscriptions = $subscriptions->where('package_name', $packageName);
        }

        if($status !== null && $status !== 'null' && $status == 'active') {
            $subscriptions = $subscriptions->whereDate('end_date', '>=',Carbon::now());
        }
        else if($status !== null && $status !== 'null' && $status == 'expired') {
            $subscriptions = $subscriptions->whereDate('end_date', '<',Carbon::now());
        }

        return $subscriptions->when($userRole->name == "customer", function($q) use($userId){
                                $q->where("user_id", $userId);
                            })->get();
    }

    public function subscriptionReport($customerId = null, $packageName = null, $status = null)
    {
        $subscriptions = $this->getSubscriptionReport($customerId, $packageName, $status);
        
        return Datatables::of($subscriptions)->make(true);
    }

    public function downloadSubscriptionReport(Request $request)
    {
        $subscriptions = $this->getSubscriptionReport($request->get("customerId"), $request->get("packageName"), $request->get("status"));

        $pdf = PDF::loadView('reports.subscription', ['subscriptions' => $subscriptions]);
        
        return $pdf->download('subscription.pdf');
    }
}