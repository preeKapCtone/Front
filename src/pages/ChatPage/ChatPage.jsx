import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatBox from "../../components/common/Box/ChatBox.jsx";
import { characterColors, themeData } from "../../components/common/Box/theme.jsx";
import styled from "styled-components";
import axios from "axios";

const PageContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 100vh; /* 전체 뷰 높이를 차지 */
  background-color: ${(props) => props.bgColor || "#FFFFFF"}; /* 동적 배경색 */
  box-sizing: border-box; /* 패딩 포함한 정렬 */
`;

const ChatPage = () => {
    const { character } = useParams();
    const navigate = useNavigate();

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const theme = themeData[character] || themeData.default; // 기본 테마 설정
    const bgColor = characterColors[character] || characterColors.default; // 기본 배경색 설정

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchMessages = async () => {
            console.log("check : ", character, token);
            try {
                const response = await axios.get(`http://localhost:8080/api/posts?title=${character}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const apiMessages = response.data;

                // 메시지 형식 변환
                const transformedMessages = apiMessages.map((msg) => ({
                    isUser: msg.postId % 2 === 1, // 홀수는 유저 메시지
                    authorNickname: msg.postId % 2 === 1 ? "You" : character,
                    body: msg.body,
                }));

                setMessages(transformedMessages);
            } catch (err) {
                console.error("Failed to fetch character data.", err);
                setError("메시지를 가져오는 데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [character]);

    console.log(messages);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!theme) {
        return <div>존재하지 않는 캐릭터입니다.</div>;
    }

    return (
        <PageContainer bgColor={bgColor}>
            <ChatBox
                theme={theme}
                initialMessages={messages}
                onClose={() => navigate("/main")}
                name={character}
            />
        </PageContainer>
    );
};

export default ChatPage;