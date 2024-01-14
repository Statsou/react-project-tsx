// import { Filter } from '../../blocks/filter/filter';
// import { Catalog } from '../../blocks/catalog/catalog';
import Title from '../../ui/title/title';
import { Checkbox } from '../../ui/checkbox/checkbox';
import ProductCard from '../../ui/product-card/product-card';
import { ProductList } from '../../../mocks/product-list';
import styles from './buy-page.module.scss';
// import { useState } from 'react';

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

function BuyPage () {
  // const [selectProducts, setSelectProducts] = useState(ProductList);
  // console.log(selectProducts);

  return ProductList.length > 0 ? (
    <>
      <div className={styles['buy-page__title-wrapper']}>
        <Title className={styles['buy-page__title']} headingLevel='h1' size='big'>All products</Title>
      </div>
      <div className={styles['buy-page__content-wrapper']}>
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

        <section className={styles['catalog']}>
          <Title headingLevel='h2' className='visually-hidden'>Catalog</Title>
          <ul className={styles['catalog__list']}>
            {ProductList.map((product, id) => (
              <li className={styles['catalog__item']} key={id}>
              <ProductCard
                id={product.id}
                title={product.title}
                image={product.image}
                alt={product.alt}
                price={product.price}
              />
            </li>
            ))}
          </ul>

          {/* <Button appereance='light-grey'>Load more</Button> */}
        </section>
      </div>

      {/* <div className={styles['buy-page__content-wrapper']}>
        <Filter />
        <Catalog />
      </div> */}
    </>
  ) : (
    <h1>Catalog is empty</h1>
  );
}

export default BuyPage;
