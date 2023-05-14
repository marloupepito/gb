<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BranchBread;
use App\Models\BranchIngredients;
use App\Models\BranchBreadSold;
use App\Models\BranchBreadOut;
use App\Models\Records;
use App\Models\Production;
class BranchBreadController extends Controller
{
    
    public function add_attendance(){
        return response()->json([
            'status' => 'success'
        ]);
    }
    public function delete_bread($id){
        BranchBread::where('key',$id)->delete();
         return response()->json([
             'status' => 'success'
         ]);
    }
    public function add_branch_bread(Request $request){

        BranchBread::create([
           'branch_id' =>$request->data['branch_id'],
           'bread_name' =>$request->data['bread_name'],
           'price' =>$request->data['price']
        ]);
        return response()->json([
            'status' => $request->data
        ]);
    }
    public function edit_branch_bread_list(Request $request){
       BranchBread::where('key',$request->data['key'])->update([
        'bread_name' =>$request->data['bread_name'],
        'quantity' =>$request->data['quantity'],
        'price' =>$request->data['price']
       ]);
        return response()->json([
            'status' => 'success'
        ]);
    }

    public function delete_production_code(Request $request){
        Production::where('random_id','=',$request->id)->delete();
    }
    public function get_bakers_report($id){
        $ingredients = Records::where([['status','=',null],['remember_token','=',null],['branch_id','=',$id]])->orderBy('key', 'ASC')->get();
        return response()->json([
            'status' => $ingredients
        ]);
    }

    public function get_bread_report($id){
        $ingredients = Records::where([['status','=','breads'],['remember_token','=',null],['branch_id','=',$id]])->orderBy('key', 'ASC')->get();
        return response()->json([
            'status' => $ingredients
        ]);
    }
    public function get_all_bread(){
        $bread =BranchBread::all();
        return response()->json([
            'status' => $bread
        ]);
    }
    // public function get_bread_every_branch2($id){

    //     $ingredients = BranchBread::where('branch_id', $id)->orderBy('key', 'desc')->get();
    //     return response()->json([
    //         'status' => $ingredients
    //     ]);
    // }
    public function add_bread_branch_sold(Request $request){

        $branchid = $request->branchid;

        $getBread = Records::where([['branch_id','=', $branchid],['key','=',$request->breadid]])->first();
       
       // $breadout=$getBread->beginning - $request->breadout;
       // $charge=$getBread->production - $request->charge;
       // $date = date("A") === "AM"?date("F d, Y").' '.'PM':date("F d, Y",strtotime ('+1 day')).' '.'AM';
       // $date= date("F d, Y A");
        
              $records = new Records;
              $records->branch_id = $branchid;
              $records->bread_id = $getBread->bread_id;
              $records->bread_name =$getBread->bread_name;
              $records->beginning = $request->remaining;
              $records->price = $getBread->price;
              $records->total = $request->remaining;
              $records->date = $request->date;
              $records->save();


              $alltotal =$getBread->total;
              $breadout = $request->breadout;
              $breadTotalRemaining= $alltotal-$breadout;
              $remaining =  $request->remaining;
              $soldout =  $breadTotalRemaining - $remaining;


         Records::where([['branch_id', $branchid],['key', $request->breadid]])
          ->update([
            'breadout' => $breadout,
           // 'charge' => $request->charge,
            'remaining' =>$remaining,
            'soldout' =>$soldout,
            'assigned2' =>$request->assigned,
            'remark3' =>$request->remarks,
            'sales' =>$getBread->price * $soldout,
            'date' =>$request->date,
            'remember_token' =>'done',
        ]);
          

        return response()->json([
            'status' => $getBread
        ]);

    }
    public function add_bread_branch_out(Request $request){


        $branchid = $request->branchid;

        $getBread = BranchBread::where([['branch_id','=', $branchid],['key','=',$request->breadid]])->first();
        $total = $getBread->quantity - $request->breadout;

         BranchBread::where([['branch_id', $branchid],['key', $request->breadid]])
          ->update(['quantity' => $total]);

            $ingredients = new BranchBreadOut;
            $ingredients->branch_id = $branchid;
            $ingredients->bread_name = $getBread->bread_name;
            $ingredients->quantity = $request->breadout;
            $ingredients->price = $getBread->price;
            $ingredients->save();

        return response()->json([
            'status' => $getBread->quantity
        ]);

    }
    
}
