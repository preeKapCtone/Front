import React from 'react';
import styled from 'styled-components';

const MainPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9198ff;
`;

const MainText = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <MainText>메인 페이지</MainText>
    </MainPageContainer>
  );
};

export default MainPage;