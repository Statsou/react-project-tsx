// import { Button } from '../../ui/button/button';
import ProductCard from '../../ui/product-card/product-card';
import Title from '../../ui/title/title';
import styles from './catalog.module.scss';
import { ProductList } from '../../../mocks/product-list';


export function Catalog () {
  return ProductList.length > 0 ? (
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
  ) : (
    <h1>Catalog is empty</h1>
  );
}
