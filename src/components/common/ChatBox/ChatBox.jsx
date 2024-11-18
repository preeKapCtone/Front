import React, {useEffect, useState} from "react";
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
    Message
} from "./ChatBoxCss.jsx";
import axios from "axios";


export const ChatBox = ({ theme, initialMessages, onClose, name }) => {
    const [message, setMessage] = useState(''); // 입력 상태
    const [messages, setMessages] = useState([]); // 화면에 표시될 메시지
    const [responses, setResponses] = useState([]); // 서버로 전송될 데이터
    const [selectedAssistantID, setSelectedAssistantID] = useState('');
    const [assistantName, setAssistantName] = useState(''); // 선택된 어시스턴트 이름
    const assistantOptions = [
        { id: "asst_VB5esFXsOGeJaQ4vTdlOyHVY", name: "Frieren" },
        { id: "asst_JRVxwfHwUlMHEywxHpSngRMz", name: "Boogie" },
        { id: "asst_JRVxwfHwUlMHEywxHpSngRMz", name: "JongwonBaek"}
    ];

    useEffect(() => {
        if (name) {
            const selectedAssistant = assistantOptions.find(option => option.name === name);
            if (selectedAssistant) {
                setSelectedAssistantID(selectedAssistant.id);
                setAssistantName(selectedAssistant.name);
            } else {
                console.error(`Assistant with name "${name}" not found.`);
            }
        }
    }, [name]);

    useEffect(() => {
        setMessages(initialMessages || []); // messages 값을 업데이트
    }, [initialMessages]);

    const sendMessage = async () => {
        if (message.trim() === '' || selectedAssistantID === '') return;

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

            setMessages([
                ...messages,
                { postId: messages.length + 1, title: assistantName, body: message, authorNickname: "You", isUser: true },
                { postId: messages.length + 2, title: assistantName, body: botResponse, authorNickname: assistantName, isUser: false }
            ]);

            setMessage('');  // 입력창 초기화

        } catch (error) {
            console.error("Error sending message:", error);
            alert("메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
    };

    return (
        <Wrapper theme={theme}>
            {/* 바깥에 전체를 감싸는 컴포넌트 */}
            <NavigationBar theme={theme}>
                <HomeButton theme={theme} onClick={onClose}>
                    &#8592; Home
                </HomeButton>
                <CloseButton theme={theme} onClick={onClose}>
                    X
                </CloseButton>
            </NavigationBar>
            {/* ChatContainer가 들어가는 영역 */}
            <ChatContainer theme={theme}>
                <Header theme={theme}>{`HELLO, ${theme.name.toUpperCase()}`}</Header>
                <ChatContent>
                    {messages.map((message, index) => (
                        <Message key={index} isUser={message.isUser}>
                            <div>
                                <strong>{message.authorNickname}: </strong>
                                {message.body}
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
        </Wrapper>
    );
};

export default ChatBox;