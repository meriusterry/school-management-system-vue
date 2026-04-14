import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token'),
    }),

    actions: {
        async login(credentials) {
            try {
                const response = await axios.post('/api/login', credentials);
                this.token = response.data.token;
                this.user = response.data.user;
                localStorage.setItem('token', this.token);
                return true;
            } catch (error) {
                console.error('Login failed:', error);
                return false;
            }
        },

        async logout() {
            await axios.post('/api/logout');
            this.token = null;
            this.user = null;
            localStorage.removeItem('token');
        },

        async fetchUser() {
            try {
                const response = await axios.get('/api/user');
                this.user = response.data;
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        }
    }
});