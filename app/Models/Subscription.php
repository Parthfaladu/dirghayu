<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $table = "subscription";
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
