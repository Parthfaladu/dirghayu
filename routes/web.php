<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/test', function(){
// 	return \DB::table('subscription')
// 		->join('payment', 'payment.subscription_id', '=', 'subscription.id')
// 		->select('subscription.*','payment.*', DB::raw('sum(payment.paid_amount) AS paid_amount_total'))
// 		->get();
// });
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '(.*)');
