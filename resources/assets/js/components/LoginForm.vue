<template>
<div class="login-background">
	<div class="container h-100 login-container">
    	<div class="row align-items-center h-100">
      		<div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        		<div class="card card-signin my-5">
          			<div class="card-body">
						<div class="text-center mb-5">
							<img v-if="settings" :src="settings[0].logo_url" />
						</div>
            			<h5 class="card-title text-center h2 mb-4 sign-in-text">Sign In</h5>
						<div v-if="errMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
							{{errMessage}}
							<button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="isError = false">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
			            <form class="form-signin" @submit.prevent="submitForm()">
			              	<div class="form-label-group">
			                	<input v-model="form.email" type="email" name="email" v-validate="'required|email'" class="form-control" placeholder="Email address">
								<span v-show="errors.has('email')" class="text-danger  mb-4">{{ errors.first('email') }}</span>
			              	</div>

			              	<div class="form-label-group">
			                	<input v-model="form.password" type="password" name="password" v-validate="'required|min:6'" class="form-control mt-3" placeholder="Password">
								<span v-show="errors.has('password')" class="text-danger  mb-4">{{ errors.first('password') }}</span>
			              	</div>
			              	<button class="btn btn-lg btn-primary btn-block text-uppercase mt-5" type="submit">Sign in</button>
							<router-link to="/forgot-password" class="pull-right pt-4 h6 text-primary">Forgot Password</router-link><br>
			            </form>
          			</div>
        		</div>
      		</div>
    	</div>
  	</div>
</div>
</template>
<script>
import Auth from '@services/auth'
import axios from 'axios';

const auth = new Auth()

export default {
	name: 'LoginForm',
	data() {
		return {
			form: {
				email: null,
				password: null
			},
			settings: null,
			errMessage: null,
		}
	},
	mounted(){
		this.getSettings();
	},
	methods: {
		async submitForm() {
			try {
				const result = await this.$validator.validateAll();
				if(!result){
					return
				}
				await auth.login(this.form);
				window.location.href = '/dashboard';
			} catch(err) {
				if(err.response && err.response.status === 403 && err.response.data && err.response.data.message){
					this.errMessage = err.response.data.message;
				}
				else {
					this.errMessage = 'Invalid Email Address Or Password.';
				}
			}
		},
		async getSettings() {
			try {
				const settingsRes = await axios.get('/api/v1/settings');
				this.settings = settingsRes.data.data;
			}
			catch(err) {
				console.log(err)
			}
		}

	}
}
</script>
<style scoped>
	.sign-in-text{
		color: rgb(63, 106, 216);
		font-size: 1.3rem;
	}
	.login-background{
		background-image: url(/images/login-back.jpg);
		background-repeat:no-repeat;
		background-size: cover;
	}
</style>
