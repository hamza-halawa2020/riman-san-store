<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [];

        if ($this->filled('name')) {
            $rules['name'] = 'required|string';
        }
        if ($this->filled('description')) {
            $rules['description'] = 'required|string';
        }
        if ($this->filled('images.*.image')) {
            $rules['images.*.image'] = 'required';
        }
        if ($this->filled('price')) {
            $rules['price'] = 'required';
        }
        if ($this->filled('category_id')) {
            $rules['category_id'] = 'required';
        }

        return $rules;
    }
}
