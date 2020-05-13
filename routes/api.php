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
Route::post('/forgot/password','Api\v1\UserController@forgotPassword');
Route::get('/settings', 'Api\v1\SettingController@getSettings');


Route::group(['middleware' => ['auth:api'], 'namespace' => 'Api\v1'], function(){
	//Route::group(['middleware' => ['role:super_admin']], function () {

		Route::get('/dashboard/detail', 'DashboardController@viewDashboard');
		Route::get('/newcustomer/list', 'DashboardController@newCustomer');
		Route::get('/expiry/subscription', 'DashboardController@expirySubscription');
		Route::get('/active/subscription/list', 'DashboardController@activeSubscription');
		Route::post('/change/password','UserController@changePassword');

		Route::get('/auth/user', 'AuthController@userDetails');
		Route::post('/auth/user', 'AuthController@updateUserDetails');
		Route::post('/auth/user/status', 'AuthController@changeUserStatus');
		Route::get('/auth/user/role', 'AuthController@userRole');

		Route::get('/currency/list', 'SettingController@getCurrencyList')->middleware('can:permission_manage');
		Route::post('/settings', 'SettingController@updateSettings')->middleware('can:permission_manage');

		Route::get('/permissions', 'PermissionController@getAllPermission')->middleware('can:permission_manage');
		Route::get('/roles/permissions', 'PermissionController@getAllRolePermission')->middleware('can:permission_manage');
		Route::post('/roles/permissions', 'PermissionController@updateRolePermission')->middleware('can:permission_manage');
		
		Route::post('/staff/member', 'StaffController@storeStaffMember')->middleware('can:add__staff_member');
		Route::get('/staff/member/{memberId}', 'StaffController@getStaffMemberDetails')->middleware('can:view__staff_member');
		Route::post('/staff/member/update', 'StaffController@updateStaffMemberDetails')->middleware('can:update__staff_member');
		Route::delete('/staff/member/{memberId}', 'StaffController@deleteStaffMember')->middleware('can:delete__staff_member');
		Route::post('/staff/member/list', 'StaffController@staffMemberList')->middleware('can:view__staff_member');
		Route::post('/staff/member/status', 'StaffController@changeStaffMemberStatus')->middleware('can:update__staff_member');

		Route::get('/payment/list/{id?}', 'PaymentController@paymentList')->middleware('can:view__payment');
		Route::post('/payment/create', 'PaymentController@create')->middleware('can:add__payment');
		Route::post('/payment/update', 'PaymentController@update')->middleware('can:update__payment');
		Route::post('/payment/delete', 'PaymentController@delete')->middleware('can:delete__payment');
		Route::post('/payment/status', 'PaymentController@changePaymentStatus')->middleware('can:update__payment');
		Route::get('/payment/customer', 'PaymentController@activeSubscriptionList')->middleware('can:view__payment');
		Route::get('/payment/package/{id}', 'PaymentController@getPackages')->middleware('can:view__payment');
		Route::post('/payment/amount', 'PaymentController@getAmount')->middleware('can:view__payment');
		Route::get('/payment/subscription/{id}', 'PaymentController@getSubscription')->middleware('can:view__payment');


		Route::get('/customer/list/{id?}', 'CustomerController@customerList')->middleware('can:view__customer');
		Route::post('/customer/create', 'CustomerController@create')->middleware('can:add__customer');
		Route::post('/customer/update', 'CustomerController@update')->middleware('can:update__customer');
		Route::post('/customer/delete', 'CustomerController@delete')->middleware('can:delete__customer');

		Route::get('/package/list/{id?}', 'PackageController@packageList')->middleware('can:view__package');
		Route::post('/package/create', 'PackageController@create')->middleware('can:add__package');
		Route::post('/package/update', 'PackageController@update')->middleware('can:update__package');
		Route::post('/package/delete', 'PackageController@delete')->middleware('can:delete__package');

		Route::get('/product/list/{id?}', 'ProductController@productList')->middleware('can:view__product');
		Route::post('/product/create', 'ProductController@create')->middleware('can:add__product');
		Route::post('/product/update', 'ProductController@update')->middleware('can:update__product');
		Route::post('/product/delete', 'ProductController@delete')->middleware('can:delete__product');

		Route::get('/productsell/list/{id?}', 'ProductController@productSellList')->middleware('can:view__product_sell');
		Route::post('/productsell/create', 'ProductController@createProductSell')->middleware('can:add__product_sell');
		Route::post('/productsell/update', 'ProductController@updateProductSell')->middleware('can:update__product_sell');
		Route::post('/productsell/delete', 'ProductController@deleteProductSell')->middleware('can:delete__product_sell');
		Route::get('/productsell/report/{customerId?}/{packageName?}', 'ProductController@productSellReport');
		Route::post('/productsell/report/download', 'ProductController@downloadProductSellReport');

		Route::get('/enquiry/list/{id?}', 'EnquiryController@enquiryList')->middleware('can:view__enquiry');
		Route::post('/enquiry/create', 'EnquiryController@create')->middleware('can:add__enquiry');
		Route::post('/enquiry/update', 'EnquiryController@update')->middleware('can:update__enquiry');
		Route::post('/enquiry/delete', 'EnquiryController@delete')->middleware('can:delete__enquiry');

		Route::get('/subscription/list/{id?}', 'SubscriptionController@subscriptionList')->middleware('can:view__subscription');
		Route::post('/subscription/create', 'SubscriptionController@create')->middleware('can:add__subscription');
		Route::post('/subscription/update', 'SubscriptionController@update')->middleware('can:update__subscription');
		Route::post('/subscription/delete', 'SubscriptionController@delete')->middleware('can:delete__subscription');
		Route::get('/subscription/report/{customerId?}/{packageId?}/{status?}', 'SubscriptionController@subscriptionReport');
		Route::post('/subscription/report/download', 'SubscriptionController@downloadSubscriptionReport');

		Route::get('/notice/list/{id?}', 'NoticeController@noticeList')->middleware('can:view__notice');
		Route::post('/notice/create', 'NoticeController@create')->middleware('can:add__notice');
		Route::post('/notice/update', 'NoticeController@update')->middleware('can:update__notice');
		Route::post('/notice/delete', 'NoticeController@delete')->middleware('can:delete__notice');

		Route::get('/expense/list/{id?}', 'ExpenseController@expenseList')->middleware('can:view__expense');
		Route::post('/expense/create', 'ExpenseController@create')->middleware('can:add__expense');
		Route::post('/expense/update', 'ExpenseController@update')->middleware('can:update__expense');
		Route::post('/expense/delete', 'ExpenseController@delete')->middleware('can:delete__expense');

		Route::get('/branch/list/{id?}', 'BranchController@branchList')->middleware('can:view__branch');
		Route::post('/branch/create', 'BranchController@create')->middleware('can:add__branch');
		Route::post('/branch/update', 'BranchController@update')->middleware('can:update__branch');
		Route::post('/branch/delete', 'BranchController@delete')->middleware('can:delete__branch');

		Route::get('/invoice/list/{id?}', 'InvoiceController@invoiceList')->middleware('can:view__invoice');
		Route::post('/invoice/create', 'InvoiceController@create')->middleware('can:add__invoice');
		Route::post('/invoice/update', 'InvoiceController@update')->middleware('can:update__invoice');
		Route::post('/invoice/delete', 'InvoiceController@delete')->middleware('can:delete__invoice');
		Route::get('/invoice/download/{id}', 'InvoiceController@downloadPdf')->middleware('can:view__invoice');

		Route::get('/attendance/list/{attendanceDate}', 'AttendanceController@attendanceList')->middleware('can:view__attendance');;
		Route::post('/attendance/create', 'AttendanceController@create')->middleware('can:add__attendance');;
		Route::post('/attendance/uncheck', 'AttendanceController@attendanceUnchecked')->middleware('can:update__attendance');;
		Route::get('/attendance/report/{fromDate}/{toDate}/{customerId?}', 'AttendanceController@attendanceReport')->middleware('can:view__attendance');;
		Route::post('/attendance/report/download', 'AttendanceController@downloadReport')->middleware('can:view__attendance');;

	//});
});
