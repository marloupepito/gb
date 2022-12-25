<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BranchBread;
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
    
}
