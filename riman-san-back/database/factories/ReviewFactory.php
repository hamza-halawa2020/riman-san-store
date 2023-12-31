<?php

namespace Database\Factories;

use App\Models\Review;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{

    protected $model = Review::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'stars' => $this->faker->numberBetween(1, 5),
            
            'title' => $this->faker->sentence,
            'comment' => $this->faker->text,
            'product_id'=> Product::inRandomOrder()->first()->id,
            'status'=>$this->faker->randomElement(['pending', 'confirmed', 'declined']),
        ];
    }
}
