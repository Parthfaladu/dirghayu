<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Package;
use Auth;
use Yajra\DataTables\Facades\DataTables;
use Exception;
use App\Http\Requests\{PackageStoreRequest, PackageUpdateRequest, PackageDeleteRequest};

class PackageController extends Controller
{
    public function packageList($id = null)
    {
    	if($id != null)
    	{
    		$packages = Package::where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $packages])->setStatusCode(200);

    	} 
        $packages = Package::get();
        return Datatables::of($packages)->make(true);
    }

    public function create(PackageStoreRequest $request)
    {
        $package                   = new Package;
        $package->name             = $request->get('name');
        $package->price            = $request->get('price');
        $package->duration         = $request->get('duration');
        $package->detail           = $request->get('detail');
        $package = $this->uploadImage($package, $request->file('packageImage'));
        $package->save();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully package created."])->setStatusCode(200);
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
    
    public function update(PackageUpdateRequest $request)
    {
        $package           = Package::where('id', $request->get('id'))->first();
        $package->name     = $request->get('name');
        $package->price    = $request->get('price');
        $package->duration = $request->get('duration');
        $package->detail   = $request->get('detail');
        $package = $this->uploadImage($package, $request->file('packageImage'));
        $package->update();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully package updated."])->setStatusCode(200);
    }

    public function delete(PackageDeleteRequest $request)
    {
        Package::where('id', $request->get('id'))->delete();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully package deleted."])->setStatusCode(200);
    }
}