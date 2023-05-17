import { useState } from 'react';
// Styled
import {
  ApplyButton,
  CategoryTitle,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  FilterContainer,
} from './filter.styled';

interface PropsT {
  categories: string[];
  onApply: (category: string) => void;
}

const Filter: React.FC<PropsT> = ({ categories, onApply }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <FilterContainer>
      <CategoryTitle>Categories:</CategoryTitle>
      {categories.map((item) => (
        <CheckboxContainer key={item}>
          <Checkbox
            type="radio"
            name="category"
            value={item}
            checked={selectedCategory === item}
            onChange={() => handleCategoryChange(item)}
          />
          <CheckboxLabel>{item}</CheckboxLabel>
        </CheckboxContainer>
      ))}
      <ApplyButton onClick={() => onApply(selectedCategory)} disabled={!Boolean(selectedCategory)}>
        Apply
      </ApplyButton>
    </FilterContainer>
  );
};

export default Filter;
