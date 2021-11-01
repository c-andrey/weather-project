import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from '../pages/Weather';


test('renders Weather page with asd write', () => {
  render(<Weather />);
  const linkElement = screen.getByText(/asd/i);
  expect(linkElement).toBeInTheDocument();
});
