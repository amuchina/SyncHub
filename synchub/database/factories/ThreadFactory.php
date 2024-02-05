<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Thread>
 */
class ThreadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    

    public function definition(): array
    {
        $possibleTags = [
            'Attualita',
            'Economia',
            'Scienza',
            'Viaggi',
            'Cucina'
        ];

        for($i = 0; $i < rand(1, 3); $i++){
            $tags[] = Arr::random($possibleTags);
        }

        $tags = array_unique($tags);

        return [
            'id' => rand(11111, 99999),
            'user_id' => rand(1, 10),
            'belongsToHub' => Arr::random(['hub1', 'hub2', 'hub3']),
            'title' => Arr::random(['titolo1', 'titolo2', 'titolo3', 'titolo4']),
            'tags' => $tags,
            'description' => Arr::random(['descrizione1', 'descrizione2', 'descrizione3', 'descrizione4']),
            'likes' => rand(1, 100),
            'dislikes' => rand(1, 100),
            'shareCount' => rand(1, 100),
            'publishDate' => now()
        ];
    }
}
