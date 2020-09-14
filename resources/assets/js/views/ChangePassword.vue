<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="metismenu-icon pe-7s-tools">
	                    </i>
	                </div>
	                <div class="heading-font-weight">CHANGE PASSWORD</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
                    <div class="position-relative form-group">
                        <label for="title">Old Password</label>
                        <input type="password" name="old_password" v-model="form.old_password" class="form-control" v-validate="'required|min:6'">
                        <span v-show="errors.has('old_password')" class="text-danger">{{ errors.first('old_password') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="detail">New Password</label>
                        <input type="password" name="new_password" v-model="form.new_password" class="form-control" ref="new_password" v-validate="'required|min:6'">
                        <span v-show="errors.has('new_password')" class="text-danger">{{ errors.first('new_password') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="detail">Confirm Password</label>
                        <input type="password" name="confirm_password" class="form-control" v-model="form.confirm_password" v-validate="'required|min:6|confirmed:new_password'">
                        <span v-show="errors.has('confirm_password')" class="text-danger">{{ errors.first('confirm_password') }}</span>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-outline-success-new" type="submit">SUBMIT</button>
                    </div>
                </form>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import DashboardPage from '@layouts/DashboardPage';
import axios from 'axios';

export default {
	name: 'ChangePassword',
	components: {
        DashboardPage,
    },
    data() {
        return {
            form: {
                old_password: null,
                new_password: null,
                confirm_password: null,
            },
        }
    },
    methods: {
        async submitForm() {
			try {
                const result = await this.$validator.validateAll();
				if(!result){
					return
                }
                const res = await axios.post('/api/v1/change/password', this.form)
                this.$router.push('/dashboard');
            }
            catch(err) {
                this.$snotify.error("There is some internal error.");
            }
        },
        resetForm() {
			this.form.old_password= null
			this.form.new_password= null
			this.form.confirm_password= null	
		},
    }
}
</script>