import React from 'react';
import styled from 'styled-components';

import CircularChannelImage from '../atoms/CircularChannelImage';
import ChannelName from '../atoms/ChannelName';

const SingleCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  width: 200px;
`;

function SingleCategory() {
  return (
    <SingleCategoryContainer>
    {/* Circular Channel Image */}
    <CircularChannelImage />
    {/* Channel Name */}
    <ChannelName />
    </SingleCategoryContainer>
  );
}

export default SingleCategory;