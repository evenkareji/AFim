import React from 'react';
import styled from 'styled-components';

import { Icon } from '../atoms/Icon';
import { UserIconImg } from '../atoms/UserIconImg';
import { useSelector } from 'react-redux';

export const ProfileIcon = ({ isIcon, changeIsIcon }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.user.user);
  console.log(user, ' username');

  return (
    <Icon link={`/profile/${user?.username}`}>
      <SProfileIcon
        src={
          user?.profileImg
            ? PUBLIC_FOLDER + 'person/' + user.profileImg
            : PUBLIC_FOLDER + 'person/noAvatar.png'
        }
        isIcon={isIcon}
      />
      <SIconText isIcon={isIcon}>プロフィール</SIconText>
    </Icon>
  );
};
const SIconText = styled.small`
  font-weight: ${({ isIcon }) => (isIcon ? '800' : 'normal')};
  letter-spacing: -0.1em;

  @media (min-width: 432px) {
    letter-spacing: 0;
  }
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1264px) {
    width: 90px !important;
    margin-left: 30px !important;
    display: block;
  }
`;

const SProfileIcon = styled(UserIconImg)`
  width: 32px;
  height: 32px;
  padding-left: 0;
  box-sizing: border-box;

  border: ${({ isIcon }) => (isIcon ? '2px solid #000' : 'none')};
`;
