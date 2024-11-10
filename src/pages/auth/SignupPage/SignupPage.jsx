import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import characterImage from '../../../assets/images/characters/turttle.png';
import useForm from '../../../hooks/useForm';
import { validateSignup } from '../../../utils/validate';

// ErrorMessage 컴포넌트 추가
const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: -15px;
  margin-bottom: 10px;
`;

// 전체 페이지를 감싸는 컨테이너
const SignupPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// 왼쪽 섹션 - 캐릭터와 슬로건이 있는 부분
const LeftSection = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;  
 align-items: center;
 background-color: #9198ff;
 color: white;
 padding: 3rem;
 padding-top: 14rem;
`;

// 슬로건 텍스트 스타일
const Subtitle = styled.p`
 font-size: 3rem;
 text-align: center;
 margin-bottom: 3rem;
 font-weight: bold;
`;

// 캐릭터 이미지를 감싸는 가장 바깥쪽 컨테이너
const CharacterImageContainer = styled.div`
 position: relative;
 width: 350px;        
 height: 650px;
 background-color: white;
 border-radius: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 2rem;

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

// 실제 캐릭터가 들어가는 내부 컨테이너
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

// 캐릭터 이미지
const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: -200px;
`;

// 오른쪽 섹션 - 회원가입 폼이 있는 부분
const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

// 회원가입 폼을 감싸는 컨테이너
const SignupBox = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// 타이틀 "HELLO, STRANGER" 컨테이너
const TitleContainer = styled.div`
  margin-bottom: 40px;
  text-align: left;
`;

// HELLO, 텍스트
const HelloText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

// STRANGER 텍스트
const StrangerText = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

// 입력 필드 (id, password, nickname)
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

// 버튼을 감싸는 컨테이너
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// 회원가입 버튼
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
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5563E8;
  }
`;

// 체크 아이콘 컨테이너
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

// 메인 컴포넌트
const SignupPage = () => {
  const navigate = useNavigate();
  const initialValues = { id: '', password: '', nickname: '' };

  const { values, errors, handleChange, handleSubmit: handleSubmitForm } = useForm(
    initialValues,
    validateSignup
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleSubmitForm(e)) {
      console.log('회원가입 성공!');
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    }
  };


  return (
    <SignupPageContainer>
      <LeftSection>
        <Subtitle>Interact, Imagine, Inspire.</Subtitle>
        <CharacterImageContainer>
          <CharacterCard>
            <CharacterImage src={characterImage} alt="Character" />
          </CharacterCard>
        </CharacterImageContainer>
      </LeftSection>
      <RightSection>
        <SignupBox>
          <TitleContainer>
            <HelloText>HELLO,</HelloText>
            <StrangerText>STRANGER</StrangerText>
          </TitleContainer>
          <Input
            type="text"
            name="id"
            placeholder="id"
            value={values.id}
            onChange={handleChange}
          />
          {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          <Input
            type="text"
            name="nickname"
            placeholder="nickname"
            value={values.nickname}
            onChange={handleChange}
          />
          {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
          <ButtonContainer>
            <Button onClick={handleSubmit}>
              SIGN UP
              <CheckIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </CheckIcon>
            </Button>
          </ButtonContainer>
        </SignupBox>
      </RightSection>
    </SignupPageContainer>
  );
};

export default SignupPage;