import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UnityBox from "../../components/common/Box/UnityBox.jsx";

const themeData = {
    Boogie: {
        name: "Boogie",
        backgroundColor: "#E0E2FF",
        textColor: "#333",
        buttonColor: "#6c63ff",
        chatBubbleColor: "#9198FF",
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

const characterColors = {
    Frieren: "#FFF5FD",
    Boogie: "#E0E2FF",
    JongwonBaek: "#DDDDDD",
    default: "#FFFFFF", // 기본 배경색
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 98vh; /* 전체 뷰 높이를 차지 */
  background-color: ${(props) => props.bgColor || "#FFFFFF"}; /* 동적 배경색 */
  box-sizing: border-box; /* 패딩 포함한 정렬 */
`;

const UnityPage = () => {
    const { character } = useParams();
    const navigate = useNavigate();

    const theme = themeData[character];
    const bgColor = characterColors[character] || characterColors.default;

    return (
        <PageContainer bgColor={bgColor}>
            <UnityBox
                theme={theme}
                onClose={() => navigate("/")}
                name={character}
            />
        </PageContainer>
    );
};

export default UnityPage;