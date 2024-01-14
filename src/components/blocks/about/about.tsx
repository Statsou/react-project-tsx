import { Button } from '../../ui/button/button';
import Title from '../../ui/title/title';
import styles from './about.module.scss';


export function About() {
  return (
    <section className={styles['about']}>
      <div className={styles['about__content']}>
      <Title className={styles['about__title']} headingLevel='h2' size='small'>From a studio in London to a global brand with over 400 outlets</Title>
      <p className={styles['about__description']}>
        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
      </p>
      <p className={styles['about__description']}>
        Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become
        the hotbed for the London interior design community.
      </p>
      <Button className={styles['about__button']} appereance='light-grey'>Get in touch</Button>
      </div>
      <figure className={styles['about__image']}>
        <img src='/src/assets/about/about.webp' alt='Bright room design.' width={720} height={603} />
      </figure>
    </section>
  );
}
