<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Http\Requests\UserStatusChangeRequest;
use App\User;

class AuthController extends Controller
{
    public function userDetails(Request $request)
	{
		return Auth::user();
	}

	public function changeUserStatus(UserStatusChangeRequest $request)
	{
		$user = User::find($request->get("userId"));
		$user->is_active = $request->get("status");
		$user->update();

		return response()->json(["status" => "success", "message" => "Successfully change status."]);
	}
}
