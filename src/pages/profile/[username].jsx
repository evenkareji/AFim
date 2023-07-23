import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/templates/Footer';
import ProfilePage from '../Profile';
import { useRouter } from 'next/router';
export const ProfileLayout = () => {
  const router = useRouter();
  const { username } = router.query;
  console.log(username, 'kkkk');
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
