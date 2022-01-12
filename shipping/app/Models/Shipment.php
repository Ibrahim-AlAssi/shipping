<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
   
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public static function booted(){ //when create object (Shipment)  make use_id= auth id
        static::creating(function($model){
            $model->user_id=auth()->id();
        });
    }
}