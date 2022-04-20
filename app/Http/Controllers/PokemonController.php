<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use App\Http\Resources\PokemonResource;
use Illuminate\Http\Request;
use Http;

class PokemonController extends Controller
{

    public function index(Request $request)
    {
        try {
            $url = config('api.url').'?limit=10&offset='.$request->offset;
            $pokemons = Http::get($url)->json();
            foreach($pokemons['results'] as $key => $poke){
                $pokemonDetail = Http::get($poke['url'])->json();

                $pokemons['results'][$key]['weight'] = $pokemonDetail['weight'];
                $pokemons['results'][$key]['height'] = $pokemonDetail['height'];
                $pokemons['results'][$key]['base_experience'] = $pokemonDetail['base_experience'];
                $pokemons['results'][$key]['abilities'] = $pokemonDetail['abilities'];
                $pokemons['results'][$key]['image'] = $pokemonDetail['sprites']['front_default'];

                foreach ($pokemonDetail['abilities'] as $index => $skill) {
                    $pokemons['results'][$key]['abilities'][$index] = ['name' => $skill['ability']['name']];
                }

            }
            return response()->json(['data' => $pokemons['results']]);
        } catch (\Throwable $th) {
            $pokemonsList = Pokemon::when($request->offset, function ($query, $offset) {
                $query->offset($offset);
            })->limit(10)
            ->get();
            return PokemonResource::collection($pokemonsList);
        }
    }
}
