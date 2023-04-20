import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IPhoto } from 'models/photo-model';

export interface CardsState {
  searchResults: IPhoto[];
}

const initialState: CardsState = {
  searchResults: [],
};

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    updateSearchResults: (state, action: PayloadAction<IPhoto[]>) => {
      state.searchResults = action.payload;
    },
  },
});

export const { updateSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
