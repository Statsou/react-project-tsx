import { AdvantagesCard } from '../../ui/advantages-card/advantages-card';
import Title from '../../ui/title/title';
import styles from './advantages.module.scss';
import { AdvantagesList } from '../../../mocks/advantages-list';

export function Advantages () {
  return (
    <section className={styles['advantages']}>
      {AdvantagesList?.length ? (
        <>
          <Title headingLevel='h2' size='small' className={styles['advantages__main-title']}>What makes our brand different</Title>
          <ul className={styles['advantages__list']}>
            {AdvantagesList.map((advantage, id) => (
              <li className={styles['advantages__item']} key={id}>
                <AdvantagesCard
                  id={advantage.id}
                  image={advantage.image}
                  title={advantage.title}
                  description={advantage.description}
                  alt={advantage.alt}
                />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}
