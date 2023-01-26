import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

const useApi = () => ({
    signin: async (user, password) => {
        const response = await api.post('/login', {user, password});
        return response.data;
    } 
})

export default useApi();