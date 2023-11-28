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
    public function show(string $id)
    {
        $contact = Contact::findOrFail($id);
        return new ContactResource($contact);
    }


    public function update(Request $request, string $id)
    {
        try {
            $contact = Contact::findOrFail($id);
            $contact->update($request->all());

            return response()->json(['data' => new ContactResource($contact)], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while updating the contact'], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            $contact = Contact::findOrFail($id);
            $contact->delete();

            return response()->json(['message' => 'Contact deleted successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while deleting the contact'], 500);
        }
    }
}