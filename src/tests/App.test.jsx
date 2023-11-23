import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';
import { BrowserRouter } from 'react-router-dom';
import About from '../pages/About';

const cart = [];

describe('App', () => {
  it('renders headline', () => {
    render(
      <BrowserRouter>
        <App cart={cart} />
      </BrowserRouter>
    );

    screen.debug();

    const headline = screen.getByText(/Fake Store dot COM/i);
    expect(headline).toBeInTheDocument();
    // check if App components renders headline
  });
});

describe('About', () => {
  it('renders about page ', () => {
    render(
      <BrowserRouter>
        <About cart={cart} />
      </BrowserRouter>
    );

    screen.debug();

    const about = screen.getByText(/About Fakestore dot com/i);
    expect(about).toBeInTheDocument();
    // check if App components renders shop items
  });
});
