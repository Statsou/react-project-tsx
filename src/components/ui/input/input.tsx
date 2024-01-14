import styles from './input.module.scss';
import cn from 'classnames';
import { InputProps } from './input.props';

export function Input({ appereance, className, value, onChange }: InputProps) {
  return (
    <input
      className={cn(styles['input'], className, {
        [styles['grey']]: appereance === 'grey'
      })}
      type='email'
      placeholder='your@email.com'
      value={value}
      onChange={onChange}
    />
  );
}
