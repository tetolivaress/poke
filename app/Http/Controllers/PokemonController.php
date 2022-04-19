<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use App\Http\Resources\PokemonResource;
use Illuminate\Http\Request;

class PokemonController extends Controller
{
    public function index()
    {
        # code...
        return PokemonResource::collection(Pokemon::paginate(10));
    }
}
