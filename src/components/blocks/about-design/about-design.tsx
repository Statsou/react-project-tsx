import { Button } from '../../ui/button/button';
import Title from '../../ui/title/title';
import styles from './about-design.module.scss';

export function AboutDesign () {
  return (
    <section className={styles['about-design']}>
      <figure className={styles['about-design__image']}>
          <img src='/src/assets/about-main/aesthetics.webp' width={720} height={603} alt='Aesthetics light design.' />
      </figure>

      <div className={styles['about-design__description']}>
        <Title className={styles['about-design__title']} headingLevel='h1' size='small'>Our service isn't just personal, it's actually hyper personally exquisite</Title>
        <p className={styles['about-design__text']}>
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
        </p>
        <p className={styles['about-design__text']}>
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        <Button className={styles['about-design__button']} appereance='white'>Get in touch</Button>
      </div>
    </section>
  );
}
