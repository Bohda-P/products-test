// Selectors
import { selectCartProducts, selectCartTotalPrice } from '../../store/cart/selectors';
// Actions
import { addOneAmount, deleteOneAmount, resetCart } from '../../store/cart/slice';
// Validation
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
// Components
import { CartListItem, Header } from '../../components';
// Hooks
import { useAppDispatch, useAppSelector } from '../../store';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// Styled
import {
  Button,
  Container,
  ErrorText,
  Field,
  FormContainer,
  Input,
  Label,
  ProductList,
  Title,
  Total,
} from './cart.styled';

type FormValues = {
  name: string;
  surname: string;
  address: string;
  phone: string;
};

const Cart: React.FC = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(selectCartProducts);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  const onAddAmount = (id: number) => {
    dispatch(addOneAmount(id));
  };
  const onDeleteAmount = (id: number) => {
    dispatch(deleteOneAmount(id));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    // Send data to API
    dispatch(resetCart());
    console.log(data);
    reset();
    sessionStorage.clear();
    navigation('/products');
  };

  if (!cartProducts.length) {
    return (
      <>
        <Header />
        <Title>Cart is empty</Title>;
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <ProductList>
          {cartProducts.map((item) => (
            <CartListItem
              key={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              amount={item.amount}
              price={item.price}
              onDeleteAmount={() => onDeleteAmount(item.id)}
              onAddAmount={() => onAddAmount(item.id)}
            />
          ))}
        </ProductList>

        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field>
              <Label>Name</Label>
              <Input type="text" {...register('name')} />
              {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            </Field>

            <Field>
              <Label>Surname</Label>
              <Input type="text" {...register('surname')} />
              {errors.surname && <ErrorText>{errors.surname.message}</ErrorText>}
            </Field>

            <Field>
              <Label>Address</Label>
              <Input type="text" {...register('address')} />
              {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
            </Field>

            <Field>
              <Label>Phone</Label>
              <Input type="text" {...register('phone')} />
              {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
            </Field>

            <Button type="submit">Order</Button>
          </form>
        </FormContainer>
      </Container>
      <Total>{`Total: ${totalPrice}$`}</Total>
    </>
  );
};

export default Cart;
