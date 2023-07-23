import React from 'react';
import styled from 'styled-components';
import { Text } from '../components/organisms/Text';
import { useEffect, useMemo } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

import { useGetPosts } from '../hooks/useGetPosts';
import { useDispatch } from 'react-redux';

import { logout } from '../features/userSlice';

export const Post = () => {
  const dispatch = useDispatch();
  const { getPosts, posts } = useGetPosts();
  useEffect(() => {
    getPosts();
  }, []);

  const logoutEvent = async () => {
    try {
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };
  return useMemo(() => {
    return (
      <SPostMain>
        <SLogoutButton onClick={logoutEvent}>
          <LogoutIcon style={{ fontSize: '14px' }} />
        </SLogoutButton>

        <PostBg>
          <PostSlide>
            {posts.map((post) => (
              <Text post={post} key={post['_id']} />
            ))}
          </PostSlide>
        </PostBg>
      </SPostMain>
    );
  }, [logoutEvent]);
};
const SLogoutButton = styled.div`
  padding: 10px;
  font-size: 12px;
  border-radius: 15px;
  text-align: center;
  background: #dfdfdf;
  color: #626161;
  position: absolute;
  top: 10%;
  left: 20px;
  z-index: 10;
`;
const SPostMain = styled.div`
  position: relative;
  flex: 1;
  @media (min-width: 768px) {
    flex: 0.9;
  }
  @media (min-width: 1264px) {
    flex: 0.8;
  }
`;
const PostBg = styled.div`
  color: white;
  background-color: #000;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const PostSlide = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 425px) {
    & {
      max-width: 400px;
      width: 100%;
      height: 95vh;
      border-radius: 20px;
    }
  }

  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;
