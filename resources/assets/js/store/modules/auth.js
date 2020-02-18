import Auth from '@services/auth'

const AuthService = new Auth()

export const state = {
	token: AuthService.token || '',
}

export const getters = {
	isAuthenticated: (state) => !!state.token,
	authHeaders: (state) => AuthService.authHeaders,
}