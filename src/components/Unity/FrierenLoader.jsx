import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

// 부모 컨테이너 스타일
// Unity 부모 컨테이너 스타일
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme?.background || "#f0f0f0"}; // 배경색 설정
  overflow: hidden; // 초과 영역 숨기기
`;

// 로딩 메시지 스타일
const LoadingMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme?.text || "#fff"};
    text-align: center;
`;

// Unity 화면 스타일
const StyledUnity = styled(Unity)`
    width: 100%;
    height: 100%;
`;

export const FrierenLoader = ({ theme }) => {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.loader.js",
        dataUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.data",
        frameworkUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.framework.js",
        codeUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.wasm",
    });

    return (
        <Container theme={theme}>
            {/* 로딩 상태 표시 */}
            {!isLoaded && (
                <LoadingMessage theme={theme}>
                    <h2>Loading...</h2>
                    <p>{Math.round(loadingProgression * 100)}%</p>
                </LoadingMessage>
            )}
            {/* Unity WebGL 콘텐츠 */}
            <StyledUnity
                unityProvider={unityProvider}
                style={{ display: isLoaded ? "block" : "none" }}
            />
        </Container>
    );
};

export default FrierenLoader;