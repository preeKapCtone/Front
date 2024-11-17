import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.chatBubbleColor};
  border: 2px solid white; /* 흰색 테두리 */
  border-radius: 20px; /* 둥근 모서리 */
  padding: 10px;
  width: 100%;
  height: 50px; /* 높이 설정 */
  position: relative; /* 아이콘 배치 조정 */
`;

const InputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};
  padding: 0 10px;
`;

const SendButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
    fill: ${(props) => props.theme.buttonColor}; /* 화살표 색상 */
  }

  position: absolute;
  right: 10px; /* 오른쪽에 배치 */
`;

const InputSection = ({ theme, onSend }) => {
    return (
        <InputWrapper theme={theme}>
            <InputField placeholder="Type your message..." />
            <SendButton theme={theme} onClick={onSend}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
                </svg>
            </SendButton>
        </InputWrapper>
    );
};

export default InputSection;