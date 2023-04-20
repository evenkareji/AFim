import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { FollowerInfo } from '../molecules/FollowerInfo';
import { useSelector } from 'react-redux';
import { User } from '../../types/api/user';

export const FollowersInfo = () => {
  const [followers, setFollowers] = useState<Array<User>>([]);
  const user = useSelector((state: any) => state.user.user);
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios.get(`/users/followers/${user._id}`);
      setFollowers(response.data);
    };
    getFollowers();
  }, []);

  return (
    <SUsersContainer>
      {followers.map((follower) => (
        <FollowerInfo follower={follower} key={follower[0]._id} />
      ))}
    </SUsersContainer>
  );
};
const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
