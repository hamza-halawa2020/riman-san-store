<?php

namespace Database\Factories;

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
            'img' => $this->faker->image(), // Assuming you have the image method
            'description' => $this->faker->text(),
            'rating' => $this->faker->randomFloat(2, 1, 5), // Assuming you want a floating-point number between 1 and 5
            'price' => $this->faker->randomNumber(2),

        ];
    }
}
