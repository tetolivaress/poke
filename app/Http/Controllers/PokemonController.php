<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use App\Http\Resources\PokemonResource;
use Illuminate\Http\Request;
use Http;

class PokemonController extends Controller
{

    public function index()
    {
        // $pokemons = Http::get(config('api.url'))->json();
        // foreach($pokemons['results'] as $key => $poke){
        //     $pokemonDetail = Http::get($poke['url'])->json();

        //     $pokemons['results'][$key]['weight'] = $pokemonDetail['weight'];
        //     $pokemons['results'][$key]['height'] = $pokemonDetail['height'];
        //     $pokemons['results'][$key]['base_experience'] = $pokemonDetail['base_experience'];
        //     $pokemons['results'][$key]['abilities'] = $pokemonDetail['abilities'];
        // }

        //return $pokemons['results'];
        //return PokemonResource::collection(['data' => $pokemons['results']]);
        return PokemonResource::collection(Pokemon::get());
    }
}
