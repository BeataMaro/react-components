import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { photoApi } from '../services/api/apiSlice';
import searchKeywordReducer from '../services/searchKeywordSlice';
import searchResultsReducer from '../services/searchResultsSlice';

export const store = configureStore({
  reducer: {
    searchKeyword: searchKeywordReducer,
    searchResults: searchResultsReducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
