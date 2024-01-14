import { ReactNode } from 'react';

export interface CheckboxProps {
  labelComponent: React.ElementType;
  text: ReactNode;
  value: string;
  name?: string;
  isChecked?: boolean;
}
