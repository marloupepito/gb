<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branch;
use App\Models\User;
class BranchController extends Controller
{
  public function get_all_branch(){
       $users = User::where('branch_name','<>','admin')->get();
        return response()->json([
            'status' => $users
        ]);
    }

     public function get_branch_id(Request $request){
         $request->validate([
            'branch'=>['required'],
        ]);
       $branch = User::where('branch_name', '=',$request->branch)->first();
        return response()->json([
            'status' => $branch
        ]);
    }
}
