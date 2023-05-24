import { combineReducers, configureStore } from '@reduxjs/toolkit';

import breakpointReducer from './reducers/breakpointSlice';
import currentCardReducer from './reducers/currentCardSlice';

const rootReducer = combineReducers({
  breakpoint: breakpointReducer,
  currentCard: currentCardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
