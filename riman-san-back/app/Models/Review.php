<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'stars',
        'title',
        'comment',
        'status',
        'product_id'
    ];

    function product()
    {
        return $this->belongsTo(Product::class);
    }
}
