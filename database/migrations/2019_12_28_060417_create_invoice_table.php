<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('bill_to');
            $table->string('customer_email')->nullable();
            $table->string('customer_address')->nullable();
            $table->string('customer_phone')->nullable();
            $table->date('invoice_date');
            $table->integer('subtotal'); 
            $table->integer('discount');
            $table->integer('tax'); 
            $table->integer('total'); 
            $table->integer('user_id'); 
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
        Schema::dropIfExists('invoice');
    }
}
