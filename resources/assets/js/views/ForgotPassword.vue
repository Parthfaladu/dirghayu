<template>
<div class="login-background">
	<div class="container h-100 login-container">
    	<div class="row align-items-center h-100">
      		<div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        		<div class="card card-signin my-5">
          			<div class="card-body">
						<div class="text-center mb-5">
							<img v-if="settings" :src="settings[0].logo_url" width="100px"/>
						</div>
            			<h5 class="card-title text-center h2 mb-4 sign-in-text">Forgot Password</h5>
						<div v-if="isError === true" class="alert alert-danger alert-dismissible fade show" role="alert">
							Invalid Email Address.
							<button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="isError = false">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div v-if="isSuccess === true" class="alert alert-success alert-dismissible fade show" role="alert">
							Please Check Your Email Account.
							<button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="isSuccess = false">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
			            <form class="" @submit.prevent="submitForm()">
			              	<div class="form-label-group pb-4">
			                	<input v-model="form.email" type="email" name="email" class="form-control mb-3" v-validate="'required|email'" placeholder="Email address">
                                <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
			              	</div>
			              	<button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Submit</button>
							<router-link to="/login" class="pull-right pt-4 h5 text-primary">Login</router-link><br>
			            </form>
          			</div>
        		</div>
      		</div>
    	</div>
  	</div>
</div>
</template>
<script>
import axios from 'axios';

export default {
	name: 'ForgotPassword',
	components: {
    },
    data() {
        return {
            form: {
                email: null
            },
			settings: null,
			isError: false,
			isSuccess: false,
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
				
				await axios.post('/api/v1/forgot/password', this.form)
				this.isSuccess = true;
				this.form.email = null
            }
            catch(err) {
                this.isError = true
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
		},
        resetForm() {
			this.form.email= null
		},
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