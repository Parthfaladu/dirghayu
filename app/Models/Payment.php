<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = "payment";

    public function subscription()
    {
        return $this->belongsTo('App\Models\Subscription');
    }
}
