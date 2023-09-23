import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProfileCount } from '../../components/molecules/ProfileCount';
import { UserPostList } from '../../components/organisms/UserPostList';
import { IconButton } from '@mui/material';
import axios from 'axios';

import { UserIconWithName } from '../../components/molecules/UserIconWithName';
import { FollowTab } from '../FollowTab';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../../components/templates/Layout';
import { fetchInitialUser } from '../../features/userSlice';

export async function getServerSideProps(context) {
  const { username } = context.query;
  const response = await axios.get(
    `http://localhost:8000/users?username=${username}`,
  );
  // console.log(response.data, 'profile');
  let profileImage;
  const { profileImg } = response.data;
  const isGoogleImg = profileImg.startsWith(
    'https://lh3.googleusercontent.com/',
  );

  profileImage = isGoogleImg
    ? profileImg
    : `${process.env.NEXT_PUBLIC_PUBLIC_FOLDER}${
        profileImg || 'person/noAvatar.png'
      }`;
  return {
    props: { profileUser: response.data, profileImage },
  };
}

const ProfilePage = ({ profileUser, profileImage }) => {
  const router = useRouter();
  const [isToPage, setIsToPage] = useState<boolean>(false);
  const [isPointer, setIsPointer] = useState<boolean>(false);

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  console.log(profileImage);

  useEffect(() => {
    dispatch(fetchInitialUser());
  }, []);

  useEffect(() => {
    if (!user.user && !user.loading) {
      router.push('/login');
    }
  }, [user]);

  const { username } = router.query;

  useEffect(() => {
    setIsToPage(false);
    setIsPointer(user?.username === username);
  }, [isPointer]);

  const toFollowsPage = () => {
    if (user.username !== username) return;
    setIsToPage((prev) => !prev);
  };
  const followings = profileUser?.followings || [];
  const followers = profileUser?.followers || [];
  if (user.loading) {
    return <p>loading...</p>;
  }
  return (
    <SProfileBox>
      <SFollowTab
        isToPage={isToPage}
        toFollowsPage={toFollowsPage}
        style={{ position: 'absolute' }}
      />
      <SProfileInfo>
        <UserIconWithName
          profileUser={profileUser}
          profileImage={profileImage}
        />
        <SProfileFlex isPointer={isPointer}>
          <ProfileCount
            toFollowsPage={toFollowsPage}
            name="フォロー"
            count={followings.length}
          />
          <ProfileCount
            toFollowsPage={toFollowsPage}
            name="フォロワー"
            count={followers.length}
          />
        </SProfileFlex>
        <SIntroduction>{profileUser.desc}</SIntroduction>
      </SProfileInfo>
      <SIconButtons>
        <SIconButton>
          <SProfileOption>投稿</SProfileOption>
        </SIconButton>
      </SIconButtons>
      <SPadding>
        <UserPostList username={username} />
      </SPadding>
    </SProfileBox>
  );
};
const SFollowTab = styled(FollowTab)``;
const SProfileBox = styled.div`
  position: relative;

  flex: 1;
  @media (min-width: 768px) {
    flex: 0.9;
  }
  @media (min-width: 1264px) {
    flex: 0.8;
  }

  background-color: #fafafa;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const SIntroduction = styled.div`
  padding: 30px 0px 0px;
  margin: 0 auto;
  width: 50%;
  max-width: 600px;
  text-align: center;
  font-size: 16px;
`;
const SIconButtons = styled.div`
  width: 100%;
  border-top: 1px solid #dfdfdf;
  background-color: #fafafa;
`;
const SProfileOption = styled.div`
  font-size: 18px;
  color: #ed6103;
  font-weight: bold;
`;
const SIconButton = styled(IconButton)`
  padding: 8px;
  text-decoration: none;
  font-size: inherit !important;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: inherit !important;
  border-radius: 0px !important;
  @media (min-width: 425px) {
    width: 120px;
  }
`;

const SProfileFlex = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'not-allowed')};
`;
const SProfileInfo = styled.div`
  width: 100%;
  max-width: 432px;
  margin: 0 auto;
  padding: 43px 0;
  /* border-bottom: 1px solid #000; */
`;

const SPadding = styled.div`
  padding-left: 3px;
  padding-right: 3px;
  width: 100%;
`;
ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default ProfilePage;
