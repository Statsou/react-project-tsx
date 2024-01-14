import {ButtonHTMLAttributes, ReactNode} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  link?: string;
  appereance?: 'default' | 'white' | 'grey' | 'light-grey';
  buttonType?: React.ElementType;
}
