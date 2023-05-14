<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\User;
use Mockery\Undefined;
class AttendanceController extends Controller
{

    
    public function get_branch_attendance($id){
        return response()->json([
            'status' => $id
        ]);
    }
    public function add_attendance(Request $request){

        $account = User::where('password',$request->qr)->first();
        $att=  Attendance::where('userid',$account->id)->first();
        if($request->type === '#TimeIn'){
          if($att == null || $att->time_in1 === null){
            Attendance::create([
                'userid' =>$account->id,
                'time_in1' =>$request->date
            ]);
          }else if($att->time_in2 === null){
            Attendance::where('userid',$account->id)->create([
                'time_in2' =>$request->date
            ]);
          }else if($att->time_in3 === null){
            Attendance::where('userid',$account->id)->create([
                'time_in3' =>$request->date
            ]);
          }else if($att->time_in4 === null){
            Attendance::where('userid',$account->id)->create([
                'time_in4' =>$request->date
            ]);
          }
        }else if($request->type === '#TimeOut'){

        }
        return response()->json([
            'status' => 'success'
        ]);
    }
}
