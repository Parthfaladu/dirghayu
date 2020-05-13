<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Customer,Expense,Subscription,Payment,ProductSell,Enquiry};
use App\User;
use Spatie\Permission\Models\Role;
use Auth;
use Yajra\DataTables\Facades\DataTables;

class DashboardController extends Controller
{
    public function viewDashboard()
    {
        try
        {
            $userId = Auth::user()->id;
            $totalCustomer     = User::whereHas("roles", function($q){
                                            return $q->where("name", "customer");
                                        })->count();
            $totalExpense      = Expense::sum('price');
            $totalSubscription = Subscription::count();
            $totalPayment      = Payment::whereHas("subscription", function($q) use ($userId){
                                        $q->where("user_id", '=' , $userId);
                            })->sum('paid_amount');
            $totalStaffMember  = User::whereHas("roles", function($q){
                                        return $q->whereIn("name", ["manager", "staff"]);
                                    })->count();
            $totalProductSell  = ProductSell::sum('paid_amount');
            $totalEnquiry      = Enquiry::count();
            $totalUserSubscription = Subscription::where('user_id', $userId)->count();

            return response()->json(["code" => 200, "status" => "success", "data" => ['totalCustomer' => $totalCustomer,'totalExpense' => $totalExpense, 'totalSubscription' => $totalSubscription, 'totalPayment' => $totalPayment, 'totalStaffMember' => $totalStaffMember, 'totalProductSell' => $totalProductSell, 'totalEnquiry' => $totalEnquiry,'totalUserSubscription' => $totalUserSubscription]])->setStatusCode(200);

        }
        catch (Exception $e) {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
        }
        

    }

    public function newCustomer()
    {
        $newCustomers = User::whereHas("roles", function($q){
                            return $q->where("name", "customer");
                        })
                        ->latest()->limit(10)
                        ->get();
        return response()->json(["code" => 200, "status" => "success", "data" => $newCustomers ])->setStatusCode(200);
    }

    public function expirySubscription()
    {
        
        $lastTenSubscription = Subscription::with('user')->orderBy('end_date', 'desc')->limit(10)->get();
        return Datatables::of($lastTenSubscription)->make(true);
    }

    public function activeSubscription()
    {
        $activeSubscription = Subscription::where('user_id',Auth::user()->id)->get();
        return response()->json(["code" => 200, "status" => "success", "data" => $activeSubscription ])->setStatusCode(200);
    }
}