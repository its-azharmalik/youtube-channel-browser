import React from 'react';
import styled from 'styled-components';


const ChannelNameTag = styled.span`
        font-family: 'Work Sans', sans-serif;
        font-size: 0.5rem;
        text-align: center;
        margin-top: 0.8rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
`;

function ChannelName() {
  return (
    <ChannelNameTag>Channel Name</ChannelNameTag>
  );
}

export default ChannelName;