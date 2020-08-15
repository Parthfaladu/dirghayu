<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Expense;
use Auth;
use Yajra\DataTables\Facades\DataTables;
use Exception;
use Carbon\Carbon;
use App\Http\Requests\{ExpenseStoreRequest, ExpenseUpdateRequest, ExpenseDeleteRequest};

class ExpenseController extends Controller
{
    public function expenseList($id = null)
    {
    	if($id != null)
    	{
    		$expenses = Expense::where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $expenses])->setStatusCode(200);

    	}
        $expenses = Expense::get();
        return Datatables::of($expenses)->make(true);
    }

    public function create(ExpenseStoreRequest $request)
    {
        $expense                = new Expense;
        $expense->item_name     = $request->get('item_name');
        $expense->purchase_date = Carbon::parse($request->get('purchase_date'));
        $expense->bill_no       = $request->get('bill_no');
        $expense->price         = $request->get('price');
        $expense = $this->uploadImage($expense, $request->file('expenseImage'));
        $expense->save();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully expense created."])->setStatusCode(200);
    }   

    private function uploadImage($expense, $expenseImage)
    {
        $imagePath   = '';

        if($expenseImage && $expenseImage->isValid()) 
         {
            $destinationPath = 'expense/';
            $extension = $expenseImage->getClientOriginalExtension(); 
            $imageName = str_random(32).'.'.$extension;

            if($expenseImage->move($destinationPath, $imageName)){
                $imagePath = $destinationPath.$imageName;
            }
            $expense->bill_photo = '/'.$imagePath;
         }
        return $expense;
    }
    
    public function update(ExpenseUpdateRequest $request)
    {
        $expense                = Expense::where('id', $request->get('id'))->first();
        $expense->item_name     = $request->get('item_name');
        $expense->purchase_date = Carbon::parse($request->get('purchase_date'));
        $expense->bill_no       = $request->get('bill_no');
        $expense->price         = $request->get('price');
        $expense = $this->uploadImage($expense, $request->file('expenseImage'));
        $expense->update();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully expense updated."])->setStatusCode(200);
    }

    public function delete(ExpenseDeleteRequest $request)
    {
        Expense::where('id', $request->get('id'))->delete();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully expense deleted."])->setStatusCode(200);
    }
}