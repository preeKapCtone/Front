import React from "react";
import {
    ChatContainer,
    ChatContent,
    CloseButton,
    HomeButton,
    NavigationBar,
    Wrapper,
    Header,
    InteractionButton
} from "./UnityBoxCss.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Unity, { UnityContext } from "react-unity-webgl";


export const UnityBox = ({ theme, onClose, name }) => {

    const unityContext = new UnityContext({
        loaderUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.loader.js",
        dataUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.data",
        frameworkUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.framework.js",
        codeUrl: "/importInteraction/buildForfrieren/Build/buildForfrieren.wasm",
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
                    unityContext={unityContext}
                    style={{ width: "1500px", height: "800px", border: "2px solid black" }}
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