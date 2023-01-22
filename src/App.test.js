import { render, screen } from '@testing-library/react';

import App from './App';
import Footer from './pages/Footer/index.jsx'
import Header from './pages/Header/index.jsx'
import Item from './pages/Item/index.jsx'


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
