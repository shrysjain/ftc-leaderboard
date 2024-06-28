import axios from 'axios';
import 'dotenv/config';

const API_BASE_URL = 'https://theorangealliance.org/api';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Application-Origin': 'ftc-chs-leaderboard',
        'X-TOA-Key': API_KEY,
    },
});

export const getTeamInfo = async (teamNumber) => {
  try {
    const response = await api.get(`/team/${teamNumber}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching information for team ${teamNumber}. If you're seeing this, The Orange Alliance API is probably down. Try again in a bit, and if it is still not working, open an issue on the GitHub repository @ github.com/shrysjain/ftc-leaderboard/issues/new - rntas${i+1}`);
    throw error;
  }
};
