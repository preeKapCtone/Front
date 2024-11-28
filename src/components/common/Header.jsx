import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 프로필 이미지들 import
import profile1 from '../../assets/images/profileimage/pro1.png';
import profile2 from '../../assets/images/profileimage/pro2.png';
import profile3 from '../../assets/images/profileimage/pro3.png';
import profile4 from '../../assets/images/profileimage/pro4.png';
import profile5 from '../../assets/images/profileimage/pro5.png';
import profile6 from '../../assets/images/profileimage/pro6.png';
import profile7 from '../../assets/images/profileimage/pro7.png';
import profile8 from '../../assets/images/profileimage/pro8.png';
import profile9 from '../../assets/images/profileimage/pro9.png';
import profile10 from '../../assets/images/profileimage/pro10.png';
import profile11 from '../../assets/images/profileimage/pro11.png';
import profile12 from '../../assets/images/profileimage/pro12.png';
import profile13 from '../../assets/images/profileimage/pro13.png';
import profile14 from '../../assets/images/profileimage/pro14.png';
import profile15 from '../../assets/images/profileimage/pro15.png';
import profile16 from '../../assets/images/profileimage/pro16.png';

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
   
   // 프로필 이미지 매핑
   const profileImages = {
       '1': profile1,
       '2': profile2,
       '3': profile3,
       '4': profile4,
       '5': profile5,
       '6': profile6,
       '7': profile7,
       '8': profile8,
       '9': profile9,
       '10': profile10,
       '11': profile11,
       '12': profile12,
       '13': profile13,
       '14': profile14,
       '15': profile15,
       '16': profile16
   };

   return (
       <HeaderWrapper>
           <HeaderContainer>
               <LogoLink to="/main">
                   <Logo>sBOOKY</Logo>
               </LogoLink>
               <UserInfo>
                   <UserProfile>
                       <Greeting>Welcome!</Greeting>
                       <ProfileLink to="/profile">
                           <span>{nickname || '사용자'}</span>
                           <ProfileImage 
                               src={userimage && userimage !== '0' 
                                   ? profileImages[userimage] 
                                   : profile16}
                               alt="Profile" 
                               onError={(e) => {
                                   e.target.src = profile16;
                               }}
                           />
                       </ProfileLink>
                   </UserProfile>
               </UserInfo>
           </HeaderContainer>
       </HeaderWrapper>
   );
};

export default Header;