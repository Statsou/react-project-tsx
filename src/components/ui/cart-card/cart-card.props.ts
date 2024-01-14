export interface CartCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  count?: number;
  onChange?: () => void;
}
