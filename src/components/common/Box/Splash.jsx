import React from "react";
import styled, { keyframes } from "styled-components";

// 로딩 애니메이션
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.chatBubbleColor || "#FFFFFF"};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid ${(props) => props.textColor || "#ccc"};
  border-top: 6px solid ${(props) => props.spinnerColor || "#000"};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Splash = ({ chatBubbleColor, spinnerColor, textColor }) => {
    return (
        <SplashContainer chatBubbleColor={chatBubbleColor}>
            <Spinner spinnerColor={spinnerColor} textColor={textColor} />
        </SplashContainer>
    );
};

export default Splash;