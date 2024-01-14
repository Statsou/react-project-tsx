import { Button } from '../../ui/button/button';
import styles from './filter-list.module.scss';
import ProductCard from '../../ui/product-card/product-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../appRoute';
import { FilterListProps } from './filter-list.props';
import { ProductList } from '../../../mocks/product-list';
import { ProductCardProps } from '../../ui/product-card/product-card.props';

export function FilterList({ type, popular }: FilterListProps) {
  let filterList: ProductCardProps[] = [];

  ProductList.filter((product) => {
    product.type === type ? filterList.push(product) : '';
    product.popular === popular ? filterList.push(product) : '';
  });

  filterList.sort(() => Math.random() - 0.5);
  filterList = filterList.slice(0, 4);

  return (
    <>
      <ul className={styles['list']}>
        {filterList.map((item, id) => (
          <li className={styles['item']} key={id}>
            <ProductCard
              id={item.id}
              title={item.title}
              image={item.image}
              alt={item.alt}
              price={item.price}
            />
          </li>
        ))}
      </ul>
      <Button buttonType={Link} link={AppRoute.BUY} appereance='light-grey'>View collection</Button>
    </>
  );
}
