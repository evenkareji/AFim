import React from 'react';
import { User } from '../../types';
import { FollowButton } from '../atoms/FollowButton';
import { FollowingButton } from '../atoms/FollowingButton';

export const FollowToggleButton: React.FC<{
  loginUser: User;
  postUserId: string;
  onClickFollow: () => void;
  onClickUnFollow: () => void;
}> = React.memo(({ loginUser, postUserId, onClickFollow, onClickUnFollow }) => {
  if (!loginUser || loginUser._id === postUserId) return null;

  const isFollowing = loginUser.followings?.includes(postUserId);

  return isFollowing ? (
    <FollowingButton onClickUnFollow={onClickUnFollow}>
      フォロー中
    </FollowingButton>
  ) : (
    <FollowButton onClickFollow={onClickFollow}>フォロー</FollowButton>
  );
});
