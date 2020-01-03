import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Component explorer title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Component explorer/i);
  expect(linkElement).toBeInTheDocument();
});
