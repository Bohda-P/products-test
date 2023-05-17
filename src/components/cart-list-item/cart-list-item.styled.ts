import styled from 'styled-components';

export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 2px solid #eee;
  width: 80%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 20px;
`;

export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductTitleContainer = styled.h3`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AmountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  background-color: #ccc;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  margin: 0 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #999;
  }
`;

export const Amount = styled.span`
  font-size: 16px;
  margin: 0 10px;
`;
