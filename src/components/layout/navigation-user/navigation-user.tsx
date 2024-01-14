import { useSelector } from 'react-redux';
import { Button } from '../../ui/button/button';
import styles from './navigation-user.module.scss';
import { RootState } from '../../../store/store';

export function NavigationUser() {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <ul className={styles['navigation-user__list']}>
        <li className={styles['navigation-user__item']}>
          <Button appereance='white' className={styles['navigation-user__button']}>
            <span className='visually-hidden'>Basket.</span>
            <img src='/src/assets/header/basket.svg' width={16} height={16} />
            <span className={styles['navigation-user__count']}>{items.reduce((acc, item) => acc += item.count, null)}</span>
          </Button>
        </li>

        <li className={styles['navigation-user__item']}>
        <Button appereance='white' className={styles['navigation-user__button']}>
          <span className='visually-hidden'>Profile.</span>
          <img src='/src/assets/header/user.svg' width={16} height={16} />
        </Button>
      </li>
    </ul>
  );
}
