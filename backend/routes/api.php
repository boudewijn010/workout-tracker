<?php
use App\Http\Controllers\WorkoutController;

Route::get('/workouts', [WorkoutController::class, 'index']);
?>