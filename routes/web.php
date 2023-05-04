<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\EvaluatorController;
// use App\Http\Controllers\UsersController;
// use App\Http\Controllers\BranchIngredientsController;
// use App\Http\Controllers\IngredientsController;
// use App\Http\Controllers\IngredientsRequestController;
// use App\Http\Controllers\ProductionController;
// use App\Http\Controllers\InventoryProductionController;
// use App\Http\Controllers\BranchController;
// use App\Http\Controllers\NotificationController;
// use App\Http\Controllers\BranchBreadController;
// use App\Http\Controllers\RecordsController;
use Illuminate\Http\Request;

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
Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{jsx?}',function(){
    return view('welcome');
})->where('jsx','[\/\w\.-]*');



Route::post('/logout','App\Http\Controllers\UsersController@logout');
Route::post('/get_branch_id','App\Http\Controllers\BranchController@get_branch_id');
Route::post('/add_branch','App\Http\Controllers\BranchController@add_branch');
Route::post('/delete_branch','App\Http\Controllers\BranchController@delete_branch');

Route::post('/user_login','App\Http\Controllers\UsersController@user_login');
Route::post('/add_account','App\Http\Controllers\UsersController@add_account');
Route::put('/update_account','App\Http\Controllers\UsersController@update_account');
Route::post('/confirm_password','App\Http\Controllers\UsersController@confirm_password');



Route::post('/get_all_ingredients','App\Http\Controllers\IngredientsController@get_all_ingredients');

Route::post('/send_request_form','App\Http\Controllers\IngredientsRequestController@send_request_form');
Route::post('/get_request_from_branch','App\Http\Controllers\IngredientsRequestController@get_request_from_branch');
Route::post('/get_only_current_branch_request','App\Http\Controllers\IngredientsRequestController@get_only_current_branch_request');
Route::post('/accept_request_ingredients','App\Http\Controllers\IngredientsRequestController@accept_request_ingredients');
Route::post('/get_ingredients_list','App\Http\Controllers\IngredientsRequestController@get_ingredients_list');
Route::post('/delete_ingredients_request','App\Http\Controllers\IngredientsRequestController@delete_ingredients_request');

Route::post('/add_branch_ingredients','App\Http\Controllers\ProductionController@add_branch_ingredients');
Route::put('/edit_branch_ingredients','App\Http\Controllers\ProductionController@edit_branch_ingredients');
Route::patch('/update_production_code','App\Http\Controllers\ProductionController@update_production_code');

Route::post('/add_bread_list','App\Http\Controllers\InventoryProductionController@add_bread_list');
Route::post('/get_branch_bread_sold','App\Http\Controllers\InventoryProductionController@get_branch_bread_sold');
Route::post('/get_branch_bread_out','App\Http\Controllers\InventoryProductionController@get_branch_bread_out');
Route::post('/goto_bread_report','App\Http\Controllers\InventoryProductionController@goto_bread_report');


Route::post('/get_notification','App\Http\Controllers\NotificationController@get_notification');


Route::post('/get_every_ingredients','App\Http\Controllers\BranchIngredientsController@get_every_ingredients');
Route::post('/make_branch_ingredients','App\Http\Controllers\BranchIngredientsController@make_branch_ingredients');

Route::post('/add_bread_branch_sold','App\Http\Controllers\BranchBreadController@add_bread_branch_sold');
Route::post('/add_bread_branch_out','App\Http\Controllers\BranchBreadController@add_bread_branch_out');
Route::post('/delete_production_code','App\Http\Controllers\BranchBreadController@delete_production_code');
Route::patch('/edit_branch_bread_list','App\Http\Controllers\BranchBreadController@edit_branch_bread_list');
Route::post('/add_branch_bread','App\Http\Controllers\BranchBreadController@add_branch_bread');




Route::post('/get_all_records','App\Http\Controllers\RecordsController@get_all_records');
Route::post('/get_user_charge','App\Http\Controllers\RecordsController@get_user_charge');


Route::post('/add_branch_expenses','App\Http\Controllers\ExpensesController@add_branch_expenses');

Route::post('/create_credit_or_charge','App\Http\Controllers\CreditsController@create_credit_or_charge');



