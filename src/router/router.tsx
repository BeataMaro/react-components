import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/home/HomePage';
import About from '../pages/about/AboutPage';
import Form from '../pages/form/FormPage';
import Error from '../pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/form',
        element: <Form />,
      },
    ],
  },
]);

export default router;