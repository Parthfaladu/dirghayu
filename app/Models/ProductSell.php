<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSell extends Model
{
    protected $table = "product_sell";

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }
}
