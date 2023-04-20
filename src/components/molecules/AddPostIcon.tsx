import React from 'react';
import styled from 'styled-components';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import { Icon } from '../atoms/Icon';
export const AddPostIcon = ({ isIcon }) => {
  return (
    <div>
      <Icon link={'/addpost'}>
        {isIcon ? (
          <AddBoxIcon style={{ width: '32', height: '32' }} />
        ) : (
          <AddBoxOutlinedIcon style={{ width: '32', height: '32' }} />
        )}
        <SIconText isIcon={isIcon}>投稿</SIconText>
      </Icon>
    </div>
  );
};
const SIconText = styled.small`
  font-weight: ${({ isIcon }) => (isIcon ? '800' : 'normal')};
  flex: 1;
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1264px) {
    margin-left: 30px !important;
    display: block;
  }
`;
