import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px;
`;

export const Total = styled.p`
  margin-left: 10px;
`;

export const CartButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
