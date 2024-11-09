export const validateLogin = (values) => {
  const errors = {};
  if (!values.id) {
    errors.id = '아이디를 입력해주세요.';
  }
  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.';
  }
  return errors;
};

export const validateSignup = (values) => {
  const errors = {};
  
  // 아이디 검증
  if (!values.id) {
    errors.id = '아이디를 입력해주세요.';
  } else if (values.id.length < 4) {
    errors.id = '아이디는 최소 4자 이상이어야 합니다.';
  }

  // 비밀번호 검증
  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{1,10}$/.test(values.password)) {
    errors.password = '비밀번호는 영문자, 숫자 혼합으로 10자 이내로 입력해주세요.';
  }

  // 닉네임 검증
  if (!values.nickname) {
    errors.nickname = '닉네임을 입력해주세요.';
  } else if (values.nickname.length < 1 || values.nickname.length > 12) {
    errors.nickname = '닉네임은 12자 내외로 입력해주세요.';
  }

  return errors;
};