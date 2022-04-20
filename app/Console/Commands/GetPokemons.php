<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Http, DB;
use App\Models\{Pokemon, Ability};

class GetPokemons extends Command
{
    protected $signature = 'get:pokemons';

    protected $description = 'get the first 100 pokemon from pokeapi';

    public function __construct()
    {
        parent::__construct();
        $this->url = config('api.url') . "?limit=100";
    }

    public function handle()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Ability::truncate();
        Pokemon::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $pokemons = Http::get($this->url)->json();

        foreach($pokemons['results'] as $poke){
            $pokemonDetail = Http::get($poke['url'])->json();
            $pokemon = Pokemon::create([
                'name' => $poke['name'],
                'weight' => $pokemonDetail['weight'],
                'height' => $pokemonDetail['height'],
                'base_experience' => $pokemonDetail['base_experience'],
                'image' => $pokemonDetail['sprites']['front_default']
            ]);

            $abilities = [];
            foreach ($pokemonDetail['abilities'] as $ability) {
                $abilities[] = new Ability(["name" => $ability['ability']['name']]);
            }
            $pokemon->abilities()->saveMany($abilities);

        }
        $this->info('Updated pokemons in database');
    }
}
