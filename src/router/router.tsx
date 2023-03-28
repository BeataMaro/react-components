import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import About from '../pages/about/about';
import Form from '../pages/form/form';
import Error from '../error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: '/form',
    element: <Form />,
    errorElement: <Error />,
  },
]);
