import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatBox from "../../components/common/ChatBox/ChatBox";

const themeData = {
    Boogie: {
        name: "Boogie",
        backgroundColor: "#dcd6f7",
        textColor: "#333",
        buttonColor: "#6c63ff",
        chatBubbleColor: "#6c63ff",
    },
    Frieren: {
        name: "Frieren",
        backgroundColor: "#ffe5b4",
        textColor: "#5a3e36",
        buttonColor: "#ff8c42",
        chatBubbleColor: "#fff",
    },
    JongwonBaek: {
        name: "Jongwon",
        backgroundColor: "#cfcfcf",
        textColor: "#000",
        buttonColor: "#a0a0a0",
        chatBubbleColor: "#f5f5f5",
    },
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 100vh; /* 전체 뷰 높이를 차지 */
  background-color: #f0f0f0;
  box-sizing: border-box; /* 패딩 포함한 정렬 */
`;

const ChatPage = () => {
    const { character } = useParams();
    const navigate = useNavigate();


    // API 데이터 시뮬레이션
    const apiMessages = [
        { postId: 1, title: "Boogie", body: "부기는 거부기입니다.", authorNickname: "raymond" },
        { postId: 2, title: "Boogie", body: "안녕안녕 거부기부기?", authorNickname: "raymond" },
        { postId: 3, title: "Boogie", body: "학교 편의점에서 핫바랑 쫄병스낵 사먹었어.", authorNickname: "raymond" },
        { postId: 4, title: "Boogie", body: "오늘은 날씨가 좋네!", authorNickname: "raymond" },
    ];

    // 홀수는 유저, 짝수는 상대
    const messages = apiMessages.map((msg, index) => ({
        isUser: msg.postId % 2 === 1, // 홀수는 true (유저 메시지)
        authorNickname: msg.postId % 2 === 1 ? "You" : character,
        body: msg.body,
    }));

    const theme = themeData[character];

    if (!theme) {
        return <div>존재하지 않는 캐릭터입니다.</div>;
    }

    return (
        <PageContainer>
            <ChatBox
                theme={theme}
                messages={messages}
                onClose={() => navigate("/")}
            />
        </PageContainer>
    );
};

export default ChatPage;