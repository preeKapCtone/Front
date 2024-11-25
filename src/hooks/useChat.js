import axios from "axios";

export const useChat = async (url, character, token) => {
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