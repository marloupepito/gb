<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\User;
use Mockery\Undefined;
use DateTime;
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
          if($att == null){
            Attendance::create([
                'userid' =>$account->id,
                'time_in1' =>$request->date
            ]);
          }else if($att->time_in1 !== null && $att->time_out1 === null){
              $update= Attendance::where('userid',$account->id)->update([
                    'time_out1' =>$request->date
                ]);
                if($update){
                  $earnings = [
                      ['start_time' => $att->time_in1, 'end_time' => $att->time_out1],
                  ];
                  
                  $total_hours = 0;

                        foreach ($earnings as $earning) {
                            $start_time = new DateTime($earning['start_time']);
                            $end_time = new DateTime($earning['end_time']);
                            
                            $interval = $start_time->diff($end_time);
                            
                            $hours = $interval->h;
                            $minutes = $interval->i / 60;
                            
                            $total_hours += $hours + $minutes;
                        }
                  Attendance::where('userid',$account->id)->update([
                      'total' =>$total_hours - 4
                  ]);
                }
          }else if($att->time_out1 !== null && $att->time_in2 === null){
             Attendance::where('userid',$account->id)->update([
                 'time_in2' =>$request->date
             ]);
          }else if($att->time_in2 !== null  && $att->time_out2 === null){
            $update= Attendance::where('userid',$account->id)->update([
              'time_out2' =>$request->date
          ]);
          if($update){
                  $earnings = [
                      ['start_time' => $att->time_in1, 'end_time' => $att->time_out1],
                      ['start_time' => $att->time_in2, 'end_time' => $att->time_out2],
                  ];
                  
                  $total_hours = 0;

                        foreach ($earnings as $earning) {
                            $start_time = new DateTime($earning['start_time']);
                            $end_time = new DateTime($earning['end_time']);
                            
                            $interval = $start_time->diff($end_time);
                            
                            $hours = $interval->h;
                            $minutes = $interval->i / 60;
                            
                            $total_hours += $hours + $minutes;
                        }
                  Attendance::where('userid',$account->id)->update([
                      'total' =>$total_hours - 4
                  ]);
                }
          }else if($att->time_out2 !== null  && $att->time_in3 === null){
            Attendance::where('userid',$account->id)->update([
                 'time_in3' =>$request->date
             ]);
          }else if($att->time_in3 !== null  && $att->time_out3 === null){
                $update= Attendance::where('userid',$account->id)->update([
                  'time_out3' =>$request->date
              ]);
              if($update){
                  $earnings = [
                      ['start_time' => $att->time_in1, 'end_time' => $att->time_out1],
                      ['start_time' => $att->time_in2, 'end_time' => $att->time_out2],
                      ['start_time' => $att->time_in3, 'end_time' => $att->time_out3],
                  ];
                  
                  $total_hours = 0;

                        foreach ($earnings as $earning) {
                            $start_time = new DateTime($earning['start_time']);
                            $end_time = new DateTime($earning['end_time']);
                            
                            $interval = $start_time->diff($end_time);
                            
                            $hours = $interval->h;
                            $minutes = $interval->i / 60;
                            
                            $total_hours += $hours + $minutes;
                        }
                  Attendance::where('userid',$account->id)->update([
                      'total' =>$total_hours - 4
                  ]);
                }
          }else if($att->time_out3 !== null  && $att->time_in4 === null){
            Attendance::where('userid',$account->id)->update([
                 'time_in4' =>$request->date
             ]);
          }else if($att->time_in4 !== null  && $att->time_out4 === null){
            $update= Attendance::where('userid',$account->id)->update([
              'time_out4' =>$request->date
          ]);
          if($update){
              $earnings = [
                  ['start_time' => $att->time_in1, 'end_time' => $att->time_out1],
                  ['start_time' => $att->time_in2, 'end_time' => $att->time_out2],
                  ['start_time' => $att->time_in3, 'end_time' => $att->time_out3],
                  ['start_time' => $att->time_in4, 'end_time' => $att->time_out4],
              ];
              
              $total_hours = 0;

                    foreach ($earnings as $earning) {
                        $start_time = new DateTime($earning['start_time']);
                        $end_time = new DateTime($earning['end_time']);
                        
                        $interval = $start_time->diff($end_time);
                        
                        $hours = $interval->h;
                        $minutes = $interval->i / 60;
                        
                        $total_hours += $hours + $minutes;
                    }
              Attendance::where('userid',$account->id)->update([
                  'total' =>$total_hours - 4
              ]);
            }
          }
          
        
        return response()->json([
            'status' => 'success'
        ]);
    }
}
