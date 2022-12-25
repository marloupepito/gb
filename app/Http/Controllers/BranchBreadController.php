<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BranchBread;
use App\Models\BranchIngredients;

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

        // $getBread = BranchBread::where([['branch_id','=', $request->branchid],['key','=',$request->breadid]])->first();
        // $total = $getBread->quantity - $request->quantitysold;

        //  BranchBread::where([['branch_id', $request->branchid],['key', $request->breadid]])
        //   ->update(['quantity' => $total]);

        // $branchid = $request->branchid;
        // $ingredients = new BranchIngredients;
        // $ingredients->branch_id = $branchid;
        // $ingredients->ingredients_name = $request->data['ingredient_name'];
        // $ingredients->ingredients_quantity = $request->data['quantity'];
        // $ingredients->bind_name = $request->data['bundle'];
        // $ingredients->save();

        return response()->json([
            'status' => $getBread->quantity
        ]);
    }
    
    
}
