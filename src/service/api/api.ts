import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000' // Replace with the URL of your JSON server
});

export default api;