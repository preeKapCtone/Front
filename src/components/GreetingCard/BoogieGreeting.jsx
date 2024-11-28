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

export const BoogieGreeting = ({ isExpanded }) => {
  if (!isExpanded) return null;
  
  return (
    <ChatContainer>
      <Description>
      "한성대학교"의 마스코트인 상상부기는, 학우들한테 긍정적인 기운을 주는 친구입니다. 학교에 대해 모든걸 물어보세요 !
      </Description>
      
      <ChatSection>
        {/* 사용자의 첫 인사 */}
        <MessageContainer>
          <MessageBubble isUser>
            <Message isUser>
              부기야 안녕! 오늘은 어때?
            </Message>
            <MessageTime isUser>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 부기의 첫 응답 */}
        <MessageContainer>
          <MessageBubble>
            <Message>
              안녕~ 오늘은... 하늘이 조금 흐리지만, 그 구름 사이로 보이는 햇살이 참 따스해 보여. 구름이 솜사탕 같아서 기분이 좋아지는 것 같아. 너는 어때?
            </Message>
            <MessageTime>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 사용자의 두 번째 질문 */}
        <MessageContainer>
          <MessageBubble isUser>
            <Message isUser>
            부기야 넌 참 친절하고 좋은거같아
            </Message>
            <MessageTime isUser>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 부기의 두 번째 응답 */}
        <MessageContainer>
          <MessageBubble>
            <Message>
            헤헤, 고마워~ 너도 정말 좋은 친구야. 같이 있으면 마음이 편안해지는 그런 친구 말이야. 혹시… 바람에 빛나는 무지개 본 적 있어? 그런 걸 보면 같이 이야기하고 싶어지거든. 😊
            </Message>
            <MessageTime>오후 3:24</MessageTime>
          </MessageBubble>
        </MessageContainer>
      </ChatSection>
    </ChatContainer>
  );
};

export default BoogieGreeting;