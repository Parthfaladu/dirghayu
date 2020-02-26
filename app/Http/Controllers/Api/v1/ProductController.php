<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductSell;
use App\Models\Customer;
use Auth;
use Yajra\DataTables\Facades\DataTables;

class ProductController extends Controller
{
    public function productList($id = null)
    {
    	if($id != null)
    	{
    		$products = Product::where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $products])->setStatusCode(200);

    	}else{
    		$products = Product::get();
            return Datatables::of($products)->make(true);
    	}
    	
    }
    public function create(Request $request)
    {
        //return $request->all();
        try
        {
            $product           = new Product;
            $product->user_id  = Auth::user()->id;
            $product->name     = $request->get('name');
            $product->price    = $request->get('price');
            $product->quantity = $request->get('quantity');
            $product->detail   = $request->get('detail');
            $product->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product created."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }
    public function update(Request $request)
    {

    	try
    	{
	    	$product           = Product::where('id', $request->get('id'))->first();
	    	$product->name     = $request->get('name');
	    	$product->price    = $request->get('price');
	    	$product->quantity = $request->get('quantity');
	    	$product->detail   = $request->get('detail');
	    	$product->update();

	    	return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product updated."])->setStatusCode(200);
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
    		Product::where('id', $request->get('id'))->delete();

    		return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product deleted."])->setStatusCode(200);
    	}
    	catch (\Exception $e) 
    	{
    		//return $e;
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    		
    	}
    }

    public function productSellList($id = null)
    {
        $productSell = null;

        if($id != null)
        {
            $productSell = ProductSell::with('user','product')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $productSell])->setStatusCode(200);

        }else{
            $productSell = ProductSell::with('user','product')->get();
            return Datatables::of($productSell)->make(true);
        }
        
    }
    public function createProductSell(Request $request)
    {
        //return $request->all();
        try
        {
            $productSell                  = new ProductSell;
            $productSell->user_id         = $request->get('user_id');
            $productSell->product_id      = $request->get('product_id');
            $productSell->staff_member_id = Auth::user()->id;
            $productSell->quantity        = $request->get('quantity');
            $productSell->paid_amount     = $request->get('paid_amount');
            $productSell->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product created."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            //return $e;
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }
    public function updateProductSell(Request $request)
    {
        try
        {
            $productSell              = ProductSell::where('id', $request->get('id'))->first();
            $productSell->product_id  = $request->get('product_id');
            $productSell->user_id     = $request->get('user_id');
            $productSell->quantity    = $request->get('quantity');
            $productSell->paid_amount = $request->get('paid_amount');
            $productSell->update();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product Sell updated."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            //return $e;
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }

    public function deleteProductSell(Request $request)
    {
        try
        {
            ProductSell::where('id', $request->get('id'))->delete();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product deleted."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            //return $e;
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }
}