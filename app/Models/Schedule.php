<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
	protected $table = 'schedule';
    use HasFactory;
    protected $fillable = [
        'evaluatee_id',
        'evaluator_id',
        'commitment',
        'kos',
        'til',
        'mol',
        'total_commitment',
        'total_kos',
        'total_til',
        'total_mol',
        'total',
        'school_year',
        'section',
        'semester',
        'department',
        'academic_rank',
        'status',
        'year',

    ];
}
