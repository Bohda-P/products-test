// Styled
import {
  AddButton,
  ProductDescription,
  ProductImage,
  ProductItem,
  ProductTitle,
} from './list-item.styled';

interface PropsT {
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ListItem: React.FC<PropsT> = ({ thumbnail, title, description, price, onAddToCart }) => (
  <ProductItem>
    <ProductImage src={thumbnail} alt={title} />
    <ProductTitle>{title}</ProductTitle>
    <ProductDescription>{description}</ProductDescription>
    <ProductDescription>{`Price: ${price}$`}</ProductDescription>
    <AddButton onClick={onAddToCart}>Add to Cart</AddButton>
  </ProductItem>
);

export default ListItem;
