import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import characterImage from '../../../assets/images/characters/Turttle.png';
import useForm from '../../../hooks/useForm';
import { validateLogin } from '../../../utils/validate';
import { login } from '../../../utils/axios';

const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  
  align-items: center;
  background-color: #9198ff;
  color: white;
  padding: 0 3rem;
  padding-top: 8vh;
  overflow: hidden;
`;

const Subtitle = styled.p`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const CharacterImageContainer = styled.div`
  position: relative;
  width: 350px;        
  height: 70vh;
  background-color: white;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid #0011ff;
    border-radius: 40px;
  }
`;

const CharacterCard = styled.div`
  position: relative;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  background-color: #9198ff;
  border-radius: 35px;
  border: 3px solid #0011ff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: -200px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
  padding: 2rem;
`;

const LoginBox = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -5vh;
`;

const TitleContainer = styled.div`
  margin-bottom: 40px;
  text-align: left;
`;

const HelloText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StrangerText = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 320px;
  height: 70px;
  background: #E4E6FD;
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  margin-bottom: 20px;

  &::placeholder {
    color: #B0B0B0;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-left: 15px;
`;

const Button = styled.button`
  width: 158px;
  height: 52px;
  background-color: #8180c9;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5563E8;
  }
`;

const CreateAccount = styled.p`
  color: #8180c9;
  cursor: pointer;
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
`;

const CheckIcon = styled.div`
  margin-left: 8px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 12px;
    height: 12px;
    fill: #6B78FF;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: -15px;
  margin-bottom: 10px;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = { username: '', password: '' };
 
  const { values, errors, handleChange, handleSubmit: handleSubmitForm } = useForm(
    initialValues,
    validateLogin
  );
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await login(values.username, values.password);
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', values.username);
        navigate('/main');
      } catch (error) {
        console.error('Login error:', error);
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    }
  };
 
  const handleSignup = () => {
    navigate('/signup');
  };
 
  return (
    <LoginPageContainer>
      <LeftSection>
        <Subtitle>Interact, Imagine, Inspire.</Subtitle>
        <CharacterImageContainer>
          <CharacterCard>
            <CharacterImage src={characterImage} alt="Character" />
          </CharacterCard>
        </CharacterImageContainer>
      </LeftSection>
      <RightSection>
        <LoginBox>
          <TitleContainer>
            <HelloText>HELLO,</HelloText>
            <StrangerText>STRANGER</StrangerText>
          </TitleContainer>
          <Input
            type="text"
            name="username"
            placeholder="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
          <Input
            type="password"
            name="password"
            placeholder="password" 
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          <ButtonContainer>
            <Button onClick={handleSubmit}>
              LOG IN
              <CheckIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </CheckIcon>
            </Button>
            <CreateAccount onClick={handleSignup}>CREATE ACCOUNT</CreateAccount>
          </ButtonContainer>
        </LoginBox>
      </RightSection>
    </LoginPageContainer>
  );
};

export default LoginPage;