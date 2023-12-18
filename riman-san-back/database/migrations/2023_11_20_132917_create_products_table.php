<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            // $table->bigInteger('category_id')->unsigned();
            $table->timestamps();
            $table->string('name');
            $table->string('description');
            $table->string('img');
            $table->boolean('stock')->default(true);
            $table->integer('rating');
            $table->integer('price');
            $table->foreignId('category_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete('cascade');
            // $table->foreignId('category_id')->constrained()->onUpdate('cascade')->onDelete('cascade');



        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
