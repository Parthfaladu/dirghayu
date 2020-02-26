<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $table = "invoice";

    public function billto()
    {
        return $this->belongsTo('App\User', 'bill_to', 'id');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function invoiceitems()
    {
        return $this->hasMany('App\Models\InvoiceItem');
    }
}
