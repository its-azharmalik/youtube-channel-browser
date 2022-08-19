import React from 'react';
import styled from 'styled-components';
import ExploreHeading from '../atoms/ExploreHeading';
import ExploreProfile from '../organisms/ExploreProfile';

function ExploreTopBar() {
	const Container = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem 0;
		border-bottom: 1px solid #efeff0;
		margin: 0;
	`;
	return (
		<Container>
			<ExploreProfile />
			<ExploreHeading
				text='Whom would you like to explore today?'
				size='medium'
			/>
		</Container>
	);
}

export default ExploreTopBar;
