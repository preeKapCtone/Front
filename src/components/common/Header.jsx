import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #8f9dff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <HeaderWrapper>
    <Link to="/">Home</Link>
    <Link to="/chat" style={{ marginLeft: '10px' }}>Chat</Link>
    <Link to="/unity" style={{ marginLeft: '10px' }}>Unity</Link>
  </HeaderWrapper>
);

export default Header;