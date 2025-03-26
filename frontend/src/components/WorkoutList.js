import React, { useEffect, useState } from "react";
import { fetchWorkouts } from "../api/workouts";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const getWorkouts = async () => {
      const data = await fetchWorkouts();
      setWorkouts(data);
    };
    getWorkouts();
  }, []);

  return (
    <div>
      <h1>Workout List</h1>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.name} - {workout.reps} reps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
