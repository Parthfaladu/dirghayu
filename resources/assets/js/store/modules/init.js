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
	currency: (state) => {
		if(state.user && state.user.settings){
			return state.user.settings.currency
		}
		return '$';
	},
	userPermissions: (state) => {
		if(state.user && state.user.permission){
			return state.user.permission
		}
		return [];
	},
	settings: (state) => {
		if(state.user && state.user.settings) {
			return state.user.settings
		}
		return null;
	}
}

export const actions = {
	[INITIALIZED]: ({commit, dispatch}) => {
		return new Promise((resolve, reject) => {
			const requestHeader = {
				...store.getters['auth/authHeaders'],
			}
			
			return axios.request({
				method: 'get',
				url:  '/api/v1/auth/user',
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