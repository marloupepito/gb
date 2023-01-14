<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branch;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
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

    public function add_branch(Request $request){

        $ingredients = new User;
        $ingredients->key = rand(10000,1000000);
        $ingredients->branch_name = $request->branchName;
        $ingredients->branch_assigned_person = $request->assignPerson;
        $ingredients->branch_position = $request->branchPosition;
        $ingredients->username = $request->username;
        $ingredients->password = Hash::make($request->password);
        $ingredients->save();
       return response()->json([
           'status' => 'success'
       ]);
   }

   public function delete_branch(Request $request){

    User::where('id',$request->id)->delete();
    return response()->json([
        'status' => 'success'
    ]);
}

   
}
