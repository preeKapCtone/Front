import axios from "axios";

export const useChat = async (character, token) => {
    const response = await axios.get(`${BASE_URL}/${url}`, {
        headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
    });
    try {
        const response = await axios.get(`http://localhost:8080/api/posts?title=${character}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch character data.", error);
        throw error;
    }
};