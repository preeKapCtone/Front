import axios from 'axios';

const instance = axios.create();

// 하나의 인터셉터만 사용
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // 모든 요청에 대해 multipart/form-data 사용
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
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    // 로그인 성공 후 프로필 정보 가져오기 위해 빈 요청 보내기
    try {
      const formData = new FormData();
      formData.append('nickname', ''); // 빈 값이라도 폼데이터 필요
      formData.append('userimage', '0');
      const profileResponse = await instance.put('/api/users/me', formData);
      
      if (profileResponse.data && profileResponse.data['nickname, userimage']) {
        const [nickname, userimage] = profileResponse.data['nickname, userimage'].split(', ');
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('userimage', userimage);
      }
    } catch (error) {
      console.error('Failed to fetch initial profile:', error);
    }
    
    return response.data;
  } catch (error) {
    throw new Error('아이디 또는 비밀번호가 올바르지 않습니다.');
  }
};

export const signup = async (username, password, nickname) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('nickname', nickname);
    formData.append('userimage', '0');
    
    const response = await instance.post('/api/signup', formData);
    // 회원가입 성공 시 nickname과 userimage 저장
    if (response.data.nickname) {
      localStorage.setItem('nickname', response.data.nickname);
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
    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('userimage', userimage?.toString() || '0');
    
    const response = await instance.put('/api/users/me', formData);
    if (response.data.message === '프로필 수정 성공') {
      const [newNickname, newUserimage] = response.data['nickname, userimage'].split(', ');
      localStorage.setItem('nickname', newNickname);
      localStorage.setItem('userimage', newUserimage);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default instance;