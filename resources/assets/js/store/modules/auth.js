import store from 'store'

const STORE_TOKEN = 'storeToken';
const TOKEN_KEY = 'gym-auth.token';
const LOGOUT = 'logout';

export const state = {
	token: store.get(TOKEN_KEY) || '',
}

export const getters = {
	isAuthenticated: (state) => !!state.token,
	authHeaders: (state) => {
		let headers = {}
		if(state.token) {
			headers = {
				Authorization: state.token.token_type + ' ' + state.token.access_token
			}
		}
		return headers
	},
}

export const mutations = {
	[STORE_TOKEN]: (state, token) => {
		state.token = token;
		store.set(TOKEN_KEY, token);
	},
	[LOGOUT]: (state, token) => {
		store.remove(TOKEN_KEY);
		state.token = '';
	},
}

// import Auth from '@services/auth'

// const AuthService = new Auth()

// export const state = {
// 	token: AuthService.token || '',
// }

// export const getters = {
// 	isAuthenticated: (state) => !!state.token,
// 	authHeaders: (state) => AuthService.authHeaders,
// }