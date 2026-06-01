const TOKEN_KEY = 'task_token';
const USER_KEY = 'task_user';

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const setUser = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getUser = () => {
    const stored = localStorage.getItem(USER_KEY);
    return stored ? JSON.parse(stored) : null;
};

export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};

export const isLoggedIn = () => {
    return !!getToken();
};
