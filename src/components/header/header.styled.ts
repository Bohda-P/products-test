import styled from 'styled-components';
// Components
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  margin-bottom: 20px;
  background-color: #cceeec;
`;

export const SignOutButton = styled.button`
  background-color: #ff4d4d;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff1a1a;
  }

  &:focus {
    outline: none;
  }
`;

export const LogoTitle = styled.h1`
  font-size: 24px;
  color: #333333;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
