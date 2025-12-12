import { API_KEY, BASE_URL } from '../constants';

export const getMessagesEndpoint = `${BASE_URL}/models/gemini-2.5-flash:generateContent?key=${API_KEY}`