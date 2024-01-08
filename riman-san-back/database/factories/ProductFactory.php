<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category = Category::factory()->create();

        return [
            'name' => $this->faker->name(),
            // 'img' => $this->faker->image(),
            // 'img1' => $this->faker->image(),
            // 'img2' => $this->faker->image(),
            // 'img3' => $this->faker->image(),
            // 'img4' => $this->faker->image(),
            'description' => $this->faker->text(),
            'rating' => $this->faker->randomFloat(2, 1, 5),
            'price' => $this->faker->randomNumber(2),
            'stock' => $this->faker->boolean(),
            'category_id' => $category->id,
        ];
    }
}
