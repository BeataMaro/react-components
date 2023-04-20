import { render } from '@testing-library/react';
import SearchResults from './SearchResults';
import 'vitest-fetch-mock';

fetchMock(
  `https://api.unsplash.com/search/photos?query=nature&orientation=landscape&per_page=12&client_id=${
    import.meta.env.VITE_ACCESS_KEY
  }`
);

describe('SearchResults component', () => {
  it('displays loading spinner when results are loading', async () => {
    const { getByTestId } = render(<SearchResults />);

    expect(getByTestId('loader')).toBeInTheDocument();

    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
});
