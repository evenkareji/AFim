import IconButton from '@mui/material/IconButton';
import React, { FC, ReactNode, memo } from 'react';
import styled from 'styled-components';
import { BaseBtn } from './BaseBtn';

type Props = {
  children: ReactNode;
  onClickFollow: () => void;
};
export const FollowButton: FC<Props> = memo((props) => {
  const { children, onClickFollow } = props;
  console.log('FollowButton');

  return (
    <IconButton style={{ padding: '0px' }} onClick={onClickFollow}>
      <SUnFollowBtn className="unfollow-bg-color">{children}</SUnFollowBtn>
    </IconButton>
  );
});

const SUnFollowBtn = styled(BaseBtn)`
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  padding: 6px 15px 5px 17px;

  border-radius: 8px;
  background: #ff8d06;
  color: #fff;
  &:hover {
    background: #ff6702;
  }
`;
