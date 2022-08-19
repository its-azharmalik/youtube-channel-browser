import React from 'react';
import styled from 'styled-components';
import ChannelDescription from '../atoms/ChannelDescription';
import RectangularChannelImage from '../atoms/RectangularChannelImage';
import icon from '../../assets/Icons/save.png';

function SingleTrend({ trend }) {
	const SingleTrendContainer = styled.div`
		display: flex;
		flex-direction: column;
		padding: 8px;
		margin: 0 0.5rem;
		min-width: 200px;
		border: 1px solid #efeff0;
		border-radius: 12px;
	`;
	const ImageBox = styled.div`
		position: relative;
	`;
	const AbsoluteSaveIcon = styled.img`
		position: absolute;
		top: 8px;
		right: 8px;
		width: 18px;
		height: 18px;
	`;

	return (
		<SingleTrendContainer>
			<ImageBox>
				<RectangularChannelImage url={trend.url} />
				<AbsoluteSaveIcon src={icon} />
			</ImageBox>
			<ChannelDescription />
		</SingleTrendContainer>
	);
}

export default SingleTrend;
