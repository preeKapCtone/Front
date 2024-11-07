import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../styles/globalStyles';
import Frieren from '../../assets/images/characters/Frieren.png';
import Baek from '../../assets/images/characters/Baek.png';
import Tuttle from '../../assets/images/characters/Turttle.png';

import Footer from "../../components/common/Footer.jsx";
import Header from "../../components/common/Header.jsx";

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #8f9dff;
  flex: 1; 
`;

const CardWrapper = styled.div`
  background-color: white;
  padding: 10px; /* 흰색 테두리 */
  border-radius: 20px; /* 자식과 비슷하지만 더 큰 radius로 둥글게 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
  width: 25vw;
  max-width: 300px;
  background-color: ${props => props.bgColor || 'white'};
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 50vh; /* 화면 높이의 40% */
  max-height: 400px; /* 최대 높이 제한 */
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 0.8rem;
  margin: 5px 0;
  color: #f0f0f0;
`;

const ChatButton = styled.button`
  width: 90%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: ${props => props.buttonColor};
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
  transition: background-color 0.3s ease; /* 부드러운 색상 전환 효과 */

  &:hover {
    background-color: ${props => props.hoverColor || '#d18ae6'}; /* 마우스를 올렸을 때 색상 */
  }
`;

const MainPage = () => {
    return (
        <>
            <GlobalStyles /> {/* GlobalStyles 적용 */}
            <MainPageContainer>
                <Header />
                <CardsContainer>
                    <CardWrapper>
                        <Card bgColor="#ffb6c1">
                            <CardImage src={Frieren} alt="FRIEREN" />
                            <CardTitle>FRIEREN</CardTitle>
                            <CardDescription>The mage who lives 1000 years</CardDescription>
                            <ChatButton buttonColor="#ffb6c1" hoverColor="#e18ee0">Let's chat!</ChatButton>
                        </Card>
                    </CardWrapper>

                    <CardWrapper>
                        <Card bgColor="#8f9dff">
                        <CardImage src={Tuttle} alt="BOOGIE" />
                        <CardTitle>BOOGIE</CardTitle>
                        <CardDescription>the lovely turtle who lives in our univ</CardDescription>
                        <ChatButton buttonColor="#8f9dff" hoverColor="#7e8bd1">Let's chat!</ChatButton>
                    </Card>
                    </CardWrapper>

                    <CardWrapper>
                        <Card bgColor="#a9a9a9">
                        <CardImage src={Baek} alt="JONGWON BAEK" />
                        <CardTitle>JONGWON BAEK</CardTitle>
                        <CardDescription>korean sweet Gordon ramsay</CardDescription>
                        <ChatButton buttonColor="#a9a9a9" hoverColor="#b0b0b0">Let's chat!</ChatButton>
                    </Card>
                    </CardWrapper>
                </CardsContainer>
                <Footer />
            </MainPageContainer>
        </>
    );
};

export default MainPage;