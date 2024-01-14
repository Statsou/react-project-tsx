import { useParams } from 'react-router-dom';
import { Advantages } from '../../blocks/advantages/advantages';
import { Subscribe } from '../../blocks/subscribe/subscribe';
import { Button } from '../../ui/button/button';
import Title from '../../ui/title/title';
import styles from './product-listing.module.scss';
import { ProductList } from '../../../mocks/product-list';
import { FilterList } from '../../ui/filter-list/filter-list';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { cartActions } from '../../../store/cart.slice';

function ProductListing () {
  const { id } = useParams();
  const data = ProductList[Number(id) - 1];

  const dispatch = useDispatch<AppDispatch>();

  function add () {
    dispatch(cartActions.add(data.id));
  }

  return (
    <>
    <section className={styles['product']}>
      <figure className={styles['product__image']}>
        <img src={data.imageBig} width={721} height={759} alt={data.alt} />
      </figure>
      <div className={styles['product__content']}>
        <Title headingLevel='h2' size='big' className={styles['product__title']}>{data.title}</Title>
        <span className={styles['product__price']}>£{data.price}</span>

        <div className={styles['product__description-wrapper']}>
          <Title headingLevel='h3' className={styles['product__description-title']}>Description</Title>
          <p className={styles['product__description']}>
            {data.detailDescription}
          </p>
          <ul className={styles['product__description-list']}>
            {data.advantages.map((item, id) => (
              <li className={styles['product__description-item']} key={id}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className={styles['product__dimensions']}>
            <Title headingLevel='h3' className={styles['product__dimensions-title']}>Dimensions</Title>
            <dl className={styles['product__dimensions-list']}>
              <div className={styles['product__dimensions-item']}>
                <dt>Height</dt>
                <dd>{data.dimensions.height}</dd>
              </div>

              <div className={styles['product__dimensions-item']}>
                <dt>Width</dt>
                <dd>{data.dimensions.width}</dd>
              </div>

              <div className={styles['product__dimensions-item']}>
                <dt>Depth</dt>
                <dd>{data.dimensions.depth}</dd>
              </div>
            </dl>
          </div>
        </div>
        <Button className={styles['product__button-add']} onClick={add}>Add to cart</Button>
      </div>
    </section>

    <section className={styles['like']}>
      <Title headingLevel='h2' className={styles['like__title']}>You might also like</Title>
      <FilterList type={data.type} />
    </section>

    <Advantages />
    <Subscribe />
    </>
  );
}

export default ProductListing;
