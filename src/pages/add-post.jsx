import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/templates/Layout';
import { AddPost } from './AddPost';

const AddPostInfo = () => {
  return (
    <SFlex>
      <Footer />
      <AddPost />
    </SFlex>
  );
};
const SFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
export default AddPostInfo;
