import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Total = styled.h1`
  margin: 30px 0 0 40px;
`;
export const Title = styled.h1`
  margin-top: 120px;
  text-align: center;
`;

export const FormContainer = styled.div`
  padding: 30px;
  margin-right: 30px;
  border-radius: 20px;
  border: 1px solid #eee;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;
