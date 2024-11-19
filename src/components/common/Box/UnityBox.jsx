import React from "react";
import {
    ChatContainer,
    CloseButton,
    HomeButton,
    NavigationBar,
    Wrapper,
    InteractionButton
} from "./ChatBoxCss.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import FrierenLoader from "../../Unity/FrierenLoader.jsx";


export const UnityBox = ({ theme, onClose, name }) => {
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
                <FrierenLoader/>
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