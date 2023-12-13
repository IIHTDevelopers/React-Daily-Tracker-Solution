import React, { useState } from 'react';
import ExerciseForm from './components/ExerciseForm';
import ExerciseTracker from './components/ExerciseTracker';

function App() {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  return (
    <div>
      <h1>Daily Health Tracker</h1>
      <h2>Track Your Exercises</h2>
      <ExerciseForm addExercise={addExercise} />
      <h2>Exercise Tracker</h2>
      <ExerciseTracker exercises={exercises} />
    </div>
  );
}

export default App;
