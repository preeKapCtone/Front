import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import instance, { updateProfile } from '../../utils/axios';

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
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  margin-bottom: 80px;
  position: relative;
  padding-top: 40px;
  width: 100%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-width: 250px;
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
  flex: 1;
  max-width: 700px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const Label = styled.label`
  min-width: 120px;
  color: white;
  font-size: 18px;
`;

const Input = styled.input`
  width: 400px;
  height: 55px;
  padding: 0 25px;
  border-radius: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  box-sizing: border-box;

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
  white-space: nowrap;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CharacterSelector = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 30px;
  display: ${props => props.$isVisible ? 'grid' : 'none'};
  grid-template-columns: repeat(8, minmax(70px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1080px;
  margin: 20px auto 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const CharacterOption = styled.div`
  width: 70px;
  height: 70px;
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
  const [userimage, setUserimage] = useState('0');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: localStorage.getItem('username') || '',
    password: '•'.repeat(9),
    nickname: localStorage.getItem('nickname') || ''
  });

  // 프로필 이미지 배열 수정
  const profileImages = [
    { id: '1', path: profile1 },
    { id: '2', path: profile2 },
    { id: '3', path: profile3 },
    { id: '4', path: profile4 },
    { id: '5', path: profile5 },
    { id: '6', path: profile6 },
    { id: '7', path: profile7 },
    { id: '8', path: profile8 },
    { id: '9', path: profile9 },
    { id: '10', path: profile10 },
    { id: '11', path: profile11 },
    { id: '12', path: profile12 },
    { id: '13', path: profile13 },
    { id: '14', path: profile14 },
    { id: '15', path: profile15 },
    { id: '16', path: profile16 }
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
  
    const fetchProfile = async () => {
      try {
        const formData = new FormData();
        formData.append('nickname', localStorage.getItem('nickname') || '');
        formData.append('userimage', localStorage.getItem('userimage') || '0');
        const response = await instance.put('/api/users/me', formData);
        
        if (response.data) {
          const nickname = response.data.nickname;
          const userimage = response.data.userimage;
          
          setFormData(prev => ({
            ...prev,
            nickname: nickname
          }));
          setUserimage(String(userimage));
          localStorage.setItem('nickname', nickname);
          localStorage.setItem('userimage', String(userimage));
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
  
    fetchProfile();
  }, [navigate]);

  const handleEdit = async () => {
    try {
      const response = await updateProfile(formData.nickname, userimage);
      if (response.message === '프로필 수정 성공') {
        const newNickname = response.nickname;
        const newUserimage = response.userimage;
        
        setFormData(prev => ({
          ...prev,
          nickname: newNickname
        }));
        setUserimage(String(newUserimage));
        localStorage.setItem('nickname', newNickname);
        localStorage.setItem('userimage', String(newUserimage));
        alert('프로필이 성공적으로 수정되었습니다.');
      }
    } catch (error) {
      alert('프로필 수정에 실패했습니다.');
    }
  };

  const handleImageClick = () => {
    setShowCharacters(!showCharacters);
  };

  const handleCharacterSelect = async (imageInfo) => {
    try {
      const response = await updateProfile(formData.nickname, imageInfo.id);
      if (response.message === '프로필 수정 성공') {
        const newNickname = response.nickname;
        const newUserimage = response.userimage;
        
        setUserimage(String(newUserimage));
        setFormData(prev => ({
          ...prev,
          nickname: newNickname
        }));
        localStorage.setItem('nickname', newNickname);
        localStorage.setItem('userimage', String(newUserimage));
        setShowCharacters(false);
      }
    } catch (error) {
      alert('프로필 이미지 업데이트에 실패했습니다.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nickname') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const togglePasswordVisibility = () => {
    const savedPassword = localStorage.getItem('password');
    setFormData(prev => ({
      ...prev,
      password: showPassword ? '•'.repeat(9) : savedPassword || ''
    }));
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
              {userimage && userimage !== '0' ? (
                <ProfileImage 
                  src={profileImages[parseInt(userimage) - 1]?.path || profile16} 
                  alt="Selected profile"
                  onError={(e) => {
                    e.target.src = profile16;
                  }} 
                />
              ) : (
                <ProfileImage 
                  src={profile16}
                  alt="Default profile" 
                />
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
                readOnly
              />
            </InputGroup>

            <InputGroup>
              <Label>password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                readOnly
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
              <Button onClick={handleEdit}>
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
              <img 
                src={imageInfo.path} 
                alt={`Profile ${imageInfo.id}`}
                onError={(e) => {
                  e.target.src = profile16;
                }}
              />
            </CharacterOption>
          ))}
        </CharacterSelector>
      </MainContent>
    </ProfileContainer>
  );
};

export default MyProfilePage;