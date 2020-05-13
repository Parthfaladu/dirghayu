<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Currency;
use App\Models\Settings;

class SettingController extends Controller
{
    public function getCurrencyList()
    {
        $currencyList = Currency::get();

        return response()->json(["status" => "success", "data" => $currencyList]);
    }
    public function getSettings()
    {
        $settings = Settings::get();
        
        return response()->json(["status" => "success", "data" => $settings]);
    }
    public function updateSettings(Request $request)
    {
        $settings = Settings::first();
        $settings->title       = $request->get("companyTitle");
        $settings->currency_id = $request->get("currencyId");
        $settings->footer      = $request->get("footerText");
        $settings = $this->uploadImage($settings, $request->file('profileImage'));
        $settings->update();  

        return response()->json(["status" => "success", "message" => "Successfully setting details updated."]);
    }

    private function uploadImage($settings, $profileImage)
    {
        $imagePath   = '';

        if($profileImage && $profileImage->isValid()) 
        {
            $destinationPath = 'images/';
            $extension = $profileImage->getClientOriginalExtension(); 
            $imageName = str_random(32).'.'.$extension;

            if($profileImage->move($destinationPath, $imageName)){
                $imagePath = $destinationPath.$imageName;
            }
            $settings->logo_url = '/'.$imagePath;
        }
        return $settings;
    }
}