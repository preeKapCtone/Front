import React from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  height: 100%;
`;

const Description = styled.p`
  color: #2c2c2c;
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 16px;
  margin: -18px 0 12px 0;
  background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85));
  border-radius: 12px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2);
  font-weight: 600;
`;

const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 6px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MessageBubble = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  ${props => props.isUser && 'flex-direction: row-reverse;'}
`;

const Message = styled.div`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: ${props => props.isUser ? '20px 20px 0 20px' : '20px 20px 20px 0'};
  background-color: ${props => props.isUser ? '#FFE357' : '#ffffff'};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: #000000;
  font-size: 0.9rem;
  line-height: 1.4;
  word-break: break-word;
`;

const MessageTime = styled.span`
  font-size: 0.75rem;
  color: #666666;
  margin: ${props => props.isUser ? '0 8px 0 0' : '0 0 0 8px'};
`;

const Translation = styled.span`
  display: block;
  margin-top: 4px;
  color: #666666;
  font-size: 0.85rem;
`;

export const FrierenGreeting = ({ isExpanded }) => {
  if (!isExpanded) return null;
  
  return (
    <ChatContainer>
      <Description>
        "장송의 프리렌"의 주인공인 프리렌은, 1000년산 위대한 마법사입니다. 
        그녀에게 마법과 "장송의 프리렌" 설정에 대해 물어보세요.
      </Description>
      
      <ChatSection>
        {/* 사용자의 첫 인사 */}
        <MessageContainer>
          <MessageBubble isUser>
            <Message isUser>
              안녕? 프리렌
            </Message>
            <MessageTime isUser>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 프리렌의 첫 응답 */}
        <MessageContainer>
          <MessageBubble>
            <Message>
            こんにちは。元気だよ。あなたはどうしてるの？
              <Translation>
                (안녕? 난 잘 지내고 있어. 너는 어때?)
              </Translation>
            </Message>
            <MessageTime>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 사용자의 두 번째 질문 */}
        <MessageContainer>
          <MessageBubble isUser>
            <Message isUser>
              힘멜이라면 그렇게 했을까?
            </Message>
            <MessageTime isUser>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 프리렌의 두 번째 응답 */}
        <MessageContainer>
          <MessageBubble>
            <Message>
            そうだね、ヒンメルならきっとそうしただろうね。​
              <Translation>
                (그래, 힘멜이라면 그렇게 했을 거야.)
              </Translation>
            </Message>
            <MessageTime>오후 3:24</MessageTime>
          </MessageBubble>
        </MessageContainer>
      </ChatSection>
    </ChatContainer>
  );
};

export default FrierenGreeting;

