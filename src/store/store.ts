import { combineReducers, configureStore } from '@reduxjs/toolkit';

import activeFiltersReducer from './reducers/activeFiltersSlice';
import breakpointReducer from './reducers/breakpointSlice';
import resetFiltersReducer from './reducers/resetFiltersSlice';

const rootReducer = combineReducers({
  breakpoint: breakpointReducer,
  resetFilters: resetFiltersReducer,
  activeFilters: activeFiltersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
