<template>
    <form  enctype="multipart/form-data" @submit.prevent="submitForm()">        
        <div class="position-relative form-group">
            <label for="roleId">Staff Role</label>
            <select id="roleId" v-model="staff.roleId" class="form-control" name="roleId" v-validate="'required'">
                <option :value="null" disabled>Select role</option>
                <option value="2">Manager</option>
                <option value="3">Staff Member</option>
            </select>
            <span v-show="errors.has('roleId')" class="text-danger">The staff role field is required.</span>
        </div>
        <div class="position-relative form-group">
            <label for="firstName">First Name</label>
            <input id="firstName" v-model="staff.firstName" type="text" class="form-control" name="firstName" v-validate="'required'">
            <span v-show="errors.has('firstName')" class="text-danger">{{ errors.first('firstName') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="lastName">Last Name</label>
            <input id="lastName" v-model="staff.lastName" type="text" class="form-control" name="lastName" v-validate="'required'">
            <span v-show="errors.has('lastName')" class="text-danger">{{ errors.first('lastName') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="email">Email</label>
            <input id="name" v-model="staff.email" type="email" class="form-control" name="email" v-validate="'required|email'">
            <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
        </div>
        <div v-if="!this.$route.params.id" class="position-relative form-group">
            <label for="password">Password</label>
            <input id="password" v-model="staff.password" type="password" class="form-control" name="password" v-validate="'required|min:6'">
            <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="phone">Phone</label>
            <input id="phone" v-model="staff.phone" type="text" class="form-control" name="phone" v-validate="'required'">
            <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="dob">Date Of Birth</label>
			<VueJqueryCalendar v-model="staff.dob" v-validate="'required'" name="dob" date-format="dd-mm-yy" :readonly="true" class-name="form-control"/>
            <!-- <input id="dob" v-model="staff.dob" type="text" class="form-control" name="dob" v-validate="'required'"> -->
            <span v-show="errors.has('dob')" class="text-danger">{{ errors.first('dob') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="gender">Gender</label>
            <div class="ml-1 row">
                <div class="custom-control custom-radio">
                    <input id="defaultGroupExample1" v-model="staff.gender" type="radio" class="custom-control-input" name="gender" value="male" :checked="staff.gender === 'male'">
                    <label class="custom-control-label" for="defaultGroupExample1">Male &nbsp;</label>
                </div>
                <div class="custom-control custom-radio">
                    <input id="defaultGroupExample2" v-model="staff.gender" type="radio" class="custom-control-input" name="gender" value="female" checked :checked="staff.gender === 'female'">
                    <label class="custom-control-label" for="defaultGroupExample2">&nbsp;Female</label>
                </div>
            </div>
        </div>
        <div class="position-relative form-group">
            <label for="address">Address</label>
            <textarea id="address" v-model="staff.address" rows="2" class="form-control" name="address" v-validate="'required'"></textarea>
            <span v-show="errors.has('address')" class="text-danger">{{ errors.first('address') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="profile_img_path">Profile Photo</label><br>
            <img v-if="profile_img_path" :src="profile_img_path" width="25%" style="border: 1px solid #cac2c2;" />
            <input id="profilePath" ref="profilePath" type="file" class="form-control" accept="image/*" name="profilePath" style="display:none;" @change="onImageUpload()">
                         
        </div>
        <div class="position-relative form-group">
            <label></label>
            <button class="btn btn-info" @click.prevent="$refs.profilePath.click()">Upload Image</button>
        </div>
    
        <div class="text-center">
            <button class="btn btn-outline-info" type="submit">SUBMIT</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
import VueJqueryCalendar from 'vue-jquery-calendar';

export default {
    name: 'AddStaffMemberForm',
    components: {
		VueJqueryCalendar,
	},
    data() {
		return {
			staff:{
				firstName: null,
				lastName: null,
				password:null, 
				phone:null,
				dob:null,
				gender:'female',
				address:null,
				email:null,
				roleId:null,
				profileImage: '',
				
			},
			profile_img_path: null,
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null) {
                await this.getStaffMemberList();
		    }
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
        async getStaffMemberList() {
            const res          = await axios.get('/api/v1/staff/member/'+this.$route.params.id)
            this.staff = res.data.data
            this.profile_img_path = this.staff.photoUrl;
        },
		async submitForm() {
			try {
                const result = await this.$validator.validateAll();
				if(!result){
					return
				}
                let res = null
                const data = new FormData()
                data.append('firstName', this.staff.firstName)
                data.append('lastName', this.staff.lastName)
                data.append('phone', this.staff.phone)
                data.append('dob', this.staff.dob)
                data.append('gender', this.staff.gender)
                data.append('address', this.staff.address)
                data.append('email', this.staff.email)
                data.append('roleId', this.staff.roleId)
                data.append('profileImage', this.staff.profileImage)
					
                if(this.$route.params.id != null) {
                    data.append('memberId', this.$route.params.id)
                    res = await axios.post('/api/v1/staff/member/update', data,{headers: {'Content-Type': 'multipart/form-data'}})
                    this.$snotify.success(null, res.data.message);
                } else {
                    data.append('password', this.staff.password)
                    res = await axios.post('/api/v1/staff/member', data,{headers: {'Content-Type': 'multipart/form-data'}})
                    this.$router.push('/staff-member-list');
                }
		  	}
		  	catch(err) {
		  		this.$snotify.error(null, err.message);
		  	}
		},
		onImageUpload() {
            this.staff.profileImage = this.$refs.profilePath.files[0];

            const reader  = new FileReader();
            reader.addEventListener("load", function () {
                this.profile_img_path = reader.result;
            }.bind(this), false);

            if( this.staff.profileImage ){
            //   if ( /\.(jpe?g|png|gif)$/i.test( this.staff.profileImage.name ) ) {
                reader.readAsDataURL( this.staff.profileImage );
            //   }
        	}
        }
	}
}
</script>