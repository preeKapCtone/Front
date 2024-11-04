import React from 'react';
import styled from 'styled-components';

const SignupPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9198ff;
`;

const SignupText = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

const SignupPage = () => {
  return (
    <SignupPageContainer>
      <SignupText>회원가입 페이지</SignupText>
    </SignupPageContainer>
  );
};

export default SignupPage;