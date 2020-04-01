import axios from 'axios'
import store from 'store'
import Api from "./api/api";

// const api = new Api(process.env.VUE_APP_BASE_URL, '/auth');
const api = new Api('/api/v1', '/auth');

export const Storage = {
	tokenKey: 'gym-auth.token'
}

export default class Auth {
	async login(user) {
		const res = await api.action(null, 'login', user);
		this.storeToken(res.data)
		return res;
	}

	storeToken(token) {
		store.set(Storage.tokenKey, token)
	}

	get token() {
		return store.get(Storage.tokenKey)
	}

	get authHeaders() {
		let headers = {}
		if(this.token) {
			headers = {
				Authorization: this.token.token_type + ' ' + this.token.access_token
			}
		}

		return headers
	}

	setDefaultAuthHeaders() {
		axios.defaults.headers.common.Authorization = this.authHeaders.Authorization ? this.authHeaders.Authorization : ''
	}
}