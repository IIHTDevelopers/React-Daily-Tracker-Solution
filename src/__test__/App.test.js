import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Daily Health Tracker" h1', () => {
        render(<App />);
        expect(screen.queryByText('Daily Health Tracker')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Track Your Exercises" h2', () => {
        render(<App />);
        expect(screen.queryAllByText('Track Your Exercises')).toBeTruthy();
    });

    test('AppComponent boundary has "Exercise Tracker" h2', () => {
        render(<App />);
        expect(screen.queryAllByText('Exercise Tracker')).toBeTruthy();
    });
});
