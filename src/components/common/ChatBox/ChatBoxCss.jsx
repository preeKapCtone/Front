import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 80%;
  background-color: ${(props) => props.theme.backgroundColor}; /* 전체 배경 색상 */
  padding: 20px;
  border-radius: 25px;
`;

export const ChatContainer = styled.div`
  width: 700px;
  height: 600px;
  background-color: ${(props) => props.theme.chatBubbleColor};
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px; /* NavigationBar도 채팅창과 같은 넓이 */
  margin-bottom: 10px; /* NavigationBar와 ChatContainer 사이 여백 */
`;

export const HomeButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
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
    background-color: ${(props) => (props.isUser ? "#e0e0e0" : "#fff")};
    color: ${(props) => (props.isUser ? "#000" : "#333")};
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 0.9rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.chatBubbleColor};
`;