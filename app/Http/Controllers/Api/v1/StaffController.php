<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\{StaffMemberStoreRequest, StaffMemberUpdateRequest};
use Spatie\Permission\Models\Role;
use Spatie\Fractalistic\ArraySerializer;
use App\Transformers\StaffMemberTransformer;
use App\User;
use Yajra\DataTables\Facades\DataTables;

class StaffController extends Controller
{
    public function storeStaffMember(StaffMemberStoreRequest $request)
    {
    	//return $request->all();

    	$user = new User;
    	//$user->branch_id  = $request->get("branchId");
		$user->first_name = $request->get("firstName"); 
		$user->last_name  = $request->get("lastName"); 
		$user->email      = $request->get("email");
		$user->password   = bcrypt($request->get("password")); 
		$user->phone      = $request->get("phone"); 
		$user->dob        = $request->get("dob"); 
		$user->gender     = $request->get("gender");
		$user->address    = $request->get("address"); 
		$user = $this->uploadImage($user, $request->file('profileImage'));

		$user->save();

		$role = Role::where("id", $request->get("roleId"))->first();

		
		$user->assignRole($role);

		return response()->json(["status" => "success", "message" => "Successfully staff member account created."]);
    }

	private function uploadImage($user, $profileImage)
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

	public function staffMemberList()
	{
		$user = User::with("roles")
				   ->whereHas("roles", function($q){
						return $q->whereIn("name", ["manager", "staff"]);
					})
				   ->get();

		$response = fractal($user, new StaffMemberTransformer())
     				    ->serializeWith(new ArraySerializer())
     				    ->toArray();

     	return Datatables::of($user)->make(true);
	}

	public function getStaffMemberDetails(Request $request, $memberId)
	{
		$user = User::with("roles")->findOrFail($memberId);

		$response = fractal($user, new StaffMemberTransformer())
     				    ->serializeWith(new ArraySerializer())
     				    ->toArray();

     	return response()->json(["status" => "success", "data" => $response]);
	}

	public function updateStaffMemberDetails(StaffMemberUpdateRequest $request)
	{
		$user = User::findOrFail($request->get("memberId"));
		$user->first_name = $request->get("firstName"); 
		$user->last_name  = $request->get("lastName"); 
		$user->email      = $request->get("email"); 
		$user->password   = bcrypt($request->get("password")); 
		$user->phone      = $request->get("phone");
		$user->dob        = $request->get("dob"); 
		$user->gender     = $request->get("gender");
		$user->address    = $request->get("address"); 
		$user = $this->uploadImage($user, $request->file('profileImage'));
		$user->update();

		$role = Role::where("id", $request->get("roleId"))->first();

		$user->assignRole($role);

		return response()->json(["status" => "success", "message" => "Successfully staff member details updated."]);
	}

	public function deleteStaffMember(Request $request, $memberId)
	{
		$user = User::findOrFail($memberId);

		$user->roles()->detach();
		$user->delete();

		return response()->json(["status" => "success", "message" => "Successfully staff member deleted."]);
	}

	public function changeStaffMemberStatus(Request $request)
	{
		$user = User::findOrFail($request->get('id'));
		if($user->is_active == 0){
			$user->is_active  = 1;	
		}else{
			$user->is_active  = 0;
		}
		$user->update();

		return response()->json(["status" => "success", "message" => "Successfully staff member status updated."]);
	}
}
