import { Link } from 'react-router-dom';
import Title from '../../ui/title/title';
import styles from './product-card.module.scss';
import { ProductCardProps } from './product-card.props';
import { AppRoute } from '../../../appRoute';

function ProductCard(props: ProductCardProps) {
  return (
    <Link className={styles['product__link']} to={`${AppRoute.PRODUCT}/${props.id}`} key={props.id}>
      <figure className={styles['product__image']}>
        <img src={props.image} alt={props.alt} loading='lazy'/>
      </figure>
      <Title className={styles['product__title']} headingLevel='h3' size='extra-small'>{props.title}</Title>
      <span className={styles['product__price']}>£{props.price}</span>
    </Link>
  );
}

export default ProductCard;
