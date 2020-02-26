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
    public function package()
    {
        return $this->belongsTo('App\Models\Package');
    }
    public function staff()
    {
        return $this->belongsTo('App\User','staff_member_id','id');
    }
}
