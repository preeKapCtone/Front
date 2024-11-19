import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/common/Header';

const ProfileContainer = styled.div`
 width: 100%;
 min-height: 100vh;
 background-color: #8f9dff;
 display: flex;
 flex-direction: column;
`;

const MainContent = styled.div`
 display: flex;
 flex-direction: column;
 padding: 40px 60px;
 max-width: 1200px;
 margin: 0 auto;
 width: 100%;
`;

const ContentLayout = styled.div`
 display: flex;
 justify-content: center;
 gap: 120px;
 margin-bottom: 80px;
 position: relative;
 padding-top: 40px;
`;

const LeftSection = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 40px;
`;

const ProfileImageContainer = styled.div`
 width: 250px;
 height: 250px;
 border-radius: 50%;
 background: white;
 border: 3px solid #0011ff;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 overflow: hidden;
`;

const PlusIcon = styled.span`
 font-size: 100px;
 color: #8f9dff;
`;

const ProfileImage = styled.img`
 width: 100%;
 height: 100%;
 object-fit: contain;
`;

const LogoutButton = styled.button`
 padding: 15px 40px;
 border-radius: 30px;
 background-color: rgba(255, 255, 255, 0.3);
 border: none;
 color: white;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 font-size: 18px;
 transition: background-color 0.2s;

 &:hover {
   background-color: rgba(255, 255, 255, 0.4);
 }
`;

const FormSection = styled.div`
 display: flex;
 flex-direction: column;
 gap: 35px;
 padding-top: 20px;
`;

const InputGroup = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
`;

const Label = styled.label`
 width: 120px;
 color: white;
 font-size: 18px;
`;

const Input = styled.input`
 width: 450px;
 height: 55px;
 padding: 0 25px;
 border-radius: 30px;
 border: none;
 background-color: rgba(255, 255, 255, 0.9);
 font-size: 18px;

 &:focus {
   outline: none;
   background-color: white;
 }
`;

const Button = styled.button`
 padding: 12px 25px;
 border-radius: 25px;
 background-color: white;
 border: none;
 cursor: pointer;
 font-size: 16px;
 min-width: 100px;
 transition: background-color 0.2s;

 &:hover {
   background-color: #f0f0f0;
 }
`;

const CharacterSelector = styled.div`
 background-color: rgba(255, 255, 255, 0.9);
 border-radius: 20px;
 padding: 40px;
 display: ${props => props.$isVisible ? 'grid' : 'none'};
 grid-template-columns: repeat(8, 1fr);
 gap: 25px;
 width: 100%;
 margin-top: 20px;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CharacterOption = styled.div`
 width: 80px;
 height: 80px;
 border-radius: 50%;
 border: 3px solid ${props => props.$isSelected ? '#8f9dff' : 'transparent'};
 overflow: hidden;
 cursor: pointer;
 transition: all 0.2s;

 &:hover {
   border-color: #8f9dff;
   transform: scale(1.05);
 }

 img {
   width: 100%;
   height: 100%;
   object-fit: cover;
 }
`;

const MyProfilePage = () => {
 const [showCharacters, setShowCharacters] = useState(false);
 const [userimage, setUserimage] = useState(null); 
 const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState({
   username: 'hansung2071478',
   password: 'hasung2071478@',
   nickname: '상상부기'
 });

 const navigate = useNavigate();

 const profileImages = Array.from({ length: 16 }, (_, i) => ({
   id: i + 1,
   path: `/src/assets/images/profileimage/pro${i + 1}.png`
 }));

 const handleImageClick = () => {
   setShowCharacters(!showCharacters);
 };

 const handleCharacterSelect = (imageInfo) => {
   setUserimage(imageInfo.id);
   setShowCharacters(false);
 };

 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setFormData(prev => ({
     ...prev,
     [name]: value
   }));
 };

 const togglePasswordVisibility = () => {
   setShowPassword(!showPassword);
 };

 const handleLogout = () => {
   navigate('/logout');
 };

 return (
   <ProfileContainer>
     <Header />
     <MainContent>
       <ContentLayout>
         <LeftSection>
           <ProfileImageContainer onClick={handleImageClick}>
             {userimage ? (
               <ProfileImage 
                 src={profileImages[userimage - 1].path} 
                 alt="Selected profile" 
               />
             ) : (
               <PlusIcon>+</PlusIcon>
             )}
           </ProfileImageContainer>
           <LogoutButton onClick={handleLogout}>
             LOG OUT
             <span>✓</span>
           </LogoutButton>
         </LeftSection>

         <FormSection>
           <InputGroup>
             <Label>username</Label>
             <Input
               type="text"
               name="username"
               value={formData.username}
               onChange={handleInputChange}
               readOnly
             />
           </InputGroup>

           <InputGroup>
             <Label>password</Label>
             <Input
               type={showPassword ? "text" : "password"}
               name="password"
               value={formData.password}
               onChange={handleInputChange}
             />
             <Button onClick={togglePasswordVisibility}>
               확인하기
             </Button>
           </InputGroup>

           <InputGroup>
             <Label>nickname</Label>
             <Input
               type="text"
               name="nickname"
               value={formData.nickname}
               onChange={handleInputChange}
             />
             <Button onClick={() => console.log('수정하기')}>
               수정하기
             </Button>
           </InputGroup>
         </FormSection>
       </ContentLayout>

       <CharacterSelector $isVisible={showCharacters}>
         {profileImages.map((imageInfo) => (
           <CharacterOption
             key={imageInfo.id}
             $isSelected={userimage === imageInfo.id}
             onClick={() => handleCharacterSelect(imageInfo)}
           >
             <img src={imageInfo.path} alt={`Profile ${imageInfo.id}`} />
           </CharacterOption>
         ))}
       </CharacterSelector>
     </MainContent>
   </ProfileContainer>
 );
};

export default MyProfilePage;