import React from 'react';
import styled from 'styled-components';

import image from '../../assets/Images/avatar.png';

function ProfileImage() {
    const ProfileImageTag = styled.img`
  width: 50px;
  height: 50px;
`;
  return (
    <ProfileImageTag src={image} />
  );
};

export default ProfileImage;