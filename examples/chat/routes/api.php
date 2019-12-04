<?php
Route::get('message', function(){
    return App\Chat::all();
});

Route::get('create_message', function(){
    $row = new App\Chat();
    $row->message = 'Something cool';
    $row->author = 'Johnny';
    $row->save();
});