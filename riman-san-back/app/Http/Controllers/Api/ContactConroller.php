<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;

class ContactConroller extends Controller
{

    public function index()
    {
        $contacts = Contact::all();
        return ContactResource::collection($contacts);
    }

 
    public function store(StoreContactRequest $request)
    {
        try {
            $contact = Contact::create($request->all());
            return response()->json(['data' => new ContactResource($contact)], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while creating the contact'], 500);
        }
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
