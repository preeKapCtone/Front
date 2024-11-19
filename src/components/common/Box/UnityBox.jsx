import React from "react";
import {
    ChatContainer,
    CloseButton,
    HomeButton,
    NavigationBar,
    Wrapper,
    Header,
    InteractionButton
} from "./BoxCss.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {Unity, useUnityContext} from "react-unity-webgl";


export const UnityBox = ({ theme, onClose, name }) => {

    const { unityProvider } = useUnityContext({
        loaderUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.loader.js", // Loader 파일 경로
        dataUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.data",       // Data 파일 경로
        frameworkUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.framework.js", // Framework 파일 경로
        codeUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.wasm",       // WebAssembly 파일 경로
    });


    return (
        <Wrapper theme={theme}>
            {/* 바깥에 전체를 감싸는 컴포넌트 */}
            <NavigationBar theme={theme}>
                <HomeButton theme={theme} onClick={onClose}>
                    <FontAwesomeIcon icon={faHome} />
                </HomeButton>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <InteractionButton theme={theme} onClick={() => navigate(`/chat/${name}`)}>
                        채팅
                    </InteractionButton>
                    <CloseButton theme={theme} onClick={onClose}>
                        X
                    </CloseButton>
                </div>
            </NavigationBar>
            {/* ChatContainer가 들어가는 영역 */}
            <ChatContainer theme={theme}>
                <Header theme={theme}>{`HELLO, ${theme.name.toUpperCase()}`}
                </Header>
                <Unity
                    unityProvider={unityProvider}
                    style={{ width: "100%", height: "100vh", border: "2px solid black" }}
                />
            </ChatContainer>
            <NavigationBar theme={theme}>
                <HomeButton theme={theme} onClick={onClose}>
                    &#8592;
                </HomeButton>
            </NavigationBar>
        </Wrapper>
    );
};

export default UnityBox;