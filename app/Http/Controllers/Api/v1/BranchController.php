<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Branch;
use Auth;
use Yajra\DataTables\Facades\DataTables;

class BranchController extends Controller
{
    public function branchList($id = null)
    {
    	if($id != null)
    	{
    		$branchs = Branch::where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $branchs])->setStatusCode(200);

    	} else {
    		$branchs = Branch::get();
            return Datatables::of($branchs)->make(true);
    	}
    }
    
    public function create(Request $request)
    {
        //return $request->all();
        try
        {
            // $branch                = new Branch;
            // $branch->name          = $request->get('name');
            // $branch->address       = $request->get('address');
            // $branch->incharge_name = $request->get('incharge_name');
            // $branch->mobile        = $request->get('mobile');
            // $branch->email         = $request->get('email');
            // $branch->city          = $request->get('city');
            // $branch->state         = $request->get('state');
            // $branch->zipcode       = $request->get('zipcode');
            // $branch->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully branch created."])->setStatusCode(200);
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
	    	$branch           = Branch::where('id', $request->get('id'))->first();
	    	$branch->name          = $request->get('name');
            $branch->address       = $request->get('address');
            $branch->incharge_name = $request->get('incharge_name');
            $branch->mobile        = $request->get('mobile');
            $branch->email         = $request->get('email');
            $branch->city          = $request->get('city');
            $branch->state         = $request->get('state');
            $branch->zipcode       = $request->get('zipcode');
	    	$branch->update();

	    	return response()->json(["code" => 200, "status" => "success", "message" => " Successfully branch updated."])->setStatusCode(200);
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
    		Branch::where('id', $request->get('id'))->delete();

    		return response()->json(["code" => 200, "status" => "success", "message" => " Successfully branch deleted."])->setStatusCode(200);
    	}
    	catch (\Exception $e) 
    	{
    		//return $e;
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    		
    	}
    }
}