import styles from './navigation.module.scss';
import { AppRoute } from '../../../appRoute';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const NavigationItems = [
  {
    id: 1,
    title: 'Home',
    href: AppRoute.HOME
  },
  {
    id: 2,
    title: 'About',
    href: AppRoute.ABOUT
  },
  {
    id: 3,
    title: 'Market',
    href: AppRoute.BUY
  },
  {
    id: 4,
    title: 'Basket',
    href: AppRoute.BASKET
  }
  // {
  //   id: 5,
  //   title: 'NEWW',
  //   href: AppRoute.PRODUCT
  // }
];

export function Navigation () {
  return (
    <div className={styles['navigation']}>
      <ul className={styles['navigation__list']}>
        {NavigationItems.map((item) => (
          <li key={item.id} className={styles['navigation__item']}>
            <NavLink className={({ isActive }) => cn(styles['navigation__link'], {[styles.active]: isActive})} to={item.href}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>

  );
}
