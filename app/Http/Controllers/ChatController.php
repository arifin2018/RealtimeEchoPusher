<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index(User $user) {
        return Inertia::render('Chat',[
            'userLogin'=>$user
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'message' => 'required'
        ]);

        dd(Auth::user());
    }
}
