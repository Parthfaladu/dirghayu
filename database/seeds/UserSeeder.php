<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\User;
use App\Models\{Currency, Settings};
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $currencies = [['title' => 'Dollar','symbol' => '$'],['title' => 'Euro','symbol' => '€'],['title' => 'Pound','symbol' => '£'],['title' => 'Yuan','symbol' => '¥'],['title' => 'Indian Rupee','symbol' => '₹'],['title' => 'Yen','symbol' => '¥'],['title' => 'Russian Ruble','symbol' => 'р.']];
        
        foreach($currencies as $currencyData){
            $currency = new Currency;
            $currency->title =  $currencyData['title'];
            $currency->symbol = $currencyData['symbol'];
            $currency->save();
        }
        
        $setting = new Settings;
        $setting->currency_id = 1;
        $setting->title = 'Dirghayu Fitness Factory';
        $setting->logo_url = '/images/dirghayu_logo.svg';
        $setting->footer = 'Copyright © 2020 Dirghayu Fitness Factory. All rights reserved.';
        $setting->save();

        $user = new User;
        $user->email = 'admin@example.com';
        $user->password = bcrypt('123456');
        $user->gender = 'male';
        $user->dob = '2020-04-01';
        $user->first_name = 'admin';
        $user->last_name = 'admin';
        $user->phone = '+14844732454';
        $user->address = '1271 23rd St, Cameron, WI, 54822';
        $user->photo_url = '/profile/user5.png';
        $user->save();

        $role = Role::where("name", "super_admin")->first();
		$user->assignRole($role);
    }
}
