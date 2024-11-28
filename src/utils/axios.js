import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = async (username, password) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    
    const response = await instance.post('/api/login', formData);
    
    // 로그인 응답에서 받은 모든 정보를 저장
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('nickname', response.data.nickname);
    localStorage.setItem('userimage', response.data.userimage);
    
    return response.data;
  } catch (error) {
    throw new Error('아이디 또는 비밀번호가 올바르지 않습니다.');
  }
};

// 나머지 코드는 동일하게 유지
export const signup = async (username, password, nickname) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('nickname', nickname);
    formData.append('userimage', '0');
    
    const response = await instance.post('/api/signup', formData);
    
    if (response.data.message === '회원가입 성공') {
      // 회원가입 성공 시 nickname 저장
      localStorage.setItem('nickname', nickname);
      localStorage.setItem('userimage', '0');
    }
    return response.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.response?.status === 400) {
      throw new Error('이미 존재하는 사용자명입니다.');
    }
    throw new Error('회원가입에 실패했습니다.');
  }
};

export const updateProfile = async (nickname, userimage) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('인증 토큰이 없습니다. 다시 로그인해주세요.');
    }

    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('userimage', userimage?.toString() || '0');
    
    const response = await instance.put('/api/users/me', formData);
    if (response.data.message === '프로필 수정 성공') {
      localStorage.setItem('nickname', response.data.nickname);
      localStorage.setItem('userimage', response.data.userimage);
    }
    return response.data;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error('접근 권한이 없습니다. 다시 로그인해주세요.');
    }
    throw error;
  }
};

export default instance;