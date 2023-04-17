import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { Provider } from 'react-redux';
import ReactModal from 'react-modal';

import './index.css';
import { store } from './store/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { photoApi } from './services/api/apiSlice';

ReactModal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={photoApi}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
