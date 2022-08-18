import React from 'react';
import styled from 'styled-components';
import ExploreHeading from '../atoms/ExploreHeading';
import CategorySlider from '../organisms/CategorySlider';

function CategorySection() {

  const SectionContainer = styled.div`
    padding-top: 1.3rem;
  `;

  return (
    <SectionContainer>
      <ExploreHeading text="Categories" size="small"/>
      <CategorySlider />
    </SectionContainer>
  );
}

export default CategorySection;