<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InventoryProduction extends Model
{
      protected $table = 'inventory_production';
    use HasFactory;
    protected $fillable = [
            'branch_id',
            'branch_name',
            'production_id',
            'cashier_name',
            'sales_clerk',
            'trainee',
            'bread_name',
            'beginning_pcs',
            'new_production_pcs',
            'price',
            'total',
            'bread_out',
            'charge_pc',
            'remaining_pcs',
            'sold_bread',
            'sales',
            'production_status',
            'notify',
            'date'
     ];
}
