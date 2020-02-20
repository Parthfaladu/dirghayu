<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notice;
use App\Models\Customer;
use Auth;
use Yajra\DataTables\Facades\DataTables;

class NoticeController extends Controller
{
    public function noticeList($id = null)
    {
        if($id != null)
        {
            $notices = Notice::with('userto','userfrom')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $notices])->setStatusCode(200);

        }else{
            $notices = Notice::with('userto','userfrom')->get();
            return Datatables::of($notices)->make(true);
        }
    }
    public function create(Request $request)
    {
        //return $request->all();
        try
        {
            $user          = Customer::where('id', $request->get('to_id'))->first();
            $notice          = new Notice;
            $notice->from_id = Auth::user()->id;
            $notice->to_id   = $user->id;
            $notice->title  = $request->get('title');
            $notice->detail  = $request->get('detail');
            $notice->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully notice created."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            //return $e;
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }

        
    public function update(Request $request)
    {

        try
        {
            $user           = Customer::where('id', $request->get('to_id'))->first();
            $notice         = Notice::where('id', $request->get('id'))->first();
            $notice->to_id  = $user->id;
            $notice->title  = $request->get('title');
            $notice->detail = $request->get('detail');
            $notice->update();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully notice updated."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            //return $e;
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }

    public function delete(Request $request)
    {
        try
        {
            Notice::where('id', $request->get('id'))->delete();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully notice deleted."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            //return $e;
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }
}