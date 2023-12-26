<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;
use Gate;
use Exception;


class ContactConroller extends Controller
{
    // function __construct()
    // {
    //     $this->middleware("auth:sanctum");
    // }

    public function index()
    {
        try {
            if (Gate::allows("is-admin")) {
                $contacts = Contact::paginate(10);

                return ContactResource::collection($contacts);
            } else {
                return response()->json(['message' => 'not allow to show contacts.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
    public function store(StoreContactRequest $request)
    {
        try {
            $this->validate($request, [
                'fullName' => 'required|string',
                'email' => 'required|email',
                'subject' => 'required',
                'message' => 'required',
            ]);
            $contact = Contact::create($request->all());
            return response()->json(['data' => new ContactResource($contact)], 200);
        } catch (Exception $e) {
            return response()->json($e, 500);
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
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }


    public function update(Request $request, string $id)
    {
        try {
            $this->validate($request, [
                'fullName' => 'required|string',
                'email' => 'required|email',
                'subject' => 'required',
                'message' => 'required',
            ]);
            if (Gate::allows("is-admin")) {
                $contact = Contact::findOrFail($id);
                $contact->update($request->all());
                return response()->json(['data' => new ContactResource($contact)], 200);
            } else {
                return response()->json(['message' => 'not allow to update contacts.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
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
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
}