// Hooks
import { useUserData } from '../../providers';
// Styled
import { Container, LogoTitle, SignOutButton, StyledLink } from './header.styled';

const Header: React.FC = () => {
  const { signOutUser } = useUserData();
  return (
    <Container>
      <StyledLink to={'/products'}>
        <LogoTitle>Products</LogoTitle>
      </StyledLink>
      <SignOutButton onClick={signOutUser}>SignOut</SignOutButton>
    </Container>
  );
};

export default Header;
