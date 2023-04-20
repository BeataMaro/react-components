import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface SearchBarState {
  inputValue: string;
}

const initialState: SearchBarState = {
  inputValue: '',
};

export const searchSlice = createSlice({
  name: 'searchKeyword',
  initialState,
  reducers: {
    updateInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { updateInputValue } = searchSlice.actions;
export default searchSlice.reducer;
