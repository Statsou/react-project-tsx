import { Button } from '../../ui/button/button';
import { Logo } from '../../ui/logo/logo';
import { NavigationUser } from '../navigation-user/navigation-user';
import { Navigation } from '../navigation/navigation';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles['main-header']}>
      <div className={styles['main-header__wrapper']}>
        <Button appereance='white' className={styles['main-header__search-button']}>
          <img src='/src/assets/header/search.svg'/>
        </Button>
        <Logo className={styles['main-header__logo']} />
        <NavigationUser />
        <Navigation />
      </div>
    </header>
  );
}
