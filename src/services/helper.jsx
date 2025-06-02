import axios from "axios";

export const myAxios = axios.create({
    baseURL: 'https://harsh-2onb.onrender.com', // Ensure backend server is running here
});
