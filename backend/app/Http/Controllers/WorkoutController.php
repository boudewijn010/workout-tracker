<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WorkoutController extends Controller
{
    public function index()
    {
        return response()->json([
            ['id' => 1, 'name' => 'Push-ups', 'reps' => 20],
            ['id' => 2, 'name' => 'Squats', 'reps' => 15],
        ]);
    }
}

?>