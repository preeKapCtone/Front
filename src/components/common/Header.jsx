import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #8f9dff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.header`
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

const LogoLink = styled(Link)`
  text-decoration: none;
  color: white;
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
  
  transition: all 0.2s ease-in-out;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  color: white;
`;

const Greeting = styled.span`
  margin-right: 15px;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  
  & > span {
    margin-right: 15px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
  border: 2px solid white;
`;

const Header = () => {
    const nickname = localStorage.getItem('nickname');
    const userimage = localStorage.getItem('userimage');
    const defaultImage = '/src/assets/images/profileimage/pro16.png';
 
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoLink to="/main">
                    <Logo>sBOOKY</Logo>
                </LogoLink>
                <UserInfo>
                    <UserProfile>
                        <Greeting>Hi!</Greeting>
                        <ProfileLink to="/profile">
                            <span>{nickname || '사용자'}</span>
                            <ProfileImage 
                                src={userimage && userimage !== '0' 
                                    ? `/src/assets/images/profileimage/pro${userimage}.png` 
                                    : defaultImage}
                                alt="Profile" 
                            />
                        </ProfileLink>
                    </UserProfile>
                </UserInfo>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;