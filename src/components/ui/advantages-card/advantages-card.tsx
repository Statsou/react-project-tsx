import Title from '../../ui/title/title';
import { AdvantagesCardProps } from './advantage-card.props';
import styles from './advantages-card.module.scss';

export function AdvantagesCard({ image, alt, title, description }: AdvantagesCardProps) {
  return (
    <article className={styles['advantages-card__content']}>
      <figure>
        <img
          src={image}
          width={24}
          height={24}
          alt={alt}
        />
      </figure>
      <Title headingLevel='h3' size='extra-small' className={styles['advantages__title']}>{title}</Title>
      <p className={styles['advantages__description']}>{description}</p>
    </article>
  );
}
