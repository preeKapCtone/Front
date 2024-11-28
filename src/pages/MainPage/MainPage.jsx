import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import CustomTooltip from "../../components/CustomTooltip.jsx";
import Footer from "../../components/common/Footer.jsx";
import Header from "../../components/common/Header.jsx";
import { FrierenGreeting, BoogieGreeting, BaekGreeting } from '../../components/GreetingCard';

import FrierenHome from '../../assets/images/characters/FrierenHome.png';
import BaekHome from '../../assets/images/characters/BaekHome.png';
import Tuttle from '../../assets/images/characters/Turttle.png';

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
  position: relative;
  transition: all 0.3s ease;
`;

const CardWrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: absolute;

  left: ${props => {
    if (props.cardPosition === 'left') return '10%';
    if (props.cardPosition === 'center') return '50%';
    return 'auto';
  }};
  right: ${props => (props.cardPosition === 'right' ? '10%' : 'auto')};

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
  padding: 20px;
  display: flex;
  height: 100%;
  max-height: 420px;
  overflow: hidden;

  flex-direction: ${props => (props.isExpanded ? 'row' : 'column')};
  gap: ${props => (props.isExpanded ? '40px' : '10px')};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
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
    width: 200px;
    height: auto;
  }
`;

const CardContent = styled.div`
  display: ${props => (props.isExpanded ? 'flex' : 'none')};
  flex-direction: column;
  flex: 1;
  background-color: ${props => props.bgColor || 'transparent'};
  opacity: ${props => (props.isExpanded ? 1 : 0)};
  transform: ${props => (props.isExpanded ? 'translateX(0)' : 'translateX(-10px)')};
  transition: all 0.3s ease;
  overflow-y: auto;
  padding: 10px;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  width: ${props => (props.isExpanded ? '300px' : '100%')};
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #ffffff;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
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
    const navigate = useNavigate();

    const handleExpand = (card) => {
        setExpandedCard(expandedCard === card ? null : card);
    };

    const handleNavigateToChat = (character) => {
        navigate(`/chat/${character}`);
    };

    const handleNavigateToInteraction = (character) => {
        navigate(`/interaction/${character}`);
    };

    return (
        <>
            <MainPageContainer>
                <Header />
                <CardsContainer>
                    {/* Frieren Card */}
                    <CardWrapper
                        isExpanded={expandedCard === 'frieren'}
                        isVisible={expandedCard === null || expandedCard === 'frieren'}
                        cardPosition="left"
                        onMouseEnter={() => handleExpand('frieren')}
                        onMouseLeave={() => handleExpand(null)}
                    >
                        <Card bgColor="#ffb6c1" isExpanded={expandedCard === 'frieren'}>
                            <CardLayout isExpanded={expandedCard === 'frieren'}>
                                <CardInfo isExpanded={expandedCard === 'frieren'}>
                                    <CustomTooltip text="Click to interact with Frieren">
                                        <CardImage 
                                            src={FrierenHome} 
                                            alt="FRIEREN" 
                                            onClick={() => handleNavigateToInteraction('Frieren')}
                                        />
                                    </CustomTooltip>
                                    <CardTitle>FRIEREN</CardTitle>
                                    <CardDescription>The mage who lives 1000 years</CardDescription>
                                    <ChatButton 
                                        buttonColor="#ffb6c1" 
                                        hoverColor="#e18ee0" 
                                        onClick={() => handleNavigateToChat('Frieren')}
                                    >
                                        Let's chat!
                                    </ChatButton>
                                </CardInfo>
                                <CardContent isExpanded={expandedCard === 'frieren'}>
                                    <FrierenGreeting isExpanded={expandedCard === 'frieren'} />
                                </CardContent>
                            </CardLayout>
                        </Card>
                    </CardWrapper>

                    {/* Boogie Card */}
                    <CardWrapper
                        isExpanded={expandedCard === 'boogie'}
                        isVisible={expandedCard === null || expandedCard === 'boogie'}
                        cardPosition="center"
                        onMouseEnter={() => handleExpand('boogie')}
                        onMouseLeave={() => handleExpand(null)}
                    >
                        <Card bgColor="#8f9dff" isExpanded={expandedCard === 'boogie'}>
                            <CardLayout isExpanded={expandedCard === 'boogie'}>
                                <CardInfo isExpanded={expandedCard === 'boogie'}>
                                    <CustomTooltip text="Click to interact with Boogie">
                                        <CardImage 
                                            src={Tuttle} 
                                            alt="BOOGIE" 
                                            onClick={() => handleNavigateToInteraction('Boogie')}
                                        />
                                    </CustomTooltip>
                                    <CardTitle>BOOGIE</CardTitle>
                                    <CardDescription>lovely turtle who lives in our hansung</CardDescription>
                                    <ChatButton 
                                        buttonColor="#8f9dff" 
                                        hoverColor="#7e8bd1" 
                                        onClick={() => handleNavigateToChat('Boogie')}
                                    >
                                        Let's chat!
                                    </ChatButton>
                                </CardInfo>
                                <CardContent isExpanded={expandedCard === 'boogie'}>
                                    <BoogieGreeting isExpanded={expandedCard === 'boogie'} />
                                </CardContent>
                            </CardLayout>
                        </Card>
                    </CardWrapper>

                    {/* Baek Jong-won Card */}
                    <CardWrapper
                        isExpanded={expandedCard === 'baek'}
                        isVisible={expandedCard === null || expandedCard === 'baek'}
                        cardPosition="right"
                        onMouseEnter={() => handleExpand('baek')}
                        onMouseLeave={() => handleExpand(null)}
                    >
                        <Card bgColor="#a9a9a9" isExpanded={expandedCard === 'baek'}>
                            <CardLayout isExpanded={expandedCard === 'baek'}>
                                <CardInfo isExpanded={expandedCard === 'baek'}>
                                    <CustomTooltip text="Click to interact with Baek Jong-won">
                                        <CardImage 
                                            src={BaekHome} 
                                            alt="JONGWON BAEK" 
                                            onClick={() => handleNavigateToInteraction('JongwonBaek')}
                                        />
                                    </CustomTooltip>
                                    <CardTitle>JONGWON BAEK</CardTitle>
                                    <CardDescription>Korean sweet Gordon Ramsay</CardDescription>
                                    <ChatButton 
                                        buttonColor="#a9a9a9" 
                                        hoverColor="#b0b0b0" 
                                        onClick={() => handleNavigateToChat('JongwonBaek')}
                                    >
                                        Let's chat!
                                    </ChatButton>
                                </CardInfo>
                                <CardContent isExpanded={expandedCard === 'baek'}>
                                    <BaekGreeting isExpanded={expandedCard === 'baek'} />
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
