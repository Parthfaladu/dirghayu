<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//use App\Http\Requests\{EnquiryStoreRequest, EnquiryUpdateRequest};
use Spatie\Permission\Models\Role;
use Spatie\Fractalistic\ArraySerializer;
use App\Models\Enquiry;
use App\User;
use Auth;
use Yajra\DataTables\Facades\DataTables;
use Exception;
use Carbon\Carbon;

class EnquiryController extends Controller
{
    public function create(Request $request)
    {
        //return $request->all();
        try
        {
            $enquiry                      = new Enquiry;
            $enquiry->name                = $request->get("name");
            $enquiry->email               = $request->get("email");
            $enquiry->phone               = $request->get("phone");
            $enquiry->gender              = $request->get("gender");
            $enquiry->last_follow_up_date = Carbon::parse($request->get("last_follow_up_date"));
            $enquiry->next_follow_up_date = Carbon::parse($request->get("next_follow_up_date"));
            $enquiry->remark              = $request->get("remark");
            $enquiry->user_id             = Auth::user()->id;
            $enquiry->save();

            return response()->json(["status" => "success", "message" => "Successfully enquiry Added."]);
        }
        catch (Exception $e) {
            return $e;
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
    }

	public function enquiryList($id = null)
	{
        if($id != null)
    	{
    		$enquiries = Enquiry::where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $enquiries])->setStatusCode(200);

    	} else {
    		$enquiries = Enquiry::with('user')->get();
            return Datatables::of($enquiries)->make(true);
    	}
	}

    public function update(Request $request)
    {
    	try
    	{
            $enquiry                      = Enquiry::where('id', $request->get('id'))->first();
            $enquiry->name                = $request->get("name");
            $enquiry->email               = $request->get("email");
            $enquiry->phone               = $request->get("phone");
            $enquiry->gender              = $request->get("gender");
            $enquiry->last_follow_up_date = Carbon::parse($request->get("last_follow_up_date"));
            $enquiry->next_follow_up_date = Carbon::parse($request->get("next_follow_up_date"));
            $enquiry->remark              = $request->get("remark");
            $enquiry->update();
	    	
	    	return response()->json(["code" => 200, "status" => "success", "message" => " Successfully enquiry updated."])->setStatusCode(200);
    	}
    	catch (Exception $e) {
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
    }

    public function delete(Request $request)
    {
    	try
    	{
    		Enquiry::where('id', $request->get('id'))->delete();

    		return response()->json(["code" => 200, "status" => "success", "message" => " Successfully enquiry deleted."])->setStatusCode(200);
    	}
    	catch (Exception $e) {
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    	}
    }
}
