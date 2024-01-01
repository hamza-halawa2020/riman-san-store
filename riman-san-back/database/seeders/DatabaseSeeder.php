<?php

namespace Database\Seeders;

use \App\Models\User;
use \App\Models\Product;
use \App\Models\Review;
use \App\Models\Contact;
use \App\Models\Category;
use \App\Models\Order;
use \App\Models\Order_details;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Category::factory(2)->create();
        Product::factory(10)->create();
        // Review::factory(10)->create();
        Contact::factory(10)->create();
        // User::factory(10)->create();
        Order::factory(10)->create();
        Order_details::factory(10)->create();

        User::factory()->create([
            'name' => 'hamza',
            'email' => 'hamza@hamza.com',
            'password'=> bcrypt('123456'),

        ]);
    }
}
