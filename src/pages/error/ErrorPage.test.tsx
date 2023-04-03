import { render, screen } from '@testing-library/react';
import { Error } from './ErrorPage';

describe('Error Page', () => {
  test('Should exist', () => {
    expect(<Error />).toBeDefined();
  });
  test('Should has right content', () => {
    render(<Error />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Something went wrong!');
  });
});
