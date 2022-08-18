// libraries
import React from 'react';
import styled from 'styled-components';

// data
import categories from '../../data/category';

// components
import SingleCategory from '../molecules/SingleCategory';


function CategorySlider() {


  const SliderContainer = styled.div`
    display  : flex;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    margin: 1.3rem 0;
  `;

  return (
    <SliderContainer>
        {categories.map((category)=> (
          <SingleCategory key={category.id} category={category} />
        ))}
        {/* and build a slider out of it. */}
    </SliderContainer>
  );
}

export default CategorySlider;