<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Models\Package;
use Auth;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;

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
}