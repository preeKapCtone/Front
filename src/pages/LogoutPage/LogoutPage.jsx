import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import characterImage from '../../assets/images/characters/Turttle.png';


// 전체 페이지를 감싸는 컨테이너
const LogoutPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// 왼쪽 섹션 - 캐릭터와 슬로건이 있는 부분
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

// 슬로건 텍스트 스타일
const Subtitle = styled.p`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
`;

// 캐릭터 이미지를 감싸는 가장 바깥쪽 컨테이너
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

// 실제 캐릭터가 들어가는 내부 컨테이너
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

// 캐릭터 이미지
const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: -200px;
`;

// 오른쪽 섹션 - See you again! 메시지가 있는 부분
const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

// 메시지 스타일
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
    // 세션/로컬 스토리지에서 사용자 정보 제거
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    // 3초 후에 로그인 페이지로 자동 이동
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

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