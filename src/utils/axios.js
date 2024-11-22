import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const login = async (username, password) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    
    const response = await instance.post('/api/login', formData);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('password', password);  // 비밀번호도 저장
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
    return response.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.response?.status === 400) {
      throw new Error('이미 존재하는 사용자명입니다.');
    } else {
      throw new Error('회원가입에 실패했습니다.');
    }
  }
};

export const updateProfile = async (nickname, userimage) => {
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('userimage', userimage?.toString() || '0');
    
    const response = await instance.post('/api/users/me', formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.data.message === '프로필 수정 성공') {
      const [newNickname, newUserimage] = response.data['nickname, userimage'].split(', ');
      localStorage.setItem('nickname', newNickname);
      localStorage.setItem('userimage', newUserimage);
    }
    return response.data;
  } catch (error) {
    throw new Error('프로필 수정에 실패했습니다.');
  }
};

export default instance;