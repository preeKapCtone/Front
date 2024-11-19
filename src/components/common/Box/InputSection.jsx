import React from "react";
import styled from "styled-components";

export const InputWrapper = styled.div`
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

export const InputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};
  padding: 0 10px;
`;

export const SendButton = styled.button`
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
    fill: ${(props) => props.theme.chatBubbleColor}; /* 화살표 색상 */
  }

  position: absolute;
  right: 10px; /* 오른쪽에 배치 */
`;

export const InputSection = ({ theme, message, setMessage, onSend }) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSend(); // Enter 키를 눌렀을 때 메시지 전송
        }
    };

    return (
        <InputWrapper theme={theme}>
            <InputField
                value={message} // message 상태와 동기화
                onChange={(e) => setMessage(e.target.value)} // 입력값을 message로 업데이트
                placeholder="Type your message..."
                onKeyPress={handleKeyPress} // Enter 키 이벤트 처리
            />
            <SendButton theme={theme} onClick={onSend}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
                </svg>
            </SendButton>
        </InputWrapper>
    );
};

export default InputSection;