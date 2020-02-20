<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    protected $table = "notice";

    public function userto()
    {
        return $this->belongsTo('App\User', 'to_id' ,'id');
    }
    public function userfrom()
    {
        return $this->belongsTo('App\User', 'from_id' ,'id');
    }
}
