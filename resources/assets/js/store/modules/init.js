import store from '@store/store'
import axios from 'axios'

const INITIALIZED = 'initialized'
const UPDATE_USER = 'updateUser'

export const state = {
	initialized: false,
	user: null,
}

export const getters = {
	isInitialized: (state) => state.initialized && !!state.user,
}

export const actions = {
	[INITIALIZED]: ({commit, dispatch}) => {
		return new Promise((resolve, reject) => {
			let requestHeader = {
				...store.getters['auth/authHeaders'],
			}
			
			return axios.request({
				method: 'get',
				url: 'http://localhost:8000/api/v1/auth/user',
				headers: requestHeader,
				responseType: 'json'
			}).then((res) => {
				commit(UPDATE_USER, res.data)
				commit(INITIALIZED, res.data)
				resolve(res.data)
			})
			.catch((err) => {
				reject(err)
			});
		});
	}
}

export const mutations = {
	[INITIALIZED]: (state, user) => {
		state.initialized = true
	},
	[UPDATE_USER]: (state, user) => {
		state.user = user
	}
}