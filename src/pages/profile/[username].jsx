import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/templates/Footer';
import ProfilePage from '../Profile';

export const ProfileLayout = () => {
  return (
    <SFlex>
      <Footer />
      <ProfilePage />
    </SFlex>
  );
};
const SFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
export default ProfileLayout;
