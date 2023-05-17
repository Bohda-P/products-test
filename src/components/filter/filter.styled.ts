import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CategoryTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const CheckboxLabel = styled.label`
  font-size: 16px;
  margin-left: 10px;
`;

export const Checkbox = styled.input`
  margin: 0;
  margin-right: 5px;
`;

export const ApplyButton = styled.button`
  margin-top: 10px;
  margin-left: 20px;
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
