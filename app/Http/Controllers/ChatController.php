<?php

namespace App\Http\Controllers;

use App\Events\MessageChat;
use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index(User $user) {
        $chat = Chat::where([
            ['sender_id', Auth::user()->id],
            ['receiver_id', $user->id],
        ])->orWhere([
            ['sender_id', $user->id],
            ['receiver_id', Auth::user()->id],
        ])->get();
        return Inertia::render('Chat',[
            'userLogin'=>$user,
            'dataChat' =>$chat
        ]);
    }

    public function store(Request $request, User $user) {
        $request->validate([
            'message' => 'required'
        ]);

        $chat = Chat::create([
            'sender_id'=>Auth::user()->id,
            'receiver_id'=>$user->id,
            'message'=>$request->message,
        ]);

        broadcast(new MessageChat($chat))->toOthers();

        return back();
    }
}
