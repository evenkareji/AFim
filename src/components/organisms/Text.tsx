import React, { FC, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { useSelector } from 'react-redux';

import { useFollow } from '../../hooks/useFollow';
import { useUnFollow } from '../../hooks/useUnFollow';
import { useGetAuthor } from '../../hooks/useGetAuthor';
import { useLike } from '../../hooks/useLike';

import { FollowingButton } from '../atoms/FollowingButton';
import { FollowButton } from '../atoms/FollowButton';
import { HeartIcon } from '../atoms/HeartIcon/HeartIcon';
import { Post } from '../../types';

export const Text: FC<{ post: Post }> = (props) => {
  const { post } = props;
  console.log(post);
  console.log('Parent render');

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { followUser } = useFollow();
  const { unFollowUser } = useUnFollow();
  const { getAuthorByPostId, user } = useGetAuthor();

  const loginUser = useSelector((state: any) => state.user.user);
  const { toggleLike, isGood } = useLike(post, loginUser);

  useEffect(() => {
    getAuthorByPostId(post);
  }, [post.userId]);

  const onClickFollow = useCallback(() => followUser(post, loginUser), []);
  const onClickUnFollow = useCallback(() => unFollowUser(post, loginUser), []);

  return (
    <PostBorder>
      {post.img && (
        <SImg src={`${PUBLIC_FOLDER}images/${post.img}`} alt="投稿した画像" />
      )}

      <SBg />
      <SPostContent>
        <SPostHeader>
          <Link href={`profile/${user?.username}`}>
            <SUserIconImg
              src={
                user?.profileImg
                  ? PUBLIC_FOLDER + 'person/' + user.profileImg
                  : PUBLIC_FOLDER + '/person/noAvatar.png'
              }
            />
          </Link>
          <Box>
            <SUserName>{user?.username}</SUserName>

            {loginUser._id !== post.userId && (
              <>
                {loginUser.followings?.includes(post.userId) ? (
                  <FollowingButton onClickUnFollow={onClickUnFollow}>
                    フォロー中
                  </FollowingButton>
                ) : (
                  <FollowButton onClickFollow={onClickFollow}>
                    フォロー
                  </FollowButton>
                )}
              </>
            )}
          </Box>
        </SPostHeader>
        <SDescContainer>
          <SPostArticle>{post.desc}</SPostArticle>
        </SDescContainer>
      </SPostContent>
      <SAside>
        <SHeartBox onClick={toggleLike}>
          <HeartIcon isGood={isGood} />
        </SHeartBox>
        <HeartCount>{post.likes.length}</HeartCount>
      </SAside>
    </PostBorder>
  );
};

const SHeartBox = styled.div`
  cursor: pointer;
`;
const SPostContent = styled.div`
  position: absolute;
  top: 25%;
  left: 38px;
  width: 74%;
  height: 70%;
`;
const SPostHeader = styled.header`
  display: flex;
  align-items: start;
`;

const SDescContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const SPostArticle = styled.p`
  font-size: 24px;
  color: #000;

  font-weight: normal;
  line-height: 1.5em;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;
const Box = styled.div`
  margin-left: 20px;
`;

const SUserIconImg = styled.img`
  object-fit: cover;
  border-radius: 100%;
  max-width: none;
  width: 52px;
  height: 52px;
  background-color: #fff;
`;
const SUserName = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const SAside = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 62%;
  align-items: center;
  right: 10px;
  padding: 20px;
  text-align: center;
`;

const HeartCount = styled.span`
  margin-bottom: 18px;
  color: #000;
`;

const PostBorder = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
const SBg = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-color: #fafafa;
`;
const SImg = styled.img`
  height: 100vh;

  object-fit: cover;
`;
