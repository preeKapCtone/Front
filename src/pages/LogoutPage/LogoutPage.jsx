import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import characterImage from '../../assets/images/characters/Turttle.png';

const LogoutPageContainer = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #9198ff;
  color: white;
  padding: 0 3rem;
  padding-top: 8vh;
  overflow: hidden;
`;

const Subtitle = styled.p`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const CharacterImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 70vh;
  background-color: white;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  overflow: hidden;

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
  overflow: hidden;
  padding: 2rem;
`;

const Message = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #8180c9;
  animation: fadeIn 0.5s ease-in;
  margin: 0;
  padding: 0;

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
    const timer = setTimeout(() => {
      localStorage.clear();
      sessionStorage.clear();
      navigate('/login');
    }, 6000);

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