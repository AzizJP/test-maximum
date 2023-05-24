import { ReactNode } from 'react';

export interface ProvidersProps {
  children: ReactNode;
}

export interface Breakpoint {
  isDesktop: boolean;
}

export interface ResetFilters {
  resetFilters: boolean;
}

export type Brand = 'Chery' | 'Haval' | 'Geely' | 'Exeed' | 'Audi' | 'Kia' | 'Hyundai';
export type Capacity = '1,5 л.' | '1,6 л.' | '2,0 л.';
export type Equipment =
  | 'Action'
  | 'Techno'
  | 'Travel'
  | 'Luxury'
  | 'Cosmo'
  | 'Trek'
  | 'Comfort'
  | 'Family'
  | 'Prestige'
  | 'Elite'
  | 'Dreamline'
  | 'Speedline'
  | 'Ultimate';

export interface Brands {
  id: number;
  name: Brand;
}
export interface Capacities {
  id: number;
  name: Capacity;
}
export interface Equipments {
  id: number;
  name: Equipment;
}

export interface FilterItems {
  brand: Array<Brands>;
  capacity: Array<Capacities>;
  equipment: Array<Equipments>;
}

export interface ActivatedFilter {
  brand: Brand;
  engineCapacity: Capacity | undefined;
  equipmentName: Equipment | undefined;
}
