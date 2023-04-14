import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPhoto } from '../../models/photo-model';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/' }),
  endpoints: (builder) => ({
    getPhotoByKeyword: builder.query<IPhoto, string>({
      query: (keyword) =>
        `search/photos?query=${keyword}&client_id=${import.meta.env.VITE_ACCESS_KEY}`,
    }),
  }),
});

export const { useGetPhotoByKeywordQuery } = photoApi;
