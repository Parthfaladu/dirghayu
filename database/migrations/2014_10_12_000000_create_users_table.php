<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->increments('id');
            $table->string('email', 255)->unique();
            $table->string('password', 255);
            $table->rememberToken()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('gender', 255);
            $table->date('dob');
            $table->string('first_name', 255);
            $table->string('last_name', 255);
            $table->string('phone', 20);
            $table->string('address', 255);
            $table->text('photo_url')->nullable();
            $table->tinyInteger('is_active')->default('1');
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
        Schema::dropIfExists('users');
    }
}
