import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { FollowingInfo } from '../molecules/FollowingInfo';
import { User } from '../../types';
import { useSelector } from '../../redux/store';

export const FollowingsInfo = () => {
  const [followings, setFollowings] = useState<Array<User>>([]);

  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios.get(`/api/users/followings/${user?._id}`);
      setFollowings(response.data);
    };

    !loading && getFollowers();
  }, [user]);

  return (
    <SUsersContainer>
      {followings.map((following) => (
        <FollowingInfo following={following} key={following[0]._id} />
      ))}
    </SUsersContainer>
  );
};
const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
