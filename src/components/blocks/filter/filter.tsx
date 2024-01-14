import { Checkbox } from '../../ui/checkbox/checkbox';
import Title from '../../ui/title/title';
import styles from './filter.module.scss';

const filterSettings = [
  {
    title: 'Product type',
    item: [
      'Furniture',
      'Ceramic',
      'Sofas',
      'Homeware',
      'Light fittings',
      'Cermaic'
    ]
  },
  {
    title: 'Price',
    item: [
      '0 - 100',
      '101 - 250',
      '250 +'
    ]
  },
  {
    title: 'Designer',
    item: [
      'Robert Smith',
      'Liam Gallagher',
      'Biggie Smalls',
      'Thom Yorke'
    ]
  }
];

export function Filter () {
  return (
    <section className={styles['filters']}>
      <Title headingLevel='h2' className='visually-hidden'>Filter</Title>
      <form method='GET'>
          {filterSettings.map((filter, i) => (
            <fieldset className={styles['filters__fields']} key={i}>
              <Title headingLevel='h3' className={styles['filters__title']}>{filter.title}</Title>

              <ul className={styles['filters__list']}>
                {filter.item.map((filter, i) =>
                  <li className={styles['filters__item']} key={i}>
                    <Checkbox
                      labelComponent='span'
                      text={filter}
                      value={filter}
                      name='select-settings'
                    />
                  </li>
                )}
              </ul>
            </fieldset>
          ))}
      </form>
    </section>
  );
}
