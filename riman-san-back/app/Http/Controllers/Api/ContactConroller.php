<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;
use Gate;

class ContactConroller extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum");
    }

    public function index()
    {
        try {
            if (Gate::allows("is-admin")) {
                $contacts = Contact::all();
                return ContactResource::collection($contacts);
            } else {
                return response()->json(['message' => 'not allow to show contacts.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing contacts.'], 500);
        }
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
        try {
            if (Gate::allows("is-admin")) {
                $contact = Contact::findOrFail($id);
                return new ContactResource($contact);
            } else {
                return response()->json(['message' => 'not allow to show contacts.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing contacts.'], 500);
        }
    }


    public function update(Request $request, string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $contact = Contact::findOrFail($id);
                $contact->update($request->all());
                return response()->json(['data' => new ContactResource($contact)], 200);
            } else {
                return response()->json(['message' => 'not allow to update contacts.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while updating the contact'], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $contact = Contact::findOrFail($id);
                $contact->delete();
                return response()->json(['message' => 'Contact deleted successfully'], 200);
            } else {
                return response()->json(['message' => 'not allow to show contacts.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while deleting the contact'], 500);
        }
    }
}