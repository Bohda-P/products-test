// Hooks
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserData } from '../../providers';
import { useNavigate } from 'react-router-dom';
// Validation
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
// Styled
import {
  AuthFormButton,
  AuthFormContainer,
  AuthFormError,
  AuthFormHeader,
  AuthFormInput,
  AuthFormLabel,
  AuthFormToggle,
  Container,
} from './login.styled';

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const { signIn, loading, user, signUp, error: authError } = useUserData();

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    if (isLogin) {
      signIn(data.email, data.password);
    } else {
      signUp(data.email, data.password);
    }
    reset();
  };

  if (loading) {
    <h1>Loading...</h1>;
  }

  useEffect(() => {
    if (user) {
      navigate('/products', { replace: true });
    }
  }, [user]);

  return (
    <Container>
      <AuthFormContainer>
        <AuthFormHeader>{isLogin ? 'Login' : 'Sign Up'}</AuthFormHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AuthFormLabel>Email</AuthFormLabel>
            <AuthFormInput type="email" {...register('email')} />
            {errors.email && <AuthFormError>{errors.email.message}</AuthFormError>}
          </div>
          <div>
            <AuthFormLabel>Password</AuthFormLabel>
            <AuthFormInput type="password" {...register('password')} />
            {errors.password && <AuthFormError>{errors.password.message}</AuthFormError>}
          </div>
          <AuthFormButton type="submit">{isLogin ? 'Login' : 'Sign Up'}</AuthFormButton>
        </form>
        {authError && <AuthFormError>{authError?.message.split(':')[1]}</AuthFormError>}
        <AuthFormToggle onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
        </AuthFormToggle>
      </AuthFormContainer>
    </Container>
  );
};

export default Login;
