<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Notice, Customer};
use Auth;
use Yajra\DataTables\Facades\DataTables;
use Exception;
use App\Http\Requests\{NoticeStoreRequest, NoticeUpdateRequest, NoticeDeleteRequest};


class NoticeController extends Controller
{
    public function noticeList($id = null)
    {
        $userRole = Auth::user()->roles[0];
        if($id != null)
        {
            $notices = Notice::with('userfrom')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $notices])->setStatusCode(200);

        } 
        $notices = Notice::with('userfrom')->when(($userRole->name != 'super_admin' && $userRole->name != 'manager'), function($q) use ($userRole){
                        $q->where('role_id',$userRole->id);
                    })->get();
        return Datatables::of($notices)->make(true);
    }

    public function create(NoticeStoreRequest $request)
    {
        $notice          = new Notice;
        $notice->from_id = Auth::user()->id;
        $notice->role_id = $request->get('role_id');
        $notice->title   = $request->get('title');
        $notice->detail  = $request->get('detail');
        $notice->save();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully notice created."])->setStatusCode(200);
    }

    public function update(NoticeUpdateRequest $request)
    {
        $notice = Notice::where('id', $request->get('id'))
                        ->when(Auth::user()->hasRole('super_admin') == false, function($q){
                            $q->where('from_id', Auth::user()->id);
                        })
                        ->first();

        $notice->role_id = $request->get('role_id');
        $notice->title   = $request->get('title');
        $notice->detail  = $request->get('detail');
        $notice->update();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully notice updated."])->setStatusCode(200);
    }

    public function delete(NoticeDeleteRequest $request)
    {
        Notice::where('id', $request->get('id'))
              ->where('from_id', Auth::user()->id)
              ->delete();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully notice deleted."])->setStatusCode(200);
    }
}