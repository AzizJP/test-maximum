import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentCard } from '../../types/types';

const initialState: CurrentCard = {
  currentCard: JSON.parse(localStorage.getItem('currentCard')!) || {},
};

export const currentCardSlice = createSlice({
  name: 'currentCard',
  initialState,
  reducers: {
    setCurrentCard(state, action: PayloadAction<CurrentCard['currentCard']>) {
      state.currentCard = action.payload;
    },
  },
});

export const { setCurrentCard } = currentCardSlice.actions;

export default currentCardSlice.reducer;
