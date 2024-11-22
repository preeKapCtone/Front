import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import characterImage from '../../assets/images/characters/Turttle.png';

const LogoutPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #9198ff;
  color: white;
  padding: 3rem;
  padding-top: 14rem;
`;

const Subtitle = styled.p`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const CharacterImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 650px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid #0011ff;
    border-radius: 40px;
  }
`;

const CharacterCard = styled.div`
  position: relative;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  background-color: #9198ff;
  border-radius: 35px;
  border: 3px solid #0011ff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: -200px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Message = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #8180c9;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 6초 후에 실행될 로그아웃 처리
    const timer = setTimeout(() => {
      // localStorage의 모든 항목 제거
      localStorage.clear();
      // 세션스토리지의 모든 항목 제거
      sessionStorage.clear();
      // 로그인 페이지로 리다이렉트
      navigate('/login');
    }, 6000); // 6초로 설정

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <LogoutPageContainer>
      <LeftSection>
        <Subtitle>Interact, Imagine, Inspire.</Subtitle>
        <CharacterImageContainer>
          <CharacterCard>
            <CharacterImage src={characterImage} alt="Character" />
          </CharacterCard>
        </CharacterImageContainer>
      </LeftSection>
      <RightSection>
        <Message>See You Again!</Message>
      </RightSection>
    </LogoutPageContainer>
  );
};

export default LogoutPage;