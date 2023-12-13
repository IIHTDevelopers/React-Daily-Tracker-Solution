import React from 'react';
import { render, screen } from '@testing-library/react';
import ExerciseTracker from '../components/ExerciseTracker';

const exercises = [
    { id: 1, name: 'Running', caloriesBurnt: '200', date: '2023-01-01' },
    { id: 2, name: 'Cycling', caloriesBurnt: '300', date: '2023-01-02' },
];

describe('boundary', () => {
    test('ExerciseTrackerComponent boundary it displays the "Exercise Tracker" heading', () => {
        render(<ExerciseTracker exercises={exercises} />);
        const headingElement = screen.getByRole('heading', { name: 'Exercise Tracker' });
        expect(headingElement).toBeTruthy();
    });

    test('ExerciseTrackerComponent boundary displays calorie counts correctly', () => {
        render(<ExerciseTracker exercises={exercises} />);
        const dailyCaloriesElement = screen.getByText('Daily Calories Burnt: 0');
        const weeklyCaloriesElement = screen.getByText('Weekly Calories Burnt: 0');
        const monthlyCaloriesElement = screen.getByText('Monthly Calories Burnt: 0');
        expect(dailyCaloriesElement).toBeTruthy();
        expect(weeklyCaloriesElement).toBeTruthy();
        expect(monthlyCaloriesElement).toBeTruthy();
    });

    test('ExerciseTrackerComponent boundary it displays exercise details', () => {
        render(<ExerciseTracker exercises={exercises} />);
        const exerciseNameElements = screen.getAllByText('Activity Name:');
        const caloriesBurntElements = screen.getAllByText('Calories Burnt:');
        const dateElements = screen.getAllByText('Date:');
        expect(exerciseNameElements).toHaveLength(exercises.length);
        expect(caloriesBurntElements).toHaveLength(exercises.length);
        expect(dateElements).toHaveLength(exercises.length);
    });
});
