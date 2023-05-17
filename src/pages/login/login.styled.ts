import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthFormContainer = styled.div`
  min-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AuthFormHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const AuthFormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const AuthFormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AuthFormError = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const AuthFormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const AuthFormToggle = styled.p`
  text-align: center;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
