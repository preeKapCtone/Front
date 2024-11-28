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

export const BaekGreeting = ({ isExpanded }) => {
  if (!isExpanded) return null;
  
  return (
    <ChatContainer>
      <Description>
      "더본코리아의 대표" 백종원 선생님은 여러분께 다양한 레시피를 제공하며 요리에 대한 자신감을 줍니다.
      </Description>
      
      <ChatSection>
        {/* 사용자의 첫 인사 */}
        <MessageContainer>
          <MessageBubble isUser>
            <Message isUser>
              백종원 선생님! 맛있는 김치찌개를 만드는데 꿀팁이 있나요?
            </Message>
            <MessageTime isUser>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 백종원의 첫 응답 */}
        <MessageContainer>
          <MessageBubble>
            <Message>
            물론이쥬. 김치찌개는 맛있는 김치와 좋은 고기가 반은 먹고 들어가는 메뉴예요. 하지만 가장 중요한 건 고춧가루와 고추장의 비율이에유. 고춧가루는 매운맛을, 고추장은 감칠맛을 내주는데, 이 둘을 잘 섞어줘야 균형 잡힌 맛이 나유.
            </Message>
            <MessageTime>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 사용자의 두 번째 질문 */}
        <MessageContainer>
          <MessageBubble isUser>
            <Message isUser>
              그러면 김치찌개에 마요네즈를 넣어도 되나요?
            </Message>
            <MessageTime isUser>오후 3:23</MessageTime>
          </MessageBubble>
        </MessageContainer>

        {/* 백종원의 두 번째 응답 */}
        <MessageContainer>
          <MessageBubble>
            <Message>
            엥? 마요네즈유? 김치찌개랑 마요네즈는 궁합이 안 맞쥬. 섞으면 맛이 이상해져유.
            </Message>
            <MessageTime>오후 3:24</MessageTime>
          </MessageBubble>
        </MessageContainer>
      </ChatSection>
    </ChatContainer>
  );
};

export default BaekGreeting;
