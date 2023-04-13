import IconButton from '@mui/material/IconButton';
import React, { memo } from 'react';
import styled from 'styled-components';
import { BaseBtn } from './BaseBtn';
export const FollowingButton = memo((props) => {
  console.log('%cChild render　OnFollowBtn', 'color:blue');
  const { children, onClickUnFollow } = props;
  return (
    <IconButton style={{ padding: '0px' }} onClick={onClickUnFollow}>
      <SOnFollowBtn>{children}</SOnFollowBtn>
    </IconButton>
  );
});
const SOnFollowBtn = styled(BaseBtn)`
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  padding: 6px 15px 5px 17px;

  border-radius: 8px;
  border: none;

  color: #fff;
  background-color: #ed6103;

  border: 1px solid #ed6103;

  &:hover {
    background-color: #ff6702;
  }
`;
