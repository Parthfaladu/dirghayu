<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Package;
use Auth;
use Yajra\DataTables\Facades\DataTables;

class PackageController extends Controller
{
    public function packageList($id = null)
    {
    	if($id != null)
    	{
    		$packages = Package::where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $packages])->setStatusCode(200);

    	}else{
    		$packages = Package::get();
            return Datatables::of($packages)->make(true);
    	}
    }
    public function create(Request $request)
    {
        //return $request->all();
        try
        {
            $package           = new Package;
            $package->user_id  = Auth::user()->id;
            $package->name     = $request->get('name');
            $package->price    = $request->get('price');
            $package->duration = $request->get('duration');
            $package->detail   = $request->get('detail');
            $package = $this->uploadImage($package, $request->file('packageImage'));
            $package->save();

            return response()->json(["code" => 200, "status" => "success", "message" => " Successfully package created."])->setStatusCode(200);
        }
        catch (\Exception $e) 
        {
            //return $e;
            return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
            
        }
    }

    private function uploadImage($package, $packageImage)
    {
        $imagePath   = '';

        if($packageImage && $packageImage->isValid()) 
         {
            $destinationPath = 'package/';
            $extension = $packageImage->getClientOriginalExtension(); 
            $imageName = str_random(32).'.'.$extension;

            if($packageImage->move($destinationPath, $imageName)){
                $imagePath = $destinationPath.$imageName;
            }
            $package->image = '/'.$imagePath;
         }
        return $package;
    }
    
    public function update(Request $request)
    {

    	try
    	{
	    	$package           = Package::where('id', $request->get('id'))->first();
	    	$package->name     = $request->get('name');
	    	$package->price    = $request->get('price');
	    	$package->duration = $request->get('duration');
	    	$package->detail   = $request->get('detail');
	    	$package->update();

	    	return response()->json(["code" => 200, "status" => "success", "message" => " Successfully package updated."])->setStatusCode(200);
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
    		Package::where('id', $request->get('id'))->delete();

    		return response()->json(["code" => 200, "status" => "success", "message" => " Successfully package deleted."])->setStatusCode(200);
    	}
    	catch (\Exception $e) 
    	{
    		//return $e;
	    	return response()->json(["code" => 500, "status" => "failed", "message" => "There is some internal error."])->setStatusCode(500);
    		
    	}
    }
}