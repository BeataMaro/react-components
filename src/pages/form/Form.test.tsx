import { render, screen, fireEvent } from '@testing-library/react';
import Form from './FormPage';

describe('Form Component', () => {
  it('Should be visible', () => {
    expect(<Form />).toBeVisible;
  });
  it('Should alert errors with empty values', () => {
    render(<Form />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.findByTestId('userCard')).toBeDefined;
  });
});
