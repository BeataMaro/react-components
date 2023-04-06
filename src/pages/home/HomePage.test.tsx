import { describe, it, expect } from 'vitest';
import { Home } from './HomePage';
import { render, screen } from '@testing-library/react';

describe('Form Component', () => {
  it('Should be defined', () => {
    expect(<Home />).toBeDefined();
  });
  it('Should has search bar and cards wrapper inside', () => {
    render(<Home />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
