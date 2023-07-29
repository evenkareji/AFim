import React, { ReactNode } from 'react';
import { Footer } from '../Footer';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SFlex>
      <main>{children}</main>
      <Footer />
    </SFlex>
  );
};
const SFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
export default Layout;
