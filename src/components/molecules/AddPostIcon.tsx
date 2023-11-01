import React from 'react';
import styled from 'styled-components';
import { Icon } from '../atoms/Icon';

export const AddPostIcon = () => {
  return (
    <Icon link={'/add-post'}>
      <ButtonContainer>
        <PlusSign />
      </ButtonContainer>
    </Icon>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 28px;
  background: linear-gradient(90deg, #e1f5fe 48%, #ffc1c1 52%);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PlusSign = styled.div`
  width: 28px;
  height: 100%;
  /* padding: 3px; */
  background-color: #ffffff;
  border-radius: 4px;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
    border-radius: 2px;
  }

  ::before {
    width: 3px;
    height: 16px;
  }

  ::after {
    width: 16px;
    height: 3px;
  }
`;

export default AddPostIcon;
