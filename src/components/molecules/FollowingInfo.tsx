import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { UserIconImg } from '../atoms/UserIconImg';

export const FollowingInfo = ({ following }) => {
  const PUBLIC_FOLDER = process.env.NEXT_PUBLIC_PUBLIC_FOLDER;
  return (
    <UserBorder key={following[0]._id}>
      <Link href={`/profile/${following[0].username}`}>
        <SFollowImg
          src={
            following[0].profileImg
              ? PUBLIC_FOLDER + following[0].profileImg
              : PUBLIC_FOLDER + '/person/noAvatar.png'
          }
        />
      </Link>
      <SFollowContainer>
        <SFollowName>{following[0].username}</SFollowName>
        <SFollowDesc></SFollowDesc>
      </SFollowContainer>
      {/* <SOnFollowButton>押せません</SOnFollowButton> */}
    </UserBorder>
  );
};
const UserBorder = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const SFollowImg = styled(UserIconImg)`
  margin-right: 13px;
  width: 61;
  height: 61;
  text-align: left;
  @media (min-width: 425px) {
    & {
      width: 71;
      height: 71;
    }
  }
`;
const SFollowContainer = styled.dl`
  flex: 0.9;
`;
const SFollowName = styled.dt`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: -5px;
`;
const SFollowDesc = styled.dd`
  font-size: 16px;
  color: #8f8f8f;
`;
