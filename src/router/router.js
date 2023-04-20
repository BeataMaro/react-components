import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages/home/HomePage';
import { About } from '../pages/about/AboutPage';
import FormPage from '../pages/form/FormPage';
import { Error } from '../pages/error/ErrorPage';
const router = createBrowserRouter([
    {
        element: _jsx(App, {}),
        errorElement: _jsx(Error, {}),
        children: [
            {
                path: '/',
                element: _jsx(Home, {}),
            },
            {
                path: '/about',
                element: _jsx(About, {}),
            },
            {
                path: '/form',
                element: _jsx(FormPage, {}),
            },
        ],
    },
]);
export default router;
