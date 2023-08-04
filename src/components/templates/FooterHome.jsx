import React, { useState } from 'react';
import styled from 'styled-components';

import { Home } from '../molecules/Home';
import { ProfileIcon } from '../molecules/UserProfileIcon';
import { AddPostIcon } from '../molecules/AddPostIcon';

export const FooterHome = () => {
  const [isHomeIcon, setIsHomeIcon] = useState(true);

  return (
    <SFooter>
      {/* ホーム */}

      <Home isIcon={isHomeIcon} />

      {/* addpost */}
      <AddPostIcon link={'/addpost'} />
      {/* プロフィール */}
      <ProfileIcon />
    </SFooter>
  );
};
const Sdiv = styled.div`
  display: inline-block;
`;
const SFooter = styled.footer`
  border-top: 1px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  @media (min-width: 425px) {
    & {
      justify-content: space-around;
    }
  }
`;
