import axios from 'axios';
import { apiUrl } from '../config/app';

export const api = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});