export interface ShopingCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  count?: number;
  onChange?: () => void;
}
