import { LogoProps } from './logo.props';
import cn from 'classnames';
import styles from './logo.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../../appRoute';

export function Logo ({ className }: LogoProps) {
  const { pathname } = useLocation();

  return pathname === AppRoute.HOME ? (
    <span className={cn(styles['logo'], className)}>
      <img src="/src/assets/logo.svg" width={65} height={30} alt="Logotype Avion" />
    </span>
  ) : (
    <Link to={AppRoute.HOME} className={cn(styles['logo'], className)}>
      <img src="/src/assets/logo.svg" width={65} height={30} alt="Logotype Avion" />
    </Link>
  );
}
