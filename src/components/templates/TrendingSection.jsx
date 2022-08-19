import React from 'react';
import styled from 'styled-components';
import ExploreHeading from '../atoms/ExploreHeading';
import TrendingSlider from '../organisms/TrendingSlider';

function TrendingSection() {
	const SectionContainer = styled.div`
		padding-top: 1.3rem;
	`;

	return (
		<SectionContainer>
			<ExploreHeading text='Trending Now' size='small' />
			<TrendingSlider />
		</SectionContainer>
	);
}

export default TrendingSection;
