<?php

namespace Database\Factories;
use App\Models\Category;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'img' => $this->faker->image(),
            'description' => $this->faker->text(),
            'rating' => $this->faker->randomFloat(2, 1, 5), 
            'price' => $this->faker->randomNumber(2),
            'stock' => $this->faker->boolean(),
            // 'category_id' => $this->faker->randomNumber()
            'category_id' => $this->faker->numberBetween(1, 2)
            // 'category_id'=> Category::inRandomOrder()->first()->id,

        ];
    }
}


