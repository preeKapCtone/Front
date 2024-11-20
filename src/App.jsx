import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import SignupPage from './pages/auth/SignupPage/SignupPage';
import MainPage from './pages/MainPage/MainPage';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import UnityPage from "./pages/UnityPage/UnityPage.jsx";
import LogoutPage from './pages/LogoutPage/LogoutPage';
import GlobalStyles from "./styles/globalStyles.js";

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        {/* 기본 경로를 로그인 페이지로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/chat/:character" element={<ChatPage />} />
        <Route path="/interaction/:character" element={<UnityPage />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </>
  );
};

export default App;