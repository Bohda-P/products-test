// Hooks
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect } from 'react';
// Components
import { Filter, Header, ListItem } from '../../components';
// Actions
import { Product } from '../../store/products/slice';
import { addToCart } from '../../store/cart/slice';
import { filterProduct, getCategories, getProducts } from '../../store/products/actions';
// Selectors
import { selectProducts, selectProductsCategories } from '../../store/products/selectors';
import { selectCartTotalPrice } from '../../store/cart/selectors';
// Styled
import { CartButton, CartButtonContainer, Container, CartHeader, Total } from './products.styled';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const data = useAppSelector(selectProducts);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const productsCategories = useAppSelector(selectProductsCategories);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  const onAddToCard = (product: Product) => {
    dispatch(addToCart(product));
  };

  const onApplyFilter = (category: string) => {
    dispatch(filterProduct(category));
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <Header />
      <CartHeader>
        <CartButtonContainer>
          <CartButton onClick={navigateToCart}>Go to Cart</CartButton>
          {!!totalPrice && <Total>{`Total: ${totalPrice}$`}</Total>}
        </CartButtonContainer>
      </CartHeader>
      <Filter categories={productsCategories} onApply={onApplyFilter} />

      <Container>
        {data?.products.map((product) => (
          <ListItem
            thumbnail={product.thumbnail}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => onAddToCard(product)}
            key={product.id}
          />
        ))}
      </Container>
    </>
  );
};

export default Products;
