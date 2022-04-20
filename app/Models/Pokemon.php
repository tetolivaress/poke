<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory;

    protected $table = 'pokemons';

    protected $fillable = [
        'base_experience',
        'height',
        'name',
        'weight',
        'image'
    ];

    public function abilities()
    {
        return $this->hasMany(Ability::class);
    }

}
