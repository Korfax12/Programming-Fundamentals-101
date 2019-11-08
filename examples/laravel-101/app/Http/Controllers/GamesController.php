<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GamesController extends Controller
{
    public function getGame(){
        $game = Game::where('id', 5)->first();

        return $game;
    }
}
