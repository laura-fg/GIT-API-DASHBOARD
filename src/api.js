import axios from 'axios';


const api = axios.create({
    baseUrl: 'https://api.github.com/search/repositories'
});

export default api;