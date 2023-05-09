<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->string('userid')->nullable();
            $table->string('time_in1')->nullable();
            $table->string('time_out1')->nullable();
            $table->string('time_in2')->nullable();
            $table->string('time_out2')->nullable();
            $table->string('time_in3')->nullable();
            $table->string('time_out3')->nullable();
            $table->string('time_in4')->nullable();
            $table->string('time_out4')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attendances');
    }
};
