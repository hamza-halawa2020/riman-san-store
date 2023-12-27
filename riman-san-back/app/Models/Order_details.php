<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order_details extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'order_id',
        'quantity',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
    public function orders()
    {
        return $this->belongsTo(Order::class);
    }
    
}
