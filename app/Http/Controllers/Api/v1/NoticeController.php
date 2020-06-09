<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Notice, Customer};
use Auth;

use Yajra\DataTables\Facades\DataTables;
use Exception;

class NoticeController extends Controller
{
    public function noticeList($id = null)
    {
        $userRole = Auth::user()->roles[0];
        if($id != null)
        {
            $notices = Notice::with('userfrom')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $notices])->setStatusCode(200);

        } else {
            $notices = Notice::with('userfrom')->where('role_id',$userRole->id)->get();
            return Datatables::of($notices)->make(true);
        }
    }

    public function create(Request $request)
    {
        try
        {       
            $notice          = new Notice;
            $notice->from_id = Auth::user()->id;
            $notice->role_id = $request->get('role_id');
            $notice->title   = $request->get('title');
            $notice->detail  = $request->get('detail');
            $notice->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully notice created."])->setStatusCode(200);
        }
        catch (Exception $e) {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
        }
    }

    public function update(Request $request)
    {
        try
        {      
            $notice          = Notice::where('id', $request->get('id'))->first();
            $notice->role_id = $request->get('role_id');
            $notice->title   = $request->get('title');
            $notice->detail  = $request->get('detail');
            $notice->update();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully notice updated."])->setStatusCode(200);
        }
        catch (Exception $e) {
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
        catch (Exception $e) {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
        }
    }
}