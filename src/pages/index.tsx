import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import { PostView } from '../components/organisms/PostView';
import { useEffect } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { useSelector, AppDispatch } from '../redux/store';
import { fetchInitialUser, logout } from '../features/userSlice';
import { useRouter } from 'next/router';
import { getPosts } from '../api/getPosts';
import Layout from '../components/templates/Layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Post } from '../types';
import ClipLoader from 'react-spinners/ClipLoader';

export const getServerSideProps: GetServerSideProps<{
  posts: Post[];
}> = async () => {
  const posts = await getPosts();

  return { props: { posts } };
};

const Home = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.user);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialUser());
  }, []);
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);

  const logoutEvent = useCallback(async () => {
    try {
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, router]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#ed6103" loading={true} size={50} />
      </div>
    );
  }

  return (
    <SPostMain>
      <SLogoutButton onClick={logoutEvent}>
        <LogoutIcon style={{ fontSize: '14px' }} />
      </SLogoutButton>

      <PostBg>
        <PostSlide>
          {posts.map((post) => (
            <PostView post={post} key={post['_id']} />
          ))}
        </PostSlide>
      </PostBg>
    </SPostMain>
  );
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
  cursor: pointer;
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

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
