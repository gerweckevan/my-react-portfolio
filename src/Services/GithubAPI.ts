import axios from 'axios';

export const GitHubAPI = axios.create({
  baseURL: 'https://api.github.com',
})
