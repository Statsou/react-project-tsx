import styles from './cart-card.module.scss';
import Title from '../../ui/title/title';
import { Counter } from '../../ui/counter/counter';
import { CartCardProps } from './cart-card.props';
import { useState } from 'react';

export function CartCard ({ image, alt, title, description, price }: CartCardProps) {
  const [productCount, setProductCount] = useState(1);
  const totalPrice = price * productCount;

  return (
    <article className={styles['card']}>
      <div className={styles['card__content']}>
        <figure className={styles['card__image']}>
          <img src={image} width={109} height={134} alt={alt} />
        </figure>
        <Title headingLevel='h1' size='extra-small' className={styles['card__title']}>{title}</Title>
        <p className={styles['card__description']}>
          {description}
        </p>
        <span className={styles['card__price']}>£{price}</span>
      </div>

      <div className={styles['card__quantity']}>
        <Counter value={productCount} onChange={setProductCount} />
      </div>
      <span className={styles['card__total-price']}>£{totalPrice}</span>
    </article>
  );
}
