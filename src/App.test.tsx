import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Should render not found if wrong path', () => {
    render(
      <MemoryRouter initialEntries={['/wrongPath']}>
        <App />
      </MemoryRouter>
    );

    // expect(
    //   screen.getByRole('heading', {
    //     level: 2,
    //   })
    // ).toHaveTextContent('Something went wrong!');
  });
});
