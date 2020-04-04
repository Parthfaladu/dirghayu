<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//use App\Http\Requests\{PaymentStoreRequest, PaymentUpdateRequest};
use Spatie\Permission\Models\Role;
use Spatie\Fractalistic\ArraySerializer;
use App\Models\{Payment, Subscription, Package};
use App\User;
use Auth;
use Yajra\DataTables\Facades\DataTables;
use Carbon\Carbon;
use Exception;

class PaymentController extends Controller
{
    public function create(Request $request)
    {
        try
        {
            $payment                   = new Payment;
            $payment->staff_member_id  = Auth::user()->id;
            $payment->subscription_id  = $request->get("subscription_id");
            $payment->paid_amount      = $request->get("paid_amount");
            $payment->remaining_amount = $request->get("remaining_amount");
            $payment->payment_source   = $request->get("payment_source");
            $payment->remark           = $request->get("remark");
            $payment->save();

            return response()->json(["status" => "success", "message" => "Successfully Payment Added."]);
        }
        catch (Exception $e) {
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
    }

	public function paymentList($id = null)
	{
        if($id != null)
    	{
    		$payments = Payment::with('subscription.user','subscription.package')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $payments])->setStatusCode(200);
		}
		else {
    		$payments = Payment::with('subscription.user','subscription.package')->get();
            return Datatables::of($payments)->make(true);
    	}
	}

	public function getPackages($userId)
	{
		try {
			$packages = Package::whereHas('subscription', function($q) use ($userId) {
				$q->where('user_id', $userId);
			})->get();
			return response()->json(["status" => "success", "data" => $packages]);
        }
        catch (Exception $e) {
			\Log::info($e);
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
	}

	public function getAmount(Request $request)
	{
		try{
			$subscription = Subscription::where('user_id', $request->get('user_id'))
										  ->where('package_id',$request->get('package_id'))
										  ->first();
			$lastPayment = Payment::where('subscription_id', $subscription->id)->latest('updated_at')->first();
			
			if ( !empty ( $lastPayment ) ) {
				return response()->json(["status" => "success", "data" => $lastPayment, "message" => "lastpayment"]);
			}else{
				return response()->json(["status" => "success", "data" => $subscription, "message" => "subscription"]);
			}
        }
        catch (Exception $e) {
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
	}

	public function activeSubscriptionList()
	{
		try
        {
			$subscriptions = Subscription::with('user')->where('status', 1)->get();
			$customers = [];
			foreach($subscriptions as $subscription)
			{
				$customers[$subscription->user['id']] = $subscription->user['first_name'].' '.$subscription->user['last_name'];
			}
			return response()->json(["status" => "success", "data" => $customers]);
        }
        catch (Exception $e) {
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
	}
	
	public function getSubscription($id)
	{
		try
		{
			$payment       = Payment::where('id',$id)->first();
			$subscriptions = Subscription::with('user','package','staff')
										->where('id', $payment->subscription_id)
										->first();
			return response()->json(["status" => "success", "data" => $subscriptions]);
		}
		catch(\Exception $e)
		{
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
		}
	}
    public function update(Request $request)
    {

    	try
    	{
	    	$payment                   = Payment::where('id', $request->get('id'))->first();
            $payment->subscription_id  = $request->get("subscription_id");
            $payment->paid_amount      = $request->get("paid_amount");
            $payment->remaining_amount = $request->get("remaining_amount");
            $payment->payment_source   = $request->get("payment_source");
            $payment->remark           = $request->get("remark");
            $payment->update();
	    	
	    	return response()->json(["code" => 200, "status" => "success", "message" => " Successfully payment updated."])->setStatusCode(200);
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
    		Payment::where('id', $request->get('id'))->delete();
    		return response()->json(["code" => 200, "status" => "success", "message" => " Successfully payment deleted."])->setStatusCode(200);
    	}
    	catch (\Exception $e) 
    	{
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
    }
	

	public function changePaymentStatus(Request $request)
	{
		$payment = Payment::findOrFail($request->get('id'));
		$payment->status = $request->get("payment_status");
		$payment->update();

		return response()->json(["status" => "success", "message" => "Successfully Payment status updated."]);
	}
}
