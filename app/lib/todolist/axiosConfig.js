import axios from 'axios'

const API_PATH = 'https://tool24-api-niad-399358656190.us-central1.run.app'

const api = axios.create({
    baseURL: API_PATH,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    (response) => response, (error) => {
        console.error('API error:', error);
        return Promise.reject(error);
    }
);

export default api;
