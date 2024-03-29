<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $table = "settings";
    
    public function currency()
    {
        return $this->belongsTo('App\Models\Currency');
    }
}
