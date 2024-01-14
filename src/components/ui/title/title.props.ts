import { HTMLAttributes, ReactNode } from 'react';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className: string;
  size?: 'big' | 'small' | 'extra-small';
  headingLevel: React.ElementType;
}
