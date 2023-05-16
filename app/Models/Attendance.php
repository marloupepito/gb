<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
class Attendance extends Model
{
    use HasFactory;
    protected $table = 'attendances';
    protected $fillable = [
        'userid',
        'branchid',
        'time_in1',
        'time_out1',
        'time_in2',
        'time_out2',
        'time_in3',
        'time_out3',
        'time_in4',
        'time_out4',
        'total',
     ];

     public function attendanceBelongsToAccount()
     {
         return $this->belongsTo(User::class,'userid');
     }
}
