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
	                <div>User Profile</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form v-if="form"  @submit.prevent="submitForm()">
                    <div class="position-relative form-group">
                        <label for="title">First name</label>
                        <input type="text" name="first_name" v-model="form.first_name" class="form-control" v-validate="'required'">
                        <span v-show="errors.has('first_name')" class="text-danger">{{ errors.first('first_name') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Last name</label>
                        <input type="text" name="old_password" v-model="form.last_name" class="form-control" v-validate="'required'">
                        <span v-show="errors.has('last_name')" class="text-danger">{{ errors.first('last_name') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="profile_img_path">Profile Photo</label><br>
                        <img :src="form.photo_url" width="20%" style="border: 1px solid #cac2c2;" />
                        <input id="profilePath" ref="profilePath" type="file" class="form-control" accept="image/*" name="profilePath" style="display:none;" @change="onImageUpload()">             
                    </div>
                    <div class="position-relative form-group">
                        <label></label>
                        <button class="btn btn-info" @click.prevent="$refs.profilePath.click()">Upload Image</button>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Email address</label>
                        <input type="text" name="email" :value="form.email" class="form-control" disabled>
                        <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Phone number</label>
                        <input type="text" name="phone" v-model="form.phone" class="form-control" v-validate="'required'">
                        <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Gender</label><br>
                        <label><input type="radio" name="gender" v-model="form.gender" value="male"> Male</label>
                        <label class="ml-2"><input type="radio" name="gender" v-model="form.gender" value="female"> Female</label>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Date of birth</label>
                        <VueJqueryCalendar v-model="form.dob" v-validate="'required'" name="dob" date-format="dd-mm-yy" :readonly="true" class-name="form-control"/>
                        <span v-show="errors.has('dob')" class="text-danger">{{ errors.first('dob') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Address</label>
                        <textarea name="address" v-model="form.address" class="form-control" v-validate="'required'" rows="4"></textarea>
                        <span v-show="errors.has('address')" class="text-danger">{{ errors.first('address') }}</span>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-outline-info" type="submit">SUBMIT</button>
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
import VueJqueryCalendar from 'vue-jquery-calendar';
import moment from 'moment';

export default {
	name: 'AddNotice',
	components: {
        DashboardPage,
        VueJqueryCalendar,
    },
    data() {
        return {
            form: null,
            profileImage: null
        }
    },
    mounted() {
        this.form = {
            ...this.$store.state.init.user,
            ...{'dob': moment(this.$store.state.init.user.dob).format('DD-MM-YYYY')}
        }
    },
    methods: {
        async submitForm() {
			try {
                const result = await this.$validator.validateAll();
				if(!result){
					return
                }
                 
                const userData = new FormData()
                userData.append('gender', this.form.gender)
                userData.append('first_name', this.form.first_name)
                userData.append('last_name', this.form.last_name)
                userData.append('dob', this.form.dob)
                userData.append('phone', this.form.phone)
                userData.append('address', this.form.address)
                userData.append('profileImage', this.profileImage)

                const res = await axios.post('/api/v1/auth/user', userData,{headers: {'Content-Type': 'multipart/form-data'}})
                
                this.$snotify.success(null, res.data.message);
            }
            catch(err) {
                this.$snotify.error("There is some internal error.");
            }
        },
        onImageUpload() {
            this.profileImage = this.$refs.profilePath.files[0];

            const reader  = new FileReader();
            reader.addEventListener("load", function () {
                this.form.photo_url = reader.result;
            }.bind(this), false);

            if( this.profileImage ){
            //   if ( /\.(jpe?g|png|gif)$/i.test( this.user.profileImage.name ) ) {
                reader.readAsDataURL( this.profileImage );
            //   }
        	}
        },
    }
}
</script>