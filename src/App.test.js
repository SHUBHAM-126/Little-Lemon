import { render, screen, fireEvent, getByLabelText, getByText, getByTestId } from '@testing-library/react';
import Booking from './components/Booking';
import { BrowserRouter as Router } from 'react-router-dom';

test('Render booking form', () => {
  render(
    <Router>
      <Booking />
    </Router>
  );
  const btn = screen.getByText("Let's go");
  expect(btn).toBeInTheDocument();
})

test('Test updateTimes', () => {
  render(
    <Router>
      <Booking />
    </Router>
  );
  const btn = screen.getByText("Let's go");
  fireEvent.click(btn)
  const items = screen.getByLabelText('Time')
  expect(items).toHaveLength(8)
})

test('Check IntialTimes', () => {
  render(
    <Router>
      <Booking />
    </Router>
  )
  const initialTimes = screen.getByLabelText('Time');
  expect(initialTimes).toHaveLength(8)
})