import { ReactNode } from 'react';

export type Variant = 'filter' | 'resetFilter' | 'card';
export type Type = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  variant?: Variant;
  type?: Type;
  className?: string;
  onClick?(): void;
  children?: ReactNode;
  disabled?: boolean;
}

export interface ButtonAndLinkProps extends ButtonProps {
  link: string;
}
