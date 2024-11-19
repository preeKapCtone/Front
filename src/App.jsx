import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import SignupPage from './pages/auth/SignupPage/SignupPage';
import MainPage from './pages/MainPage/MainPage';
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import UnityPage from "./pages/UnityPage/UnityPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/unity" element={<UnityPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;