import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44310/api/'
});

export default instance;