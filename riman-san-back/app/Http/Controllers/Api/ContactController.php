<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use Illuminate\Support\Facades\Gate;
use Exception;


class ContactController extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum")->except('store');
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
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
    public function store(StoreContactRequest $request)
    {
        try {
            $contact = $request->validated();
            $contact = Contact::create([
                'fullName' => $request->fullName,
                'email' => $request->email,
                'subject' => $request->subject,
                'message' => $request->message

            ]);
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


    public function update(UpdateContactRequest $request, string $id)
    {
        try {
            $contact = Contact::findOrFail($id);
            $data = $request->validated();
            if (Gate::allows("is-admin")) {
                $contact->update([
                    'fullName' => $data['fullName']?? $contact->fullName,
                    'email' => $data['email']?? $contact->email,
                    'subject' => $data['subject']?? $contact->subject,
                    'message' => $data['message']?? $contact->message,
                ]);
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
