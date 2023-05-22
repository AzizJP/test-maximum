'use client';

import { FC } from 'react';
import { Provider } from 'react-redux';

import { ProvidersProps } from '../types/types';

import { store } from './store';

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
