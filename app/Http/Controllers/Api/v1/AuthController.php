<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Http\Requests\UserStatusChangeRequest;
use App\User;
use App\Models\Settings;
use Spatie\Permission\Models\Role;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function userDetails(Request $request)
	{
		$settings = Settings::with('currency')->first();
		$user = Auth::user();
		$user['permission'] = Auth::user()->getAllPermissions();
		$user['settings'] = [	'currency' 	   => $settings['currency']['symbol'],
								'currencyId'   => $settings->currency_id,
								'companyTitle' => $settings['title'],
								'logoUrl' 	   => $settings['logo_url'],
								'footerText'   => $settings['footer']
							];
		return $user;
		//return Auth::user();
	}

	public function changeUserStatus(UserStatusChangeRequest $request)
	{
		$user = User::find($request->get("userId"));
		$user->is_active = $request->get("status");
		$user->update();

		return response()->json(["status" => "success", "message" => "Successfully change status."]);
	}

	public function userRole(Request $request)
	{
		$userrole = Role::get();
		return response()->json(["status" => "success", "data" => $userrole]);
	}

	public function updateUserDetails(Request $request)
	{
		$user = User::findOrFail(Auth::user()->id);
		$user->gender 	  = $request->get("gender");
		$user->first_name = $request->get("first_name");
		$user->last_name  = $request->get("last_name");
		$user->dob     	  = Carbon::parse($request->get("dob"));
		$user->phone   	  = $request->get("phone");
		$user->address 	  = $request->get("address");
		$user = $this->uploadImage($user, $request->file('profileImage'));
		$user->update();

		return response()->json(["status" => "success", "message" => "Successfully user details updated."]);
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
}
