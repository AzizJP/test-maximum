import { Brands, Capacities, Equipments, FilterItems } from '../../../../types/types';

export const FILTERS: Array<{
  filtersId: number;
  filtersName: 'Бренд' | 'Объем двигателя' | 'Комплектация';
  type: keyof FilterItems;
}> = [
  {
    filtersId: 1,
    filtersName: 'Бренд',
    type: 'brand',
  },
  {
    filtersId: 2,
    filtersName: 'Объем двигателя',
    type: 'capacity',
  },
  {
    filtersId: 3,
    filtersName: 'Комплектация',
    type: 'equipment',
  },
];

export const BRANDS: Array<Brands> = [
  {
    id: 1,
    name: 'Chery',
  },
  {
    id: 2,
    name: 'Haval',
  },
  {
    id: 3,
    name: 'Geely',
  },
  {
    id: 4,
    name: 'Exeed',
  },
  {
    id: 5,
    name: 'Audi',
  },
  {
    id: 6,
    name: 'Kia',
  },
  {
    id: 7,
    name: 'Hyundai',
  },
];

export const CAPACITY: Array<Capacities> = [
  {
    id: 1,
    name: '1,5 л.',
  },
  {
    id: 2,
    name: '1,6 л.',
  },
  {
    id: 3,
    name: '2,0 л.',
  },
];

export const EQUIPMENTS: Array<Equipments> = [
  {
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'Techno',
  },
  {
    id: 3,
    name: 'Travel',
  },
  {
    id: 4,
    name: 'Luxury',
  },
  {
    id: 5,
    name: 'Cosmo',
  },
  {
    id: 6,
    name: 'Trek',
  },
  {
    id: 7,
    name: 'Comfort',
  },
  {
    id: 8,
    name: 'Family',
  },
  {
    id: 9,
    name: 'Prestige',
  },
  {
    id: 10,
    name: 'Elite',
  },
  {
    id: 11,
    name: 'Dreamline',
  },
  {
    id: 12,
    name: 'Speedline',
  },
  {
    id: 13,
    name: 'Ultimate',
  },
];

export const FILTERS_ITEMS: FilterItems = {
  brand: BRANDS,
  capacity: CAPACITY,
  equipment: EQUIPMENTS,
};
