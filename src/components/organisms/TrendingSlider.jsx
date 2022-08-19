import React from 'react';
import styled from 'styled-components';
import trendingChannels from '../../data/trendingChannels';
import SingleTrend from '../molecules/SingleTrend';

function TrendingSlider() {
	const SliderContainer = styled.div`
		display: flex;
		overflow: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
		margin: 1.3rem 0;
	`;

	return (
		<SliderContainer>
			{trendingChannels.map((trend) => (
				<SingleTrend key={trend.id} trend={trend} />
			))}
		</SliderContainer>
	);
}

export default TrendingSlider;
