import { TitleProps } from './title.props';
import cn from 'classnames';
import styles from './title.module.scss';

function Title({ children, size, headingLevel, className, ...props }: TitleProps) {
  const Heading = headingLevel;

  return (
    <Heading
      className={cn(styles['title'], className, {
        [styles['big']]: size === 'big',
        [styles['small']]: size === 'small',
        [styles['extra-small']]: size === 'extra-small'
      })}
      {...props}
    >
      {children}
    </Heading>
  );
}

export default Title;
