import React from 'react';
import styled from 'styled-components';
import ChannelName from '../atoms/ChannelName';
import ProfileImage from '../atoms/ProfileImage';

function ExploreProfile() {

    const ExploreProfileContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.3rem 0;
    `;
  return (
    <ExploreProfileContainer>
        <ProfileImage/> 
        <ChannelName />
    </ExploreProfileContainer>
  );
};

export default ExploreProfile;