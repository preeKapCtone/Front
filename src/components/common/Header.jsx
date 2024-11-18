// Header.js
import React from 'react';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #8f9dff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  width: 95%;
  max-width: 1200px;
  padding: 20px;
  background-color: #7f8cff;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const UserProfile = styled.div`
  margin-left: 10px;
  font-weight: normal;
  color: white;
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Logo>sBOOKY</Logo>
                <UserInfo>
                    <UserProfile>Hi! 상상부기</UserProfile>
                </UserInfo>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;