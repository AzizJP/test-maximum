import { Brand } from '../types/types';

export const BASE_URL = 'https://maximum.expert';

export const getCars = (brand: Brand) => {
  return fetch(`${BASE_URL}/api/stock-test?brand=${brand}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};
