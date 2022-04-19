<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AbilityResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'pokemon_id' => $this->pokemon_id,
        ];
    }
}
