import React from 'react';
import styled from 'styled-components';
import icon from '../../assets/Icons/location.png';

function ChannelDescription() {
	const DescriptionContainer = styled.div`
		margin: 0.2rem 0;
	`;
	const Name = styled.span`
		font-family: 'Work Sans', sans-serif;
		font-size: 0.5rem;

		margin-top: 0.8rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	`;
	const Description = styled.div`
		display: flex;
		font-family: 'Work Sans', sans-serif;
		font-size: 0.5rem;
		color: #61646b;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	`;
	const Logo = styled.img`
		width: 10px;
		height: 10px;
		margin-right: 0.2rem;
	`;
	const Text = styled.span``;
	return (
		<DescriptionContainer>
			<Name>Channel Name</Name>
			<Description>
				<Logo src={icon} />
				<Text>browsing youtube but</Text>
			</Description>
		</DescriptionContainer>
	);
}

export default ChannelDescription;
