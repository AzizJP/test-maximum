import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ActivatedFilter } from '../../types/types';

const initialState: ActivatedFilter = {
  brand: 'Chery',
  engineCapacity: undefined,
  equipmentName: undefined,
};

export const activeFiltersSlice = createSlice({
  name: 'activeFilters',
  initialState,
  reducers: {
    setBrand(state, action: PayloadAction<ActivatedFilter['brand']>) {
      state.brand = action.payload;
    },
    setEngineCapacity(state, action: PayloadAction<ActivatedFilter['engineCapacity']>) {
      state.engineCapacity = action.payload;
    },
    setEquipmentName(state, action: PayloadAction<ActivatedFilter['equipmentName']>) {
      state.equipmentName = action.payload;
    },
  },
});

export const { setBrand, setEngineCapacity, setEquipmentName } = activeFiltersSlice.actions;

export default activeFiltersSlice.reducer;
