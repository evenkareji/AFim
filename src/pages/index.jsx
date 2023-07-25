import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/templates/Footer';

import { Post } from './post';

const PostInfo = () => {
  return (
    <SFlex>
      <Footer />
      <Post />
    </SFlex>
  );
};
const SFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
export default PostInfo;
