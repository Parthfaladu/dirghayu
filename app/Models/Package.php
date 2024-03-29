<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $table = "package";

    public function subscription()
    {
        return $this->hasMany('App\Models\Subscription', 'package_name', 'name');
    }
}
