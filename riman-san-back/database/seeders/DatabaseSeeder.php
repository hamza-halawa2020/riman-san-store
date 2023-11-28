<?php

namespace Database\Seeders;

use \App\Models\User;
use \App\Models\Product;
use \App\Models\Review;
use \App\Models\Contact;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // User::factory(10)->create();
        Product::factory(10)->create();
        Review::factory(10)->create();
        Contact::factory(10)->create();
        User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
