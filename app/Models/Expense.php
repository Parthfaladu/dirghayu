<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $table = "expense";

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    
}
