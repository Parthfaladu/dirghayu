<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Models\Package;
use Auth;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;
use Hash;
use App\User;
use Mail;
use App\Mail\VerfiyEmail;

class UserController extends Controller
{
	protected $request;

	public function __construct(Request $request)
	{
		$this->request = $request;
	}

	public function doLogin(LoginRequest $request)
	{
		$this->request->request->add([
	        'grant_type' 	=> 'password',
	        'client_id' 	=> env("CLIENT_ID"),
	        'client_secret' => env("CLIENT_SCERET"),
	        'username' 		=> $request->get("email"),
	        'password' 		=> $request->get("password"),
	        'scope'    		=> '*'
		]);
		
		$tokenRequest = Request::create('/oauth/token', 'post');
		$response = Route::dispatch($tokenRequest);
		return $response;
	}
	public function changePassword(Request $request)
	{
		try
    	{
    		if(Hash::check($request->get('old_password'), Auth::user()->password) === true)
        	{
				$user = User::where('id','=',Auth::user()->id)->first();
				$user->password  = bcrypt($request->get('new_password'));
				$user->update();
				return response()->json(["code" => 200, "status" => "success", "message" => " Successfully Change Password."])->setStatusCode(200);
			}
			else {
				return response()->json(["code" => 200, "status" => "warning", "message" => "Please insert valid password"])->setStatusCode(200); 
			}
    	}
    	catch (Exception $e) {
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
	}
	public function forgotPassword(Request $request)
	{
		try
		{
			$user = User::where('email', $request->get("email"))->first();
				
			if($user != null)
			{
				$code = str_random(8);
				$user->password = bcrypt($code);
				$user->update();

				Mail::to($user->email)
						->send(new VerfiyEmail($code));

				return response()->json(["code" => 200, "status" => "success", "message" => " Please Check Your Email Account."])->setStatusCode(200);
			}
			//return response()->json(["code" => 200, "status" => "warning", "message" => " Invalid Email Address."])->setStatusCode(200);
			return response()->json(["code" => 500, "status" => "failed", "message" => "Invalid Email Address."])->setStatusCode(500);
		}
		catch(Exception $e) {
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
		
	}
}