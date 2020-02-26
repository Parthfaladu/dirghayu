<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/auth/login', 'Api\v1\UserController@doLogin');


Route::group(['middleware' => ['auth:api'], 'namespace' => 'Api\v1'], function(){

	Route::get('/auth/user', 'AuthController@userDetails');
	Route::post('/auth/user/status', 'AuthController@changeUserStatus');

	Route::post('/staff/member', 'StaffController@storeStaffMember');
	Route::get('/staff/member/{memberId}', 'StaffController@getStaffMemberDetails');
	Route::post('/staff/member/update', 'StaffController@updateStaffMemberDetails');
	Route::delete('/staff/member/{memberId}', 'StaffController@deleteStaffMember');
	Route::post('/staff/member/list', 'StaffController@staffMemberList');
	Route::post('/staff/member/status', 'StaffController@changeStaffMemberStatus');

	Route::get('/payment/list/{id?}', 'PaymentController@paymentList');
	Route::post('/payment/create', 'PaymentController@create');
	Route::post('/payment/update', 'PaymentController@update');
	Route::post('/payment/delete', 'PaymentController@delete');
	Route::post('/payment/status', 'PaymentController@changePaymentStatus');
	Route::get('/payment/customer', 'PaymentController@activeSubscriptionList');
	Route::get('/payment/package/{id}', 'PaymentController@getPackages');
	Route::post('/payment/amount', 'PaymentController@getAmount');
	Route::get('/payment/subscription/{id}', 'PaymentController@getSubscription');


	Route::get('/customer/list/{id?}', 'CustomerController@customerList');
	Route::post('/customer/create', 'CustomerController@create');
	Route::post('/customer/update', 'CustomerController@update');
	Route::post('/customer/delete', 'CustomerController@delete');

	Route::get('/package/list/{id?}', 'PackageController@packageList');
	Route::post('/package/create', 'PackageController@create');
	Route::post('/package/update', 'PackageController@update');
	Route::post('/package/delete', 'PackageController@delete');

	Route::get('/product/list/{id?}', 'ProductController@productList');
	Route::post('/product/create', 'ProductController@create');
	Route::post('/product/update', 'ProductController@update');
	Route::post('/product/delete', 'ProductController@delete');

	Route::get('/productsell/list/{id?}', 'ProductController@productSellList');
	Route::post('/productsell/create', 'ProductController@createProductSell');
	Route::post('/productsell/update', 'ProductController@updateProductSell');
	Route::post('/productsell/delete', 'ProductController@deleteProductSell');

	Route::get('/enquiry/list/{id?}', 'EnquiryController@enquiryList');
	Route::post('/enquiry/create', 'EnquiryController@create');
	Route::post('/enquiry/update', 'EnquiryController@update');
	Route::post('/enquiry/delete', 'EnquiryController@delete');


	Route::get('/subscription/list/{id?}', 'SubscriptionController@subscriptionList');
	Route::post('/subscription/create', 'SubscriptionController@create');
	Route::post('/subscription/update', 'SubscriptionController@update');
	Route::post('/subscription/delete', 'SubscriptionController@delete');

	Route::get('/notice/list/{id?}', 'NoticeController@noticeList');
	Route::post('/notice/create', 'NoticeController@create');
	Route::post('/notice/update', 'NoticeController@update');
	Route::post('/notice/delete', 'NoticeController@delete');

	Route::get('/expense/list/{id?}', 'ExpenseController@expenseList');
	Route::post('/expense/create', 'ExpenseController@create');
	Route::post('/expense/update', 'ExpenseController@update');
	Route::post('/expense/delete', 'ExpenseController@delete');

	Route::get('/branch/list/{id?}', 'BranchController@branchList');
	Route::post('/branch/create', 'BranchController@create');
	Route::post('/branch/update', 'BranchController@update');
	Route::post('/branch/delete', 'BranchController@delete');

	Route::get('/invoice/list/{id?}', 'InvoiceController@invoiceList');
	Route::post('/invoice/create', 'InvoiceController@create');
	Route::post('/invoice/update', 'InvoiceController@update');
	Route::post('/invoice/delete', 'InvoiceController@delete');

	Route::group(['middleware' => ['auth']], function()
	{

		Route::group(['middleware' => ['role:admin|stalf|customer']], function () 
		{


		});

	});
});
