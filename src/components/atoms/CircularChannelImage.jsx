import React from 'react';
import styled from 'styled-components';

import image from '../../assets/Images/channel-circle.png';

const CircularChannelImageTag = styled.img`
  width: 50px;
  height: 50px;
`;

function CircularChannelImage() {
  return (
    <CircularChannelImageTag src={image} />
  );
};

export default CircularChannelImage;
