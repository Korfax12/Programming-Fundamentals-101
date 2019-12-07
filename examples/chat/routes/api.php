<?php
use Illuminate\Http\Request;

Route::get('message', function(){
    return App\Chat::all();
});

Route::post('message', function(Request $request){
    $author = $request->get('author');
    $messageItself = $request->get('message');

    $row = new App\Chat();
    $row->author = $author;
    $row->message = $messageItself;
    $row->save();
    return $row;
});

Route::put('message/{id}', function(string $id, Request $request){
    $messageItself = $request->get('message');
    $model = App\Chat::findOrFail($id);
    $model->message = $messageItself;
    $model->save();
    return $model;
});

Route::delete('message/{id}', function(string $id){
    $model = App\Chat::findOrFail($id);
    $model->delete();
    return $model;
});