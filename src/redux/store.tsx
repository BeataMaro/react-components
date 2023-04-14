import { configureStore } from '@reduxjs/toolkit';
// import searchReducer from './searchs';
// import createdCardsReducer from './createdCards';
import { setupListeners } from '@reduxjs/toolkit/query';
import { photoApi } from '../services/api/apiSlice';

export const store = configureStore({
  reducer: {
    [photoApi.reducerPath]: photoApi.reducer,
    // search: searchReducer,
    // createCards: createdCardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoApi.middleware),
});

setupListeners(store.dispatch);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
