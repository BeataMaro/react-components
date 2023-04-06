import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './components/Header/Header';

describe('App', () => {
  it('Should render page title h1', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('React');
  });
});
