<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ability extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'pokemon_id'];


    public function pokemon()
    {
        return $this->belongsTo(Pokemon::class);
    }


}
