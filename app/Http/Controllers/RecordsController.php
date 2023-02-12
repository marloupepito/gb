<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Records;
class RecordsController extends Controller
{
    public function get_branch_record(Request $request){

       $result = Records::where([['remember_token','=','done'],['date','=',$request->date],['branch_id','=',$request->branchid]])->get();
          return response()->json([
              'status' => $result,
          ]);
    }
}
