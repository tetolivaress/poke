<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PokemonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'base_experience' => $this->base_experience,
            'height' => $this->height,
            'abilities' => AbilityResource::collection($this->abilities),
            'weight' => $this->weight
        ];
    }
}
