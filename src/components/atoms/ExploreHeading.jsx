import React from 'react';
import styled from 'styled-components';


function ExploreHeading({text, size}) {

    let fontSize = '1rem';
    let fontWeight = 400;
    if(size === 'large'){
        fontSize = "2rem";
    } else if (size === 'medium'){
        fontSize = "1.5rem"; 
        fontWeight = 300;
    }

    const Heading = styled.span`
        font-size: ${fontSize};
        font-family: 'Work Sans', sans-serif;
        text-align: center;
        font-weight: ${fontWeight};
    `;
  return (
    <Heading>{text}</Heading>
  );
}

export default ExploreHeading;