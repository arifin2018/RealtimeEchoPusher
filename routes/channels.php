<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('chat-{id}', function ($user, $id) {
    // Log::info('Broadcast::channel id => '.$id);
    // Log::info('Broadcast::channel user => '.json_encode($user));
    // Log::info('result => '.json_encode($user->id === $id));
    return Auth::check();
});
