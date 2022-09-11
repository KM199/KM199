import axios from 'axios';

//https://hulio-backend.herokuapp.com/api/

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;