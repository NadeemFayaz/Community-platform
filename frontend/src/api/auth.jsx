// src/api/auth.js
import axios from 'axios';

export const registerUser = async (userData) => {
  const response = await axios.post('/api/auth/register', userData);
  return response.data;
};
