<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enquiry extends Model
{
    protected $table = "enquiry";

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
