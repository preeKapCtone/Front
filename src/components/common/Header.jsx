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

const Logo = styled.div`
 font-size: 2rem;
 font-weight: bold;
`;

const UserInfo = styled.div`
 display: flex;
 align-items: center;
 font-size: 1rem;
`;

const UserProfile = styled.div`
 display: flex;
 align-items: center;
 margin-left: 10px;
 font-weight: normal;
 color: white;
`;

const ProfileLink = styled(Link)`
 text-decoration: none;
 color: white;
 display: flex;
 align-items: center;
 gap: 10px;
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
                <Logo>sBOOKY</Logo>
                <UserInfo>
                    <UserProfile>
                        Hi! <ProfileLink to="/profile">
                            {nickname || '사용자'}
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