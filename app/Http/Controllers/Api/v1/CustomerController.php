<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use Auth;
use Yajra\DataTables\Facades\DataTables;
use App\Http\Requests\CustomerStoreRequest;
use App\User;
use App\Models\Subscription;
use App\Models\Payment;

class CustomerController extends Controller
{
    public function customerList($id = null)
    {
    	if($id != null)
    	{
    		$customers = Customer::with('user')->where('user_id',$id)->first();
    	}else{
    		$customers = Customer::with('user.subscription')->get();
            return Datatables::of($customers)->make(true);
    	}
    	return response()->json(["code" => 200, "status" => "success", "data" => $customers])->setStatusCode(200);
    	
    }
    
    public function create(Request $request)
    {
        try
        {
            //return $request->all();
            $user = new User;
            $user->first_name = $request->get("firstName");
            $user->last_name  = $request->get("lastName");
            $user->gender     = $request->get("gender");
            $user->dob        = $request->get("dob");
            $user->phone      = $request->get("phone");
            $user->address    = $request->get("address");
            $user->email      = $request->get("email");
            $user->password   = bcrypt($request->get("password"));
            $user->branch_id  = $request->get('branchId');
            $user = $this->uploadImage($user, $request->file('profileImage'));

            $user->save();

            $customer = new Customer;
            $customer->city            = $request->get("city");
            $customer->state           = $request->get("state");
            $customer->zipcode         = $request->get("zipcode");
            $customer->height          = $request->get("height");
            $customer->weight          = $request->get("weight");
            $customer->chest           = $request->get("chest");
            $customer->waist           = $request->get("waist");
            $customer->thigh           = $request->get("thigh");
            $customer->arms            = $request->get("arms");
            $customer->fat             = $request->get("fat");
            $customer->interested_area = $request->get("interestedArea");
            $customer->user_id         = $user->id;
            $customer->save();

            $subscription = new Subscription;
            $subscription->user_id         = $user->id;
            $subscription->package_id      = $request->get("packageId");
            $subscription->staff_member_id = Auth::user()->id;
            $subscription->amount          = $request->get("amount");
            $subscription->duration        = $request->get("duration");
            $subscription->start_date      = $request->get("startDate");
            $subscription->trial_days      = $request->get("trailDays");
            $subscription->end_date        = $request->get("endDate");
            $subscription->remark          = $request->get("remark");
            $subscription->save();

            return response()->json(["status" => "success", "message" => "Successfully customer created."]);
        }
        catch (\Exception $e) 
        {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }

    private function uploadImage($user, $profileImage)
    {
        try
        {
            $imagePath   = '';

            if($profileImage && $profileImage->isValid()) 
            {
                $destinationPath = 'profile/';
                $extension = $profileImage->getClientOriginalExtension(); 
                $imageName = str_random(32).'.'.$extension;

                if($profileImage->move($destinationPath, $imageName)){
                    $imagePath = $destinationPath.$imageName;
                }
                $user->photo_url = '/'.$imagePath;
            }
            return $user;
        }
        catch (\Exception $e) 
        {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }

    public function update(Request $request)
    {
        try
        {
            //return $request->all();
            $user = User::where('id',$request->get('user_id'))->first();
            $user->first_name = $request->get("first_name");
            $user->last_name  = $request->get("last_name");
            $user->gender     = $request->get("gender");
            $user->dob        = $request->get("dob");
            $user->phone      = $request->get("phone");
            $user->address    = $request->get("address");
            $user->email      = $request->get("email");
            $user->password   = bcrypt($request->get("password"));
            $user->branch_id  = $request->get('branch_id');
            $user = $this->uploadImage($user, $request->file('profileImage'));
            $user->update();

            $customer = Customer::where('user_id',$request->get('user_id'))->first();
            $customer->city            = $request->get("city");
            $customer->state           = $request->get("state");
            $customer->zipcode         = $request->get("zipcode");
            $customer->height          = $request->get("height");
            $customer->weight          = $request->get("weight");
            $customer->chest           = $request->get("chest");
            $customer->waist           = $request->get("waist");
            $customer->thigh           = $request->get("thigh");
            $customer->arms            = $request->get("arms");
            $customer->fat             = $request->get("fat");
            $customer->interested_area = $request->get("interested_area");
            $customer->update();

            return response()->json(["status" => "success", "message" => "Successfully customer Update."]);
        }
        catch (\Exception $e) 
        {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }
    public function delete(Request $request)
    {
    	try
    	{
    		User::where('id', $request->get('id'))->delete();
            Customer::where('user_id',$request->get('id'))->delete();
            $subscriptions = Subscription::where('user_id',$request->get('id'))->get();
            foreach($subscriptions as $subscription)
            {
                Payment::where('subscription_id',$subscription->id)->delete();
            }
            Subscription::where('user_id',$request->get('id'))->delete();
    		return response()->json(["code" => 200, "status" => "success", "message" => " Successfully Customer deleted."])->setStatusCode(200);
    	}
    	catch (\Exception $e) 
    	{
    		return $e;
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    		
    	}
    }


    // public function customerList()
    // {
    //     return Customer::with('user', 'user.subscription')->get();
    // }
}