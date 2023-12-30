<?php

namespace Database\Seeders;

use \App\Models\User;
use \App\Models\Product;
use \App\Models\Review;
use \App\Models\Contact;
use \App\Models\Category;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // User::factory(10)->create();
        Category::factory(2)->create();
        Product::factory(10)->create();
        Review::factory(10)->create();
        Contact::factory(10)->create();
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'hamza',
            'email' => 'hamza@hamza.com',
            'password'=> bcrypt('123456'),

        ]);
    }
}
