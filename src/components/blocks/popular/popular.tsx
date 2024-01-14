import Title from '../../ui/title/title';
import { FilterList } from '../../ui/filter-list/filter-list';
import styles from './popular.module.scss';

export function Popular() {

  return (
    <section className={styles['popular']}>
      <Title headingLevel='h2' className={styles['popular__title']}>Our popular products</Title>
      <FilterList popular={true} />
    </section>
  );
}
