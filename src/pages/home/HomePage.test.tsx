import { describe, it, expect } from 'vitest';
import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

describe('Form Component', () => {
  it('Should be defined', () => {
    expect(<HomePage />).toBeDefined();
  });
  it('Should has search bar and cards wrapper inside', () => {
    render(<HomePage />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
