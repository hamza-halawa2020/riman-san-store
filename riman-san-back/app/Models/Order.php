<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'address',
        'phone',
        'city',
        'notes',

    ];
    public function Order_details()
    {
        return $this->hasMany(Order_details::class);
    }
    
}
