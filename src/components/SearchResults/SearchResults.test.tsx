import { render } from '@testing-library/react';
import SearchResults from './SearchResults';
import 'vitest-fetch-mock';

// Mock the API call
fetchMock(
  'https://api.unsplash.com/search/photos?query=nature&orientation=landscape&per_page=12&client_id=gZBCrXY_R_pbuKYOsX64KBUOu_kKwnE50jvqNyoMRoM'
);

describe('SearchResults component', () => {
  it('displays loading spinner when results are loading', async () => {
    const { getByTestId } = render(<SearchResults searchQuery="nature" />);

    expect(getByTestId('loader')).toBeInTheDocument();

    // Wait for API call to complete
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
});
