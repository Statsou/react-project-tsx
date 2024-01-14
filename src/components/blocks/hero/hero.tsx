import { Button } from '../../ui/button/button';
import Title from '../../ui/title/title';
import styles from './hero.module.scss';
import { AppRoute } from '../../../appRoute';
import { Link } from 'react-router-dom';

export function Hero () {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero__content']}>
        <Title headingLevel='h1' className={styles['hero__title']}>The furniture brand for the future, with timeless designs</Title>
        <Button buttonType={Link} link={AppRoute.BUY} appereance='grey'>View collection</Button>
        <p className={styles['hero__description']}>A new era in eco friendly furniture with Avelon, the French luxury retail brand
          with nice fonts, tasteful colors and a beautiful way to display things digitally
          using modern web technologies.</p>
      </div>
      <img src='/src/assets/hero/hero.webp' width={520} height={584} alt='Chair "Luxer".' />
    </section>
  );
}
