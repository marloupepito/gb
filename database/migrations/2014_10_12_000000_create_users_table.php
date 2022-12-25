<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('branch_name')->nullable()->unique();
            $table->string('branch_assigned_person')->nullable();
            $table->string('branch_position')->nullable();
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->string('status')->nullable();
            $table->string('year')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        // Schema::create('branch', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('path')->nullable()->unique();
        //     $table->string('title')->nullable();
        //     $table->string('icon')->nullable();
        //     $table->rememberToken();
        //     $table->timestamps();
        // });


        Schema::create('branch_ingredients', function (Blueprint $table) {
            $table->id();
            $table->string('branch_id')->nullable();
            $table->string('ingredients_name')->nullable();
            $table->string('ingredients_quantity')->nullable();
            $table->string('bind_name')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('branch_bread', function (Blueprint $table) {
            
            $table->id();
            $table->string('branch_id')->nullable();
            $table->string('bread_name')->nullable();
            $table->string('quantity')->nullable();
            $table->string('price')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('branch_bread_sold', function (Blueprint $table) {
            
            $table->id();
            $table->string('branch_id')->nullable();
            $table->string('bread_name')->nullable();
            $table->string('quantity')->nullable();
            $table->string('price')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('branch_bread_out', function (Blueprint $table) {
            
            $table->id();
            $table->string('branch_id')->nullable();
            $table->string('bread_name')->nullable();
            $table->string('quantity')->nullable();
            $table->string('price')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
        
        Schema::create('production', function (Blueprint $table) {
            $table->id();
            $table->string('random_id')->nullable();
            $table->string('branch_ingredients_id')->nullable();
            $table->string('branch_id')->nullable();
            $table->string('bread_name')->nullable();
            $table->string('code_name')->nullable();
            $table->string('ingredients_name')->nullable();
            $table->string('production_quantity')->nullable();
            $table->string('quantity')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        // Schema::create('ingredients', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('ingredients_name')->nullable();
        //     $table->string('ingredients_quantity')->nullable();
        //     $table->string('ingredients_quantity_description')->nullable();
        //     $table->rememberToken();
        //     $table->timestamps();
        // });

         Schema::create('ingredients_request', function (Blueprint $table) {
            
            $table->id();
            $table->string('branch_id')->nullable();
            $table->string('ingredients_id')->nullable();
            $table->string('request_id')->nullable();
            $table->string('ingredients_name')->nullable();
            $table->string('ingredients_quantity')->nullable();
            $table->string('ingredients_bind')->nullable();
            $table->string('ingredients_status')->nullable();
            $table->string('notify')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });



        //   Schema::create('inventory_production', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('branch_id')->nullable();
        //     $table->string('branch_name')->nullable();
        //     $table->string('production_id')->nullable();
        //     $table->string('bread_name')->nullable();
        //     $table->string('quantity')->nullable();
        //     $table->string('price')->nullable();
        //     $table->string('total')->nullable();
        //     $table->rememberToken();
        //     $table->timestamps();
        // });

        

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
