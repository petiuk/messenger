<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Friends extends Model
{
    protected $table = 'friends';
    public function users()
    {
        return $this->hasMany('App\User');
    }

}