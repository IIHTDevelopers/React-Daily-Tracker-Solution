import React, { useState } from 'react';

const ExerciseForm = ({ addExercise }) => {
    const [exercise, setExercise] = useState({
        name: '',
        caloriesBurnt: '',
        date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation if needed
        addExercise(exercise);
        setExercise({ name: '', caloriesBurnt: '', date: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Activity Name:
                <input
                    id="name"
                    type="text"
                    value={exercise.name}
                    onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
                    required
                />
            </label>
            <label htmlFor="calories">
                Calories Burnt:
                <input
                    id="calories"
                    type="number"
                    value={exercise.caloriesBurnt}
                    onChange={(e) => setExercise({ ...exercise, caloriesBurnt: e.target.value })}
                    required
                />
            </label>
            <label htmlFor="date">
                Date:
                <input
                    id="date"
                    type="date"
                    value={exercise.date}
                    onChange={(e) => setExercise({ ...exercise, date: e.target.value })}
                    required
                />
            </label>
            <button type="submit">Add Exercise</button>
        </form>
    );
};

export default ExerciseForm;
