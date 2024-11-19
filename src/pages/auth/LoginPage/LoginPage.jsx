import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import characterImage from '../../../assets/images/characters/Turttle.png';
import useForm from '../../../hooks/useForm';
import { validateLogin } from '../../../utils/validate'; 


// 전체 페이지를 감싸는 컨테이너
const LoginPageContainer = styled.div`
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
 padding-top: 14rem;  // 상단 여백 증가
`;

// 슬로건 텍스트 스타일
const Subtitle = styled.p`
 font-size: 3rem;
 text-align: center;
 margin-bottom: 3rem;  // 여백 더 증가
 font-weight: bold;
`;

// 캐릭터 이미지를 감싸는 가장 바깥쪽 컨테이너
const CharacterImageContainer = styled.div`
 position: relative;
 width: 350px;        
 height: 650px;       // 높이 증가
 background-color: white;
 border-radius: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 2rem;    // 상단 여백 추가

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
  width: calc(100% - 30px);  // 여백 조정
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
  width: 100%;          // 이미지 크기 조정
  height: 100%;
  object-fit: contain;
  margin-bottom: -200px;  // 위치 약간 조정
`;

// 오른쪽 섹션 - 로그인 폼이 있는 부분
const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

// 로그인 폼을 감싸는 컨테이너
const LoginBox = styled.div`
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

// 입력 필드 (id, password)
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

// 버튼과 링크를 감싸는 컨테이너
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-left: 15px;
`;

// 로그인 버튼
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

// CREATE ACCOUNT 링크
const CreateAccount = styled.p`
  color: #8180c9;
  cursor: pointer;
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
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
const LoginPage = () => {
  const navigate = useNavigate();
  // id를 username으로 변경
  const initialValues = { username: '', password: '' };
 
  const { values, errors, handleChange, handleSubmit: handleSubmitForm } = useForm(
    initialValues,
    validateLogin
  );
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(values);
    if (Object.keys(validationErrors).length === 0) {
      // admin/1234 체크도 username으로 수정
      if (values.username === 'admin' && values.password === '1234') {
        console.log('로그인 성공!');
        navigate('/main');
      } else {
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
            name="username" // id를 username으로 변경
            placeholder="username" // 플레이스홀더도 변경
            value={values.username} // value도 username으로 변경
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