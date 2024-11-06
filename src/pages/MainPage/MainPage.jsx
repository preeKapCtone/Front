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
  background-color: #b5a4ff;
  flex: 1; 
`;

const Card = styled.div`
  width: 300px; // 변경된 부분
  background-color: ${props => props.bgColor || 'white'};
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 400px; // 변경된 부분
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
  background-color: ${props => props.buttonColor || '#ff9aff'};
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
`;

const MainPage = () => {
    return (
        <>
            <GlobalStyles /> {/* GlobalStyles 적용 */}
            <MainPageContainer>
                <Header />
                <CardsContainer>
                    <Card bgColor="#ffb6c1">
                        <CardImage src={Frieren} alt="FRIEREN" />
                        <CardTitle>FRIEREN</CardTitle>
                        <CardDescription>The mage who lives 1000 years</CardDescription>
                        <ChatButton buttonColor="#ff9aff">Let's chat!</ChatButton>
                    </Card>
                    <Card bgColor="#8f9dff">
                        <CardImage src={Tuttle} alt="BOOGIE" />
                        <CardTitle>BOOGIE</CardTitle>
                        <CardDescription>the lovely turtle who lives in our univ</CardDescription>
                        <ChatButton buttonColor="#b5a4ff">Let's chat!</ChatButton>
                    </Card>
                    <Card bgColor="#a9a9a9">
                        <CardImage src={Baek} alt="JONGWON BAEK" />
                        <CardTitle>JONGWON BAEK</CardTitle>
                        <CardDescription>korean sweet Gordon ramsay</CardDescription>
                        <ChatButton buttonColor="#d3d3d3">Let's chat!</ChatButton>
                    </Card>
                </CardsContainer>
                <Footer />
            </MainPageContainer>
        </>
    );
};

export default MainPage;