import React from 'react';
import { render, screen } from '@testing-library/react';
import ExerciseForm from '../components/ExerciseForm';

const addExerciseMock = jest.fn();

describe('boundary', () => {
    test('ExerciseFormComponent boundary it is rendered', () => {
        render(<ExerciseForm addExercise={addExerciseMock} />);
        expect(screen.getByRole('button', { name: 'Add Exercise' })).toBeTruthy();
    });

    test('ExerciseFormComponent boundary it has input fields for Activity Name, Calories Burnt, and Date', () => {
        render(<ExerciseForm addExercise={addExerciseMock} />);
        const activityNameInput = screen.getByLabelText('Activity Name:');
        const caloriesBurntInput = screen.getByLabelText('Calories Burnt:');
        const dateInput = screen.getByLabelText('Date:');

        expect(activityNameInput).toBeTruthy();
        expect(caloriesBurntInput).toBeTruthy();
        expect(dateInput).toBeTruthy();
    });

    test('ExerciseFormComponent boundary it has a submit button', () => {
        render(<ExerciseForm addExercise={addExerciseMock} />);
        const submitButton = screen.getByRole('button', { name: 'Add Exercise' });
        expect(submitButton).toBeTruthy();
    });
});

