import { useSelector } from 'react-redux';
import { Button } from '../../ui/button/button';
import { CartCard } from '../../ui/cart-card/cart-card';
import Title from '../../ui/title/title';
import styles from './shoping-cart.module.scss';
import { RootState } from '../../../store/store';
// import { useState } from 'react';
// import { ShopingCard } from './shopping-cart.props';
import { ProductList } from '../../../mocks/product-list';

const dataCard = [
  {
    image: '/src/assets/products/mini/product-mini-1.webp',
    alt: 'Chair "Luxer"',
    title: 'The Dandy chair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: '85'
  },
  {
    image: '/src/assets/products/mini/product-mini-1.webp',
    alt: 'Chair "Luxer"',
    title: 'The Dandy chair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: '125'
  }
];

function ShoppingCart () {
  // const [cardProducts, setCardProducts] = useState<ShopingCard[]>([]);
  const items = useSelector((state: RootState) => state.cart.items);

  console.log(items);

  // function getItem() {
  //   const data = ProductList.map((id) => id.id);
  //   return data;
  // }

  function getItem() {
    const data = ProductList.map((item) => item.id);
    return data;
  }

  // function loadingAllItems() {
  //   const res = setCardProducts(items.map(item => getItem(item.id)));
  //   setCardProducts(res);
  // }

  function taste () {
    console.log(getItem());
  }

  // useEffect(() => {
  //   loadingAllItems();
  // }, [items]);

  const amount = dataCard.map((item) => Number(item.price));

  return (
    <section className={styles['cart']}>
      <Title headingLevel='h1' size='big' className={styles['cart__title']}>Your shopping cart</Title>

      <ul className={styles['cart__heading-list']}>
        <li className={styles['cart__heading-item']}>
          Product
        </li>
        <li className={styles['cart__heading-item']}>
          Quantity
        </li>
        <li className={styles['cart__heading-item']}>
          Total
        </li>
      </ul>

      {/* <ul className={styles['cart__product-list']}>
        {items.map((id) => {
          const product = cardProducts.find(product => product.id === id.id);
          if (!product) {
            return;
          }

          return (
            <li className={styles['cart__product-item']}>
              <CartCard count={id.count} {...product} />
            </li>
          );
        })}
      </ul> */}

      <ul className={styles['cart__product-list']}>
        {dataCard.map((card, id) => (
          <li className={styles['cart__product-item']} key={id}>
            <CartCard
              image={card.image}
              alt={card.alt}
              title={card.title}
              description={card.description}
              price={Number(card.price)}
            />
          </li>
        ))}
      </ul>

      <div className={styles['cart-result']}>
        <span className={styles['product__result-price']}>Subtotal <span className={styles['product__result-value']}>£{amount.reduce((acc, id) => acc + id, 0)}</span></span>
        <span className={styles['product__result-alert']}>Taxes and shipping are calculated at checkout</span>
        <Button className={styles['product__button-submit']} onClick={taste}>Go to checkout</Button>
      </div>
    </section>
  );
}

export default ShoppingCart;
