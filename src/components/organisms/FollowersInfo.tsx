import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { FollowerInfo } from '../molecules/FollowerInfo';
import { User } from '../../types';
import { useSelector } from '../../redux/store';

export const FollowersInfo = () => {
  const [followers, setFollowers] = useState<Array<User>>([]);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios.get(
        `http://localhost:8000/users/followers/${user?._id}`,
      );
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
