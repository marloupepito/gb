<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Records extends Model
{
       use HasFactory;
     protected $primaryKey = 'key';
     protected $table = 'records';
     protected $fillable = [
       'key',
       'bread_id',
       'branch_id',
       'bread_name',
       'beginning',
       'production',
       'price',
       'total',
       'breadout',
       'charge',
       'remaining',
       'soldout',
       'sales',
       'date',
     ];
}
