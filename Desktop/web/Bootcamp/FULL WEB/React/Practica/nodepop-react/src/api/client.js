import axios from "axios";

const client = axios.create({
    baseUrl: 'http://localhost:8000',
});

export default client;