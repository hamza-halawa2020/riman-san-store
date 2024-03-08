<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
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

        // Validate 'name' field if it's present and not empty
        if ($this->filled('name')) {
            $rules['name'] = 'required|string';
        }

        // Validate 'role' field if it's present and not empty
        if ($this->filled('role')) {
            $rules['role'] = 'required';
        }

        // Validate 'phone' field if it's present and not empty
        if ($this->filled('phone')) {
            $rules['phone'] = [
                'sometimes',
                'regex:/^(010|011|012|015)\d{8}$/'
            ];
        }

        // Validate 'password' field if it's present and not empty
        if ($this->filled('password')) {
            $rules['password'] = 'sometimes';
        }

        return $rules;
    }
}
