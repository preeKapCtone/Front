import axios from "axios";

export const usePost = async (url, data, token = null) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error("Error with POST request:", error);
        throw error;
    }
};