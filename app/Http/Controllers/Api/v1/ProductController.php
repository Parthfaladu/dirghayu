<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductSell;
use App\Models\Customer;
use Auth;
use Yajra\DataTables\Facades\DataTables;
use Exception;
use PDF;

class ProductController extends Controller
{
    public function productList($id = null)
    {
    	if($id != null)
    	{
    		$products = Product::where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $products])->setStatusCode(200);

    	} else {
    		$products = Product::get();
            return Datatables::of($products)->make(true);
    	}
    }

    public function create(Request $request)
    {
        try
        {
            $product           = new Product;
            $product->name     = $request->get('name');
            $product->price    = $request->get('price');
            $product->quantity = $request->get('quantity');
            $product->detail   = $request->get('detail');
            $product->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product created."])->setStatusCode(200);
        }
        catch (Exception $e) {
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
    	catch (Exception $e) {
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
    	catch (Exception $e) {
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

        } else {
            $productSell = ProductSell::with('user','product')->get();
            return Datatables::of($productSell)->make(true);
        }
    }

    public function createProductSell(Request $request)
    {
        try
        {
            $product = Product::where("name", $request->get('product_name'))->first();

            if($product != null) {
                $product->quantity = $product->quantity - (int)$request->get('quantity');
                $product->update();
            }

            $productSell                    = new ProductSell;
            $productSell->user_id           = $request->get('user_id');
            $productSell->product_name      = $request->get('product_name');
            $productSell->staff_member_name = Auth::user()->first_name.' '.Auth::user()->last_name;
            $productSell->quantity          = $request->get('quantity');
            $productSell->paid_amount       = $request->get('paid_amount');
            $productSell->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product created."])->setStatusCode(200);
        }
        catch (Exception $e) {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
        }
    }

    public function updateProductSell(Request $request)
    {
        try
        {
            $productSell                = ProductSell::where('id', $request->get('id'))->first();
            $productSell->product_name  = $request->get('product_name');
            $productSell->user_id       = $request->get('user_id');
            $productSell->quantity      = $request->get('quantity');
            $productSell->paid_amount   = $request->get('paid_amount');
            $productSell->update();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully product Sell updated."])->setStatusCode(200);
        }
        catch (Exception $e) {
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
        catch (Exception $e) {
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
        }
    }

    private function getProductSellReport($customerId, $packageName)
    {
        $productSell = ProductSell::with('user','product');

        if($customerId !== null && $customerId !== 'null') {
            $productSell = $productSell->where('user_id', $customerId);
        }

        if($packageName !== null && $packageName !== 'null') {
            $productSell = $productSell->where('product_name', $packageName);
        }

        return $productSell->get();
    }

    public function productSellReport($customerId = null, $packageName = null)
    {
        $productSell = $this->getProductSellReport($customerId, $packageName);

        return Datatables::of($productSell)->make(true);
    }

    public function downloadProductSellReport(Request $request)
    {
        $productSells = $this->getProductSellReport($request->get("customerId"), $request->get("packageName"));

        $pdf = PDF::loadView('reports.productsells', ['productSells' => $productSells]);
        
        return $pdf->download('productsells.pdf');
    }
}