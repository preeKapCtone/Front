import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import UnityBox from "../../components/common/Box/UnityBox.jsx";
import {characterColors, themeData} from "../../components/common/Box/theme.jsx";
import styled from "styled-components";

export const PageContainer = styled.div`
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

    const theme = themeData[character] || themeData.default; // 기본 테마 설정
    const bgColor = characterColors[character] || characterColors.default; // 기본 배경색 설정

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