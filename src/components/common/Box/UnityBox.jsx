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
import {useNavigate} from "react-router-dom";
import FrierenLoader from "../../Unity/FrierenLoader.jsx";
import BoogieLoader from "../../Unity/BoogieLoader.jsx";
import BaekLoader from "../../Unity/BaekLoader.jsx";


export const UnityBox = ({ theme, onClose, name }) => {
    const navigate = useNavigate();

    const renderLoader = () => {
        switch (name) {
            case "Frieren":
                return <FrierenLoader />;
            case "Boogie":
                return <BoogieLoader />;
            case "JongwonBaek":
                return <BaekLoader />;
            default:
                return <div>Loader를 찾을 수 없습니다.</div>;
        }
    };

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
                {renderLoader()}
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