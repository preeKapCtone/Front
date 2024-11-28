import React, {useEffect, useRef, useState} from "react";
import InputSection from "./InputSection.jsx";
import {
    ChatContainer,
    ChatContent,
    CloseButton,
    HomeButton,
    NavigationBar,
    Wrapper,
    Header,
    Footer,
    Message,
    InteractionButton
} from "./ChatBoxCss.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {usePost} from "../../../hooks/usePost.js";

// 캐릭터 이미지 import
import Tuttle from "../../../assets/images/characters/Turttle.png";
import Frieren from "../../../assets/images/characters/Frieren.png";
import Baek from "../../../assets/images/characters/Baek.png";

// Frieren의 감정 이미지들
import FrierenHappy1 from '../../../assets/images/characters/emotions/Frieren_happy1.gif';
import FrierenHappy2 from '../../../assets/images/characters/emotions/Frieren_happy2.gif';
import FrierenHappy3 from '../../../assets/images/characters/emotions/Frieren_happy3.gif';
import FrierenAngry1 from '../../../assets/images/characters/emotions/Frieren_angry1.gif';
import FrierenAngry2 from '../../../assets/images/characters/emotions/Frieren_angry2.gif';
import FrierenAngry3 from '../../../assets/images/characters/emotions/Frieren_angry3.gif';
import FrierenNeutral1 from '../../../assets/images/characters/emotions/Frieren_neutral1.gif';
import FrierenNeutral2 from '../../../assets/images/characters/emotions/Frieren_neutral2.gif';
import FrierenNeutral3 from '../../../assets/images/characters/emotions/Frieren_neutral3.gif';

// Boogie의 감정 이미지들
import BoogieHappy1 from '../../../assets/images/characters/emotions/Boogie_happy1.gif';
import BoogieHappy2 from '../../../assets/images/characters/emotions/Boogie_happy2.gif';
import BoogieHappy3 from '../../../assets/images/characters/emotions/Boogie_happy3.gif';
import BoogieAngry1 from '../../../assets/images/characters/emotions/Boogie_angry1.gif';
import BoogieAngry2 from '../../../assets/images/characters/emotions/Boogie_angry2.gif';
import BoogieAngry3 from '../../../assets/images/characters/emotions/Boogie_angry3.gif';
import BoogieNeutral1 from '../../../assets/images/characters/emotions/Boogie_neutral1.gif';
import BoogieNeutral2 from '../../../assets/images/characters/emotions/Boogie_neutral2.gif';
import BoogieNeutral3 from '../../../assets/images/characters/emotions/Boogie_neutral3.gif';

// JongwonBaek의 감정 이미지들
import BaekHappy1 from '../../../assets/images/characters/emotions/JongwonBaek_happy1.gif';
import BaekHappy2 from '../../../assets/images/characters/emotions/JongwonBaek_happy2.gif';
import BaekHappy3 from '../../../assets/images/characters/emotions/JongwonBaek_happy3.gif';
import BaekAngry1 from '../../../assets/images/characters/emotions/JongwonBaek_angry1.gif';
import BaekAngry2 from '../../../assets/images/characters/emotions/JongwonBaek_angry2.gif';
import BaekAngry3 from '../../../assets/images/characters/emotions/JongwonBaek_angry3.gif';
import BaekNeutral1 from '../../../assets/images/characters/emotions/JongwonBaek_neutral1.gif';
import BaekNeutral2 from '../../../assets/images/characters/emotions/JongwonBaek_neutral2.gif';
import BaekNeutral3 from '../../../assets/images/characters/emotions/JongwonBaek_neutral3.gif';

// 프로필 이미지들 import
import profile1 from '../../../assets/images/profileimage/pro1.png';
import profile2 from '../../../assets/images/profileimage/pro2.png';
import profile3 from '../../../assets/images/profileimage/pro3.png';
import profile4 from '../../../assets/images/profileimage/pro4.png';
import profile5 from '../../../assets/images/profileimage/pro5.png';
import profile6 from '../../../assets/images/profileimage/pro6.png';
import profile7 from '../../../assets/images/profileimage/pro7.png';
import profile8 from '../../../assets/images/profileimage/pro8.png';
import profile9 from '../../../assets/images/profileimage/pro9.png';
import profile10 from '../../../assets/images/profileimage/pro10.png';
import profile11 from '../../../assets/images/profileimage/pro11.png';
import profile12 from '../../../assets/images/profileimage/pro12.png';
import profile13 from '../../../assets/images/profileimage/pro13.png';
import profile14 from '../../../assets/images/profileimage/pro14.png';
import profile15 from '../../../assets/images/profileimage/pro15.png';
import profile16 from '../../../assets/images/profileimage/pro16.png';

const profileImages = [
    { id: '1', path: profile1 },
    { id: '2', path: profile2 },
    { id: '3', path: profile3 },
    { id: '4', path: profile4 },
    { id: '5', path: profile5 },
    { id: '6', path: profile6 },
    { id: '7', path: profile7 },
    { id: '8', path: profile8 },
    { id: '9', path: profile9 },
    { id: '10', path: profile10 },
    { id: '11', path: profile11 },
    { id: '12', path: profile12 },
    { id: '13', path: profile13 },
    { id: '14', path: profile14 },
    { id: '15', path: profile15 },
    { id: '16', path: profile16 }
];

const emotionImages = {
    'Frieren': {
        긍정적: [FrierenHappy1, FrierenHappy2, FrierenHappy3],
        부정적: [FrierenAngry1, FrierenAngry2, FrierenAngry3],
        중립적: [FrierenNeutral1, FrierenNeutral2, FrierenNeutral3]
    },
    'Boogie': {
        긍정적: [BoogieHappy1, BoogieHappy2, BoogieHappy3],
        부정적: [BoogieAngry1, BoogieAngry2, BoogieAngry3],
        중립적: [BoogieNeutral1, BoogieNeutral2, BoogieNeutral3]
    },
    'JongwonBaek': {
        긍정적: [BaekHappy1, BaekHappy2, BaekHappy3],
        부정적: [BaekAngry1, BaekAngry2, BaekAngry3],
        중립적: [BaekNeutral1, BaekNeutral2, BaekNeutral3]
    }
};

export const ChatBox = ({ theme, initialMessages, onClose, name }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [responses, setResponses] = useState([]);
    const [selectedAssistantID, setSelectedAssistantID] = useState('');
    const [assistantName, setAssistantName] = useState('');
    const chatContentRef = useRef(null);
    const navigate = useNavigate();
    const userimage = localStorage.getItem('userimage');

    const assistantOptions = [
        { id: "asst_VB5esFXsOGeJaQ4vTdlOyHVY", name: "Frieren", image: Frieren },
        { id: "asst_JRVxwfHwUlMHEywxHpSngRMz", name: "Boogie", image: Tuttle },
        { id: "asst_5FfVKVREEoTvUmc09S0iAcnw", name: "JongwonBaek", image: Baek },
    ];

    const [imageSrc, setImageSrc] = useState(Frieren);

    const sendMessage = async () => {
        if (message.trim() === '' || selectedAssistantID === '') return;

        const randomNumber = Math.floor(Math.random() * 3) + 1;

        const userMessage = {
            postId: messages.length + 1,
            title: assistantName,
            body: message,
            authorNickname: "You",
            isUser: true,
            image: null,
        };
        setMessages([...messages, userMessage]);

        const typingMessage = {
            postId: messages.length + 2,
            title: assistantName,
            body: "상대방이 입력 중...",
            authorNickname: assistantName,
            isUser: false,
            image: null,
        };
        setMessages((prevMessages) => [...prevMessages, typingMessage]);

        setMessage('');

        try {
            const response = await axios.post(
                '/fastapi/posts',
                {
                    user_message: message,
                    assistant_id: selectedAssistantID
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            const botResponse = response.data.response;
            const botSentiment = response.data.sentiment;

            const sentimentMap = {
                긍정적: emotionImages[name]?.긍정적[randomNumber - 1],
                부정적: emotionImages[name]?.부정적[randomNumber - 1],
                중립적: emotionImages[name]?.중립적[randomNumber - 1],
            };

            setResponses([
                ...responses,
                { title: assistantName, body: message },
                { title: assistantName, body: botResponse }
            ]);

            setMessages((prevMessages) =>
                prevMessages.map((msg) =>
                    msg.postId === typingMessage.postId
                        ? {
                            ...msg,
                            body: botResponse,
                            image: sentimentMap[botSentiment],
                        }
                        : msg
                )
            );

            setMessage('');

        } catch (error) {
            console.error("Error sending message:", error);
            alert("메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
    };

    const handleExit = async () => {
        if (responses.length === 0) {
            return;
        }
        const token = localStorage.getItem('token');
        try {
            await usePost("/api/posts", responses, token);
            console.log("Chat history saved successfully.");
        } catch (error) {
            console.error("Error saving chat history:", error);
        }
    };

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue =
                "새로고침하면 대화 내용이 사라질 수 있습니다. 계속하시겠습니까?";
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [messages]);

    useEffect(() => {
        setMessages(initialMessages || []);
    }, [initialMessages]);

    useEffect(() => {
        console.log("responses : ", responses);
    }, [responses]);

    useEffect(() => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (name) {
            const selectedAssistant = assistantOptions.find((option) => option.name === name);
            if (selectedAssistant) {
                setSelectedAssistantID(selectedAssistant.id);
                setAssistantName(selectedAssistant.name);
                setImageSrc(selectedAssistant.image);
            } else {
                console.error(`Assistant with name "${name}" not found.`);
            }
        }
    }, [name]);

    return (
        <Wrapper theme={theme}>
            <NavigationBar theme={theme}>
                <HomeButton theme={theme} onClick={() => {
                    handleExit().then(() =>  onClose());}}>
                    <FontAwesomeIcon icon={faHome}/>
                </HomeButton>
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    <InteractionButton theme={theme} onClick={() => navigate(`/interaction/${name}`)}>
                        상호작용
                    </InteractionButton>
                    <CloseButton theme={theme} onClick={() => {
                        handleExit().then(() =>  onClose());
                    }}>
                        X
                    </CloseButton>
                </div>
            </NavigationBar>
            <ChatContainer theme={theme}>
                <Header theme={theme}>{`HELLO, ${theme.name.toUpperCase()}`}
                </Header>
                <ChatContent ref={chatContentRef}>
                {messages.map((message, index) => (
    <Message theme={theme} key={index} isUser={message.isUser}>
        <div
            style={{
                display: 'flex',
                justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                alignItems: 'start',
                margin: '10px 0',
            }}
        >
            {message.isUser && (
                <img
                    src={userimage && userimage !== '0'
                        ? profileImages[parseInt(userimage) - 1]?.path || profile16
                        : profile16}
                    alt="avatar"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        marginLeft: '10px',
                        border: '1px solid white'
                    }}
                />
            )}

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'start'
                }}>
                <div
                    style={{
                        backgroundColor: message.isUser ? theme.chatBubbleColor : '#ffffff',
                        padding: '10px 15px',
                        borderRadius: '10px',
                        maxWidth: '80%',
                        textAlign: 'left',
                        border: '1px solid white'
                    }}
                >
                    {message.body}
                </div>
                {message.image && (
                    <div style={{ textAlign: "center", margin: "10px 0" }}>
                        <img
                            src={message.image}
                            alt="emotion indicator"
                            style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "10px",
                            }}
                        />
                    </div>
                )}
            </div>

            {message.isUser && (
                <img
                    src={userimage && userimage !== '0'
                        ? profileImages[parseInt(userimage) - 1]?.path || profile16
                        : profile16}
                    alt="avatar"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        marginLeft: '10px',
                        border: '1px solid white'
                    }}
                />
            )}
        </div>
    </Message>
))}
                </ChatContent>
                <Footer>
                    <InputSection
                        theme={theme}
                        message={message}
                        setMessage={setMessage}
                        onSend={sendMessage}
                    />
                </Footer>
            </ChatContainer>
            <NavigationBar theme={theme}>
                <HomeButton theme={theme} onClick={() => {
                    handleExit().then(() =>  onClose());
                }}>
                    &#8592;
                </HomeButton>
            </NavigationBar>
        </Wrapper>
    );
};

export default ChatBox;