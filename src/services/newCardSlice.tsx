import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../models/user-model';

export interface UsersCardsState {
  usersCards: IUser[];
}

const initialState: UsersCardsState = {
  usersCards: [],
};

export const userCardSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUserCard: (state, action: PayloadAction<IUser>) => {
      state.usersCards = [...state.usersCards, action.payload];
    },
  },
});

export const { addUserCard } = userCardSlice.actions;
export default userCardSlice.reducer;
