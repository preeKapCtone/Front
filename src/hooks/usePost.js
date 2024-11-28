import axios from "axios";

export const usePost = async (url, data, token) => {
    try {
        await axios.post(
            'http://localhost:8080/api/posts',
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // 쿠키 및 인증 정보를 포함
            }
        );
    } catch (error) {
        console.error("Failed to fetch character data.", error);
        throw error;
    }
};