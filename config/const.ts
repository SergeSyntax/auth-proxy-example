// Auth
export const COOKIE_AUTH_KEY = 'auth-token';
export const TARGET_URL = process.env.API_URL || 'http://localhost:5000/api';
export const AUTHORIZATION_KEY = 'Authorization';
export const getBearerToken = (token: string) => `Bearer ${token}`;
