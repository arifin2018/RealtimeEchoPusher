<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function Sender() {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function Receiver() {
        return $this->belongsTo(User::class, 'receiver_id');
    }
}
