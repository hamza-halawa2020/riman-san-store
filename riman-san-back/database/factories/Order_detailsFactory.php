<?php

namespace Database\Factories;

use App\Models\OrderDetails;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\Order;

class Order_detailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = Product::factory()->create();
        $order = Order::factory()->create();

        return [
            'product_id' => $product->id,
            'order_id' => $order->id,
            'quantity' => $this->faker->randomNumber(2),
        ];
    }
}
