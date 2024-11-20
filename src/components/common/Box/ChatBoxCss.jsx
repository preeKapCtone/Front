import styled from "styled-components";

// HEX -> RGB 변환 + 어둡게 처리 함수
function darkenRgb(hex, factor) {
    const rgb = hexToRgb(hex); // HEX를 RGB로 변환
    const [r, g, b] = rgb.split(",").map((value) => parseInt(value.trim(), 10)); // RGB 값 추출

    // RGB 값 계산: 각 값을 factor만큼 줄임
    const darken = (value) => Math.max(0, Math.min(255, Math.floor(value * (1 - factor))));
    const newR = darken(r);
    const newG = darken(g);
    const newB = darken(b);

    return `rgb(${newR}, ${newG}, ${newB})`;
}

// HEX -> RGB 변환 함수
function hexToRgb(hex) {
    const strippedHex = hex.replace("#", "");
    const bigint = parseInt(strippedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54%;
  height: 80%;
  background-color: ${(props) => props.theme.backgroundColor}; /* 전체 배경 색상 */
  padding: 20px;
  border-radius: 25px;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${(props) => props.theme.chatBubbleColor};
  border-radius: 15px;
  //box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  /* 스크롤바 완전히 숨기기 */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* NavigationBar도 채팅창과 같은 넓이 */
  margin: 10px 0;
`;

export const HomeButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
`;

export const InteractionButton = styled.button`
  background-color: ${(props) => props.theme.chatBubbleColor};
  border: none;
  color: ${(props) => props.theme.buttonText || "#FFF"};
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
            darkenRgb(props.theme.chatBubbleColor || "#FFF", 0.1)}; /* 10% 어둡게 */
  }

  &:active {
    background-color: ${(props) =>
            darkenRgb(props.theme.chatBubbleColor || "#FFF", 0.2)}; /* 20% 어둡게 */
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
`;

export const Header = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

export const ChatContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Message = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  margin: 10px 0;

  & > div {
    max-width: 70%;
    //background-color: ${(props) => (props.isUser ? "#e0e0e0" : "#fff")};
    color: ${(props) => (props.isUser ? "#000" : "#333")};
    padding: 10px;
    border-radius: 10px;
    //box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 0.9rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.chatBubbleColor};
`;