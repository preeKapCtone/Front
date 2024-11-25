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
    Message, InteractionButton
} from "./ChatBoxCss.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Tuttle from "../../../assets/images/characters/Turttle.png";
import Frieren from "../../../assets/images/characters/Frieren.png";
import Baek  from "../../../assets/images/characters/Baek.png";
import {usePost} from "../../../hooks/usePost.js";



export const ChatBox = ({ theme, initialMessages, onClose, name }) => {
    const [message, setMessage] = useState(''); // 입력 상태
    const [messages, setMessages] = useState([]); // 화면에 표시될 메시지
    const [responses, setResponses] = useState([]); // 서버로 전송될 데이터
    const [selectedAssistantID, setSelectedAssistantID] = useState('');
    const [assistantName, setAssistantName] = useState(''); // 선택된 어시스턴트 이름
    const chatContentRef = useRef(null);
    const navigate = useNavigate();

    const assistantOptions = [
        { id: "asst_VB5esFXsOGeJaQ4vTdlOyHVY", name: "Frieren", image: Frieren },
        { id: "asst_JRVxwfHwUlMHEywxHpSngRMz", name: "Boogie", image: Tuttle },
        { id: "asst_JRVxwfHwUlMHEywxHpSngRMz", name: "JongwonBaek", image: Baek },
    ];

    const [imageSrc, setImageSrc] = useState(Frieren); // 현재 캐릭터 이미지

    useEffect(() => {
        if (name) {
            const selectedAssistant = assistantOptions.find((option) => option.name === name);
            if (selectedAssistant) {
                setSelectedAssistantID(selectedAssistant.id);
                setAssistantName(selectedAssistant.name);
                setImageSrc(selectedAssistant.image); // 캐릭터 이미지 설정
            } else {
                console.error(`Assistant with name "${name}" not found.`);
            }
        }
    }, [name]);

    const sendMessage = async () => {
        if (message.trim() === '' || selectedAssistantID === '') return;

        // 사용자의 메시지를 먼저 추가
        const userMessage = {
            postId: messages.length + 1,
            title: assistantName,
            body: message,
            authorNickname: "You",
            isUser: true,
        };
        setMessages([...messages, userMessage]);

        // 상대방이 입력 중 상태 추가
        const typingMessage = {
            postId: messages.length + 2,
            title: assistantName,
            body: "상대방이 입력 중...",
            authorNickname: assistantName,
            isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, typingMessage]);

        setMessage('');

        try {
            // 서버에 메시지 전송
            const response = await axios.post(
                'http://127.0.0.1:8000/api/posts',
                {
                    user_message: message,
                    assistant_id: selectedAssistantID
                }, {
                    headers: {
                        // 필요한 최소 헤더만 포함
                        'Content-Type': 'application/json',
                    }
                }
            );

            // 응답 메시지와 감정 상태
            const botResponse = response.data.response;
            const botSentiment = response.data.sentiment; // 감정 상태

            // 대화 기록 업데이트
            setResponses([
                ...responses,
                { title: assistantName, body: message }, // 유저 메시지
                { title: assistantName, body: botResponse } // 봇 응답
            ]);

            console.log(botSentiment);

            setMessages((prevMessages) =>
                prevMessages.map((msg) =>
                    msg.postId === typingMessage.postId
                        ? { ...msg, body: botResponse } // "입력 중" 메시지를 실제 응답으로 교체
                        : msg
                )
            );

            setMessage('');  // 입력창 초기화

        } catch (error) {
            console.error("Error sending message:", error);
            alert("메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
    };

    // 화면을 벗어날 때 호출될 함수
    const handleExit = async () => {
        if (responses == []) {
            return;
        }
        const token = localStorage.getItem('token');
        try {
            await usePost("api/posts", responses, token);
            // API 호출
            console.log("Chat history saved successfully.");
        } catch (error) {
            console.error("Error saving chat history:", error);
        }
    };

    // 새로고침 방지 및 경고 메시지 표시
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
        setMessages(initialMessages || []); // messages 값을 업데이트
    }, [initialMessages]);

    useEffect(() => {
        console.log("responses : ", responses);
    }, [responses]);

    useEffect(() => {
        // 새 메시지가 추가될 때 스크롤을 맨 아래로 이동
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <Wrapper theme={theme}>
            {/* 바깥에 전체를 감싸는 컴포넌트 */}
            <NavigationBar theme={theme}>
                <HomeButton theme={theme} onClick={() => {
                    handleExit().then(r =>  onClose());}}>
                    <FontAwesomeIcon icon={faHome}/>
                </HomeButton>
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    <InteractionButton theme={theme} onClick={() => navigate(`/interaction/${name}`)}>
                        상호작용
                    </InteractionButton>
                    <CloseButton theme={theme} onClick={() => {
                        handleExit().then(r =>  onClose());
                    }}>
                        X
                    </CloseButton>
                </div>
            </NavigationBar>
            {/* ChatContainer가 들어가는 영역 */}
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
                                    alignItems: 'center',
                                    margin: '10px 0',
                                }}
                            >
                                {/* 상대방 메시지: 이미지 왼쪽 */}
                                {!message.isUser && (
                                    <img
                                        src={imageSrc} // 상상부기 이미지
                                        alt="avatar"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%', // 원형 이미지
                                            marginRight: '10px', // 박스와 이미지 간격
                                            border: '1px solid white'
                                        }}
                                    />
                                )}

                                {/* 메시지 텍스트 */}
                                <div
                                    style={{
                                        backgroundColor: message.isUser ? theme.chatBubbleColor : '#ffffff',
                                        padding: '10px 15px',
                                        borderRadius: '10px',
                                        maxWidth: '70%',
                                        textAlign: 'left',
                                        border: '1px solid white'
                                    }}
                                >
                                    {message.body}
                                </div>

                                {/* 유저 메시지: 이미지 오른쪽 */}
                                {message.isUser && (
                                    <img
                                        src={Frieren} // 유저 이미지 또는 다른 기본 이미지
                                        alt="avatar"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%', // 원형 이미지
                                            marginLeft: '10px', // 박스와 이미지 간격
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
                    handleExit().then(r =>  onClose());
                }}>
                    &#8592;
                </HomeButton>
            </NavigationBar>
        </Wrapper>
    );
};

export default ChatBox;