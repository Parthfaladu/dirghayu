<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subscription;
use App\Models\Payment;
use App\User;
use Auth;
use Yajra\DataTables\Facades\DataTables;

class SubscriptionController extends Controller
{
    public function subscriptionList($id = null)
    {
    	if($id != null)
    	{
    		$subscriptions = Subscription::with('user','package')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $subscriptions])->setStatusCode(200);

    	}else{
    		$subscriptions = Subscription::with('user','package')->get();
           //  $lastPayment = [];
           //  foreach($subscriptions as $subscription)
           //  {
           //      $payment = Payment::where('subscription_id', $subscription->id)->latest('updated_at')->first();
           //      if(!empty($payment) && $payment != null )
           //      {
           //          $lastPayment[] = $payment; 
           //      }
           //  }
           // return $lastPayment;
            return Datatables::of($subscriptions)->make(true);
    	}
    	
    }
    
    public function create(Request $request)
    {
        //return $request->all();
        try
        {
            $subscription                  = new Subscription;
            $subscription->user_id         = $request->get('user_id');
            $subscription->package_id      = $request->get('package_id');
            $subscription->amount          = $request->get('amount');
            $subscription->duration        = $request->get('duration');
            $subscription->start_date      = $request->get('start_date');
            $subscription->end_date        = $request->get('end_date');
            $subscription->trial_days      = $request->get('trial_days');
            $subscription->staff_member_id = Auth::user()->id;
            $subscription->remark          = $request->get('remark');
            $subscription->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully subscription created."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            return $e;
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }
    public function update(Request $request)
    {
        //return $request->all();
    	try
    	{
	    	$subscription             = Subscription::where('id', $request->get('id'))->first();
	    	$subscription->user_id    = $request->get('user_id');
            $subscription->package_id = $request->get('package_id');
            $subscription->amount     = $request->get('amount');
            $subscription->duration   = $request->get('duration');
            $subscription->start_date = $request->get('start_date');
            $subscription->trial_days = $request->get('trial_days');
            $subscription->remark     = $request->get('remark');
	    	$subscription->update();

	    	return response()->json(["code" => 200, "status" => "success", "message" => " Successfully Subscription updated."])->setStatusCode(200);
    	}
    	catch (\Exception $e) 
    	{
            return $e;
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    		
    	}
    }

    public function delete(Request $request)
    {
    	try
    	{
    		$subscriptions = Subscription::where('user_id',$request->get('id'))->get();
            foreach($subscriptions as $subscription)
            {
                Payment::where('subscription_id',$subscription->id)->delete();
            }
            Subscription::where('user_id',$request->get('id'))->delete();
    		return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product deleted."])->setStatusCode(200);
    	}
    	catch (\Exception $e) 
    	{
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    		
    	}
    }
}