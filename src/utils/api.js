import axios from 'axios';
import 'dotenv/config';

const API_BASE_URL = 'https://theorangealliance.org/api';
const API_KEY = 'REDACTED'; // RoP

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Application-Origin': 'ftc-chs-leaderboard',
        'X-TOA-Key': API_KEY,
    },
});

export default api;
