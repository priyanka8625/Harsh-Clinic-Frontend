import axios from "axios";

export const myAxios = axios.create({
    baseURL: 'http://localhost:8086', // Ensure backend server is running here
});
