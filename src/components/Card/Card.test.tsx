import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { InitialPhotoState } from '../SearchResults/SearchResults';

describe('Card', () => {
  test('Should exist', () => {
    expect(<Card photo={InitialPhotoState} />).toBeDefined();
  });
  test('Should has image', () => {
    render(<Card photo={InitialPhotoState} />);
    expect(screen.findByTestId('image-card')).toBeInTheDocument();
  });
});
