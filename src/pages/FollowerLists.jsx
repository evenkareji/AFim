import React from 'react';

import { SearchUsers } from '../components/molecules/SearchUsers';
import { FollowersInfo } from '../components/organisms/FollowersInfo';

export const FollowerLists = () => {
  return (
    <div>
      <SearchUsers />
      <FollowersInfo />
    </div>
  );
};
