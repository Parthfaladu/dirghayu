<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\{PaymentStoreRequest, PaymentUpdateRequest, PaymentRequest};
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
    public function create(PaymentStoreRequest $request)
    {
		$payment                    = new Payment;
		$payment->staff_member_name = Auth::user()->first_name.' '.Auth::user()->last_name;
		$payment->subscription_id   = $request->get("subscription_id");
		$payment->paid_amount       = $request->get("paid_amount");
		$payment->remaining_amount  = $request->get("remaining_amount");
		$payment->payment_source    = $request->get("payment_source");
		$payment->remark            = $request->get("remark");
		$payment->save();

		return response()->json(["status" => "success", "message" => "Successfully Payment Added."]);
    }

	public function paymentList($id = null)
	{
		$userRole = Auth::user()->roles[0];
		$userId   = Auth::user()->id;
		
        if($id != null)
    	{
    		$payments = Payment::with('subscription.user')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $payments])->setStatusCode(200);
		}
		$payments = Payment::with('subscription.user')
							->when($userRole->name == "customer", function($q) use($userId){
								$q->whereHas("subscription", function($query) use($userId){
									$query->where("user_id", $userId);
								});
							})
							->get();
		return Datatables::of($payments)->make(true);
	}

	public function getPackages($userId)
	{
		$packages = Package::whereHas('subscription', function($q) use ($userId) {
			$q->where('user_id', $userId);
		})->get();
		return response()->json(["status" => "success", "data" => $packages]);
	}

	public function getAmount(Request $request)
	{
		$subscription = Subscription::where('user_id', $request->get('user_id'))
									->where('package_name',$request->get('package_name'))
									->with(['payment' => function($q){
										$q->latest()->limit(1);
									}])
									->first();
		
		return response()->json(["status" => "success", "data" => $subscription]);
	}

	public function activeSubscriptionList()
	{
		$customers = User::whereHas('subscription', function($q){
			$q->where('status', 1);
		})->get();
		return response()->json(["status" => "success", "data" => $customers]);
	}
	
	public function getSubscription($id)
	{
		$subscriptions = Subscription::with(['user','staff','payment' => function($q) use ($id){
										$q->where("id", $id);
									}])
									->whereHas('payment', function($q) use ($id){
										$q->where("id", $id);
									})
									->first();
		return response()->json(["status" => "success", "data" => $subscriptions]);
	}

    public function update(PaymentUpdateRequest $request)
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

    public function delete(PaymentRequest $request)
    {
		Payment::where('id', $request->get('id'))->delete();
		return response()->json(["code" => 200, "status" => "success", "message" => " Successfully payment deleted."])->setStatusCode(200);
    }
	

	public function changePaymentStatus(PaymentRequest $request)
	{
		$payment = Payment::findOrFail($request->get('id'));
		$payment->status = $request->get("payment_status");
		$payment->update();

		return response()->json(["status" => "success", "message" => "Successfully Payment status updated."]);
	}

	public function getPayment(PaymentRequest $request, $id)
	{
		$payment = Payment::findOrFail($request->get('id'));

		return response()->json(["status" => "success", "data" => $payment]);
	}
}
