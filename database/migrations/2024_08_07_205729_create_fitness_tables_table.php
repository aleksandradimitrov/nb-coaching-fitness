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
        Schema::create('fitness_tables', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->required();
            $table->string('name')->max('255');
            $table->string('description')->nullable()->max('255');
            $table->string('url')->max('255');
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
        Schema::dropIfExists('fitness_tables');
    }
};
