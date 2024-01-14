import Title from '../../ui/title/title';
import styles from './new.module.scss';

import { FilterList } from '../../ui/filter-list/filter-list';

export function New() {
  return (
    <section className={styles['new']}>
      <Title headingLevel='h2' className={styles['new__title']}>New ceramics</Title>
      <FilterList type='ceramic' />
    </section>
  );
}

