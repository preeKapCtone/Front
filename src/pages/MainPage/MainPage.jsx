import React, { useState } from 'react';
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
  position: relative; /* 부모를 기준으로 카드들의 위치 설정 */
  transition: all 0.3s ease;
`;

const CardWrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: absolute;

  /* 카드 위치 지정 */
  left: ${props => {
    if (props.cardPosition === 'left') return '10%';
    if (props.cardPosition === 'center') return '50%';
    return 'auto';
  }};
  right: ${props => (props.cardPosition === 'right' ? '10%' : 'auto')};

  /* 확장 방향 설정 */
  transform-origin: ${props => {
    if (props.cardPosition === 'left') return 'left center';
    if (props.cardPosition === 'center') return 'center center';
    return 'right center';
  }};
  transform: ${props => (props.cardPosition === 'center' ? 'translateX(-50%)' : 'none')};

  width: ${props => (props.isExpanded ? '80vw' : '25vw')};
  max-width: ${props => (props.isExpanded ? 'none' : '300px')};
  height: auto;
  max-height: 440px;
  display: ${props => (props.isVisible ? 'block' : 'none')};

  /* 반응형 디자인: 화면이 작아질 때 카드 전체 너비를 차지 */
  @media (max-width: 768px) {
    position: static;
    width: 90%;
    max-width: 100%;
    margin: 10px auto;
  }
`;

const Card = styled.div`
  background-color: ${props => props.bgColor || 'white'};
  border-radius: 15px;
  padding: 10px;
  color: white;
  font-weight: bold;
  display: flex;
  gap: ${props => (props.isExpanded ? '20px' : '0')}; /* 확장 시 이미지와 설명 사이 간격 */
  max-height: 420px; /* Card의 최대 높이 설정 */
  overflow-y: auto; /* 내용이 많을 경우 스크롤 활성화 */

  /* 반응형 디자인: 화면이 작아질 때 세로 배치 */
  flex-direction: ${props => (props.isExpanded ? 'row' : 'column')};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardImage = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 200px; /* 모바일에서는 크기 축소 */
    height: auto;
  }
`;

const CardContent = styled.div`
  display: ${props => (props.isExpanded ? 'block' : 'none')};
  color: #333;
  font-size: 1rem;
  flex: 1;
  opacity: ${props => (props.isExpanded ? 1 : 0)};
  transform: ${props => (props.isExpanded ? 'translateX(0)' : 'translateX(-10px)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* 작은 화면에서 텍스트 크기 축소 */
    padding: 10px;
    text-align: center;
  }
`;

const CardLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: ${props => (props.isExpanded ? 'row' : 'column')};

  @media (max-width: 768px) {
    flex-direction: column; /* 화면이 좁아지면 세로 정렬 */
    align-items: center;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
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
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.hoverColor || '#d18ae6'};
  }
`;

const MainPage = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleExpand = (card) => {
        setExpandedCard(expandedCard === card ? null : card); // 클릭 시 같은 카드면 축소, 아니면 확장
    };

    return (
        <>
            <GlobalStyles />
            <MainPageContainer>
                <Header />
                <CardsContainer>
                    {/* 첫 번째 카드 */}
                    <CardWrapper
                        isExpanded={expandedCard === 'frieren'}
                        isVisible={expandedCard === null || expandedCard === 'frieren'}
                        cardPosition="left"
                        onMouseEnter={() => handleExpand('frieren')}
                        onMouseLeave={() => handleExpand(null)}
                    >
                        <Card bgColor="#ffb6c1">
                            <CardLayout isExpanded={expandedCard === 'frieren'}>
                                <CardInfo>
                                    <CardImage src={Frieren} alt="FRIEREN" />
                                    <CardTitle>FRIEREN</CardTitle>
                                    <CardDescription>The mage who lives 1000 years</CardDescription>
                                    <ChatButton buttonColor="#ffb6c1" hoverColor="#e18ee0">
                                        Let's chat!
                                    </ChatButton>
                                </CardInfo>
                                <CardContent isExpanded={expandedCard === 'frieren'}>
                                    <p>
                                        Frieren has an easy-going personality, however, her aloof attitude makes her a mystery to her peers...
                                    </p>
                                </CardContent>
                            </CardLayout>
                        </Card>
                    </CardWrapper>

                    {/* 두 번째 카드 */}
                    <CardWrapper
                        isExpanded={expandedCard === 'boogie'}
                        isVisible={expandedCard === null || expandedCard === 'boogie'}
                        cardPosition="center"
                        onMouseEnter={() => handleExpand('boogie')}
                        onMouseLeave={() => handleExpand(null)}
                    >
                        <Card bgColor="#8f9dff">
                            <CardLayout isExpanded={expandedCard === 'boogie'}>
                                <CardInfo>
                                    <CardImage src={Tuttle} alt="BOOGIE" />
                                    <CardTitle>BOOGIE</CardTitle>
                                    <CardDescription>The lovely turtle who lives in our univ</CardDescription>
                                    <ChatButton buttonColor="#8f9dff" hoverColor="#7e8bd1">
                                        Let's chat!
                                    </ChatButton>
                                </CardInfo>
                                <CardContent isExpanded={expandedCard === 'boogie'}>
                                    <p>
                                        Boogie is the beloved turtle who lives at our university and brings joy to everyone who sees him...
                                    </p>
                                </CardContent>
                            </CardLayout>
                        </Card>
                    </CardWrapper>

                    {/* 세 번째 카드 */}
                    <CardWrapper
                        isExpanded={expandedCard === 'baek'}
                        isVisible={expandedCard === null || expandedCard === 'baek'}
                        cardPosition="right"
                        onMouseEnter={() => handleExpand('baek')}
                        onMouseLeave={() => handleExpand(null)}
                    >
                        <Card bgColor="#a9a9a9">
                            <CardLayout isExpanded={expandedCard === 'baek'}>
                                <CardInfo>
                                    <CardImage src={Baek} alt="JONGWON BAEK" />
                                    <CardTitle>JONGWON BAEK</CardTitle>
                                    <CardDescription>Korean sweet Gordon Ramsay</CardDescription>
                                    <ChatButton buttonColor="#a9a9a9" hoverColor="#b0b0b0">
                                        Let's chat!
                                    </ChatButton>
                                </CardInfo>
                                <CardContent isExpanded={expandedCard === 'baek'}>
                                    <p>
                                        Jongwon Baek, known as the "Korean Sweet Gordon Ramsay," is a culinary genius admired by many...
                                    </p>
                                </CardContent>
                            </CardLayout>
                        </Card>
                    </CardWrapper>
                </CardsContainer>
                <Footer />
            </MainPageContainer>
        </>
    );
};

export default MainPage;