import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { constants } from './common';

test('renders celsius input field', () => {
  render(<App />);
  const celsiusInput = screen.getByAltText(constants.CELSIUS);
  expect(celsiusInput).toBeInTheDocument();
});

test('renders fahrenheit input field', () => {
  render(<App />);
  const fahrenheitInput = screen.getByAltText(constants.FAHRENHEIT);
  expect(fahrenheitInput).toBeInTheDocument();
});
