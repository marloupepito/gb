<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BranchBread;
use App\Models\BranchIngredients;
use App\Models\BranchBreadSold;
use App\Models\BranchBreadOut;

class BranchBreadController extends Controller
{
    public function get_bread_every_branch(Request $request){

        $limit = ($request->current * $request->pageSize) +1;
        $ingredients = BranchBread::where('branch_id', $request->branchid)->simplePaginate($limit);
        return response()->json([
            'status' => $ingredients
        ]);
    }
    public function get_bread_every_branch2(Request $request){

        $ingredients = BranchBread::where('branch_id', $request->branchid)->get();
        return response()->json([
            'status' => $ingredients
        ]);
    }
    public function add_bread_branch_sold(Request $request){

        $branchid = $request->branchid;

        $getBread = BranchBread::where([['branch_id','=', $branchid],['key','=',$request->breadid]])->first();
        $total = $getBread->quantity - $request->quantitysold;

         BranchBread::where([['branch_id', $branchid],['key', $request->breadid]])
          ->update(['quantity' => $total]);

            $ingredients = new BranchBreadSold;
            $ingredients->branch_id = $branchid;
            $ingredients->bread_name = $getBread->bread_name;
            $ingredients->quantity = $request->quantitysold;
            $ingredients->price = $getBread->price;
            $ingredients->save();

        return response()->json([
            'status' => $getBread->quantity
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
