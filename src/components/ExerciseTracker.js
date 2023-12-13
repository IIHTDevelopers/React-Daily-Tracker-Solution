import React from 'react';

const ExerciseTracker = ({ exercises }) => {
    const calculateCalories = (type) => {
        let calories = 0;

        const today = new Date(); // Get current date
        const exercisesToday = exercises.filter((exercise) => {
            const exerciseDate = new Date(exercise.date);
            return (
                exerciseDate.getDate() === today.getDate() &&
                exerciseDate.getMonth() === today.getMonth() &&
                exerciseDate.getFullYear() === today.getFullYear()
            );
        });

        if (type === 'daily') {
            calories = exercisesToday.reduce((totalCalories, exercise) => {
                return totalCalories + parseInt(exercise.caloriesBurnt, 10);
            }, 0);
        } else if (type === 'weekly') {
            const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            const exercisesThisWeek = exercises.filter((exercise) => {
                const exerciseDate = new Date(exercise.date);
                return exerciseDate >= sevenDaysAgo && exerciseDate <= today;
            });
            calories = exercisesThisWeek.reduce((totalCalories, exercise) => {
                return totalCalories + parseInt(exercise.caloriesBurnt, 10);
            }, 0);
        } else if (type === 'monthly') {
            const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            const exercisesThisMonth = exercises.filter((exercise) => {
                const exerciseDate = new Date(exercise.date);
                return exerciseDate >= firstDayOfMonth && exerciseDate <= today;
            });
            calories = exercisesThisMonth.reduce((totalCalories, exercise) => {
                return totalCalories + parseInt(exercise.caloriesBurnt, 10);
            }, 0);
        }

        return calories;
    };

    return (
        <div>
            <h2>Exercise Tracker</h2>
            <div>
                <h3>Daily Calories Burnt: {calculateCalories('daily')}</h3>
                <h3>Weekly Calories Burnt: {calculateCalories('weekly')}</h3>
                <h3>Monthly Calories Burnt: {calculateCalories('monthly')}</h3>
            </div>
            <ul>
                {exercises.map((exercise, index) => (
                    <li key={index}>
                        <strong>Activity Name:</strong> {exercise.name}
                        <br />
                        <strong>Calories Burnt:</strong> {exercise.caloriesBurnt}
                        <br />
                        <strong>Date:</strong> {exercise.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExerciseTracker;
