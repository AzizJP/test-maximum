import { combineReducers, configureStore } from '@reduxjs/toolkit';

import breakpointReducer from './reducers/breakpointSlice';

const rootReducer = combineReducers({
  breakpoint: breakpointReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
