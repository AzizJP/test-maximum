import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ResetFilters } from '../../types/types';

const initialState: ResetFilters = {
  resetFilters: false,
};

export const resetFiltersSlice = createSlice({
  name: 'resetFilters',
  initialState,
  reducers: {
    setResetFilters(state, action: PayloadAction<boolean>) {
      state.resetFilters = action.payload;
    },
  },
});

export const { setResetFilters } = resetFiltersSlice.actions;

export default resetFiltersSlice.reducer;
