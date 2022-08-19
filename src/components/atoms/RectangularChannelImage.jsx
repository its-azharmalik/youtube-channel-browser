import React from 'react';
import styled from 'styled-components';
import image from '../../assets/Images/channel-rectangle.png';

function RectangularChannelImage() {
	const RectangularChannelImageTag = styled.img`
		max-width: 100%;
	`;
	return <RectangularChannelImageTag src={image} />;
}

export default RectangularChannelImage;
