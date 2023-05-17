import styled from 'styled-components';

export const ProductItem = styled.div`
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
`;

export const ProductTitle = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

export const AddButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
