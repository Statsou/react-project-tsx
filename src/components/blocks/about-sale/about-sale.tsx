import { Link } from 'react-router-dom';
import { AppRoute } from '../../../appRoute';
import { Button } from '../../ui/button/button';
import Title from '../../ui/title/title';
import styles from './about-sale.module.scss';

export function AboutSale () {
  return (
    <section className={styles['about-sale']}>
      <div className={styles['about-sale__description']}>
        <Title className={styles['about-sale__title']} headingLevel='h1'>It started with a small idea</Title>
        <p className={styles['about-sale__text']}>
          A global brand with local beginnings, our story begain in a small studio in South London in early 2014
        </p>
        <Button className={styles['about-sale__button']} buttonType={Link} link={AppRoute.BUY} appereance='grey'>View collection</Button>
      </div>

      <figure className={styles['about-sale__image']}>
        <img src='/src/assets/about-main/yellow-armchair.webp' width={630} height={478} alt='Yellow Armshair "Golden Luxe".' />
      </figure>
    </section>
  );
}
