<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use Auth;
use App\User;
use Yajra\DataTables\Facades\DataTables;
use Carbon\Carbon;
use Exception;
use PDF;
use Dompdf\Dompdf;

class AttendanceController extends Controller
{
    public function attendanceList($date)
    {
        $userRole = Auth::user()->roles[0];
        $userId = Auth::user()->id;
        $users   = User::with(['attendance' => function($q) use ($date){
                                $q->whereDate("date", Carbon::parse($date));
                            }])
                            ->when($userRole->name == "customer", function($q) use($userId){
                                $q->where("id", $userId);
                            })->get();
        return Datatables::of($users)->make(true);

    }
    
    public function create(Request $request)
    {
        try {
            $attendance  = new Attendance;
            $attendance->user_id = $request->get('user_id');
            $attendance->date = Carbon::parse($request->get('date'))->format('Y-m-d');
            $attendance->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully Attendance created."])->setStatusCode(200);
        }
        catch (Exception $e) {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
        }
    }

    public function attendanceUnchecked(Request $request)
    {
    	try {   
	    	$attendance  = Attendance::whereDate('date', Carbon::parse($request->get('date')))->where('user_id', $request->get('user_id'))->delete();
	    	return response()->json(["code" => 200, "status" => "success", "message" => " Successfully Attendance updated."])->setStatusCode(200);
    	}
    	catch (Exception $e) {
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    		
    	}
    }

    private function getAttendance($fromDate, $toDate, $customerId)
    {
        $userRole = Auth::user()->roles[0];
        $userId = Auth::user()->id;
        $attendance = Attendance::with('user');
        
        if($customerId !== null && $customerId !== 'null') {
            $attendance = $attendance->where('user_id', $customerId);
        }
        return $attendance->whereBetween('date', [Carbon::parse($fromDate), Carbon::parse($toDate)])
                            ->when($userRole->name == "customer", function($q) use($userId){
                                $q->where("user_id", $userId);
                            })               
                            ->get();
    }

    public function attendanceReport($fromDate, $toDate, $customerId = null)
    {
        $attendance = $this->getAttendance($fromDate, $toDate, $customerId);

        return Datatables::of($attendance)->make(true);
    }

    public function downloadReport(Request $request)
    {
        $allAttendance = $this->getAttendance($request->get('from'), $request->get('to'), $request->get('customerId'));

        $pdf = PDF::loadView('reports.attendance', ['allAttendance' => $allAttendance]);
        
        return $pdf->download('attendance.pdf');
    }
}