// Styled
import {
  Amount,
  AmountButton,
  AmountContainer,
  Content,
  ProductDescription,
  ProductDetails,
  ProductImage,
  ProductItem,
  ProductTitle,
  ProductTitleContainer,
} from './cart-list-item.styled';

interface PropsT {
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  amount: number;
  onAddAmount: () => void;
  onDeleteAmount: () => void;
}

const CartListItem: React.FC<PropsT> = ({
  thumbnail,
  title,
  amount,
  description,
  price,
  onAddAmount,
  onDeleteAmount,
}) => (
  <ProductItem>
    <Content>
      <ProductImage src={thumbnail} alt={title} />
      <ProductTitleContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <ProductDescription>{`Price: ${price}$`}</ProductDescription>
      </ProductTitleContainer>
    </Content>
    <ProductDetails>
      <AmountContainer>
        <AmountButton onClick={onDeleteAmount}>-</AmountButton>
        <Amount>{amount}</Amount>
        <AmountButton onClick={onAddAmount}>+</AmountButton>
      </AmountContainer>
    </ProductDetails>
  </ProductItem>
);

export default CartListItem;
