import { ButtonProps } from './button.props';
import cn from 'classnames';
import styles from './button.module.scss';

export function Button ({ children, link, buttonType = 'button', className, appereance='default', onClick, ...props }: ButtonProps) {
  const Button = buttonType;

  return (
    <Button
      {...(link ? { to: link } : { as: 'button', onClick, type: 'button'})}
      className={cn(styles['button'], className, {
        [styles['default']]: appereance === 'default',
        [styles['white']]: appereance === 'white',
        [styles['grey']]: appereance === 'grey',
        [styles['light-grey']]: appereance === 'light-grey'
      })}

      {...props}
    >
      {children}
    </Button>
  );
}
