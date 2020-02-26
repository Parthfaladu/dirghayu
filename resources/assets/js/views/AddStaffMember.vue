<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-display1 icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>STAFF MEMBER DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()" enctype="multipart/form-data">
	                
	                <div class="position-relative form-group">
                        <label for="branchId">Branch</label>
                        <select class="form-control" name="branchId" v-model="staff.branchId" id="branchId" required>
                        	<option v-for="branch in branches" :key="branch.id" :value="branch.id" :selected="staff.branchId ===  branch.id">{{branch.name}}</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="roleId">Staff Role</label>
                        <select class="form-control" name="roleId" v-model="staff.roleId" id="roleId" required>
                        	<option value="2">Manager</option>
                        	<option value="3">Staff Member</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" name="firstName" v-model="staff.firstName" id="firstName" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" name="lastName" v-model="staff.lastName" id="lastName" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" v-model="staff.email" id="name" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" v-model="staff.password" id="password" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" name="phone" v-model="staff.phone" id="phone" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="dob">Date Of Birth</label>
                        <input type="text" class="form-control" name="dob" v-model="staff.dob" id="dob" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="gender">Gender</label>
						<div class="ml-1 row">
							<div class="custom-control custom-radio">
								<input type="radio" class="custom-control-input" id="defaultGroupExample1" name="gender" value="male" :checked="staff.gender === 'male'" v-model="staff.gender">
								<label class="custom-control-label" for="defaultGroupExample1">Male &nbsp;</label>
							</div>
							<div class="custom-control custom-radio">
								<input type="radio" class="custom-control-input" id="defaultGroupExample2" name="gender" value="female" checked :checked="staff.gender === 'female'" v-model="staff.gender">
								<label class="custom-control-label" for="defaultGroupExample2">&nbsp;Female</label>
							</div>
						</div>
                    </div>
                    <div class="position-relative form-group">
                        <label for="address">Address</label>
                        <textarea rows="2" class="form-control" name="address" v-model="staff.address" id="address" required></textarea>
                    </div>
					<div class="position-relative form-group">
                        <label for="profile_img_path">Profile Photo</label>
						<img v-bind:src="profile_img_path" v-show="showPreview" width="20%" style="border: 1px solid #cac2c2;" />
						<input type="file" class="form-control" accept="image/*" name="profilePath" id="profilePath" ref="profilePath" @change="onImageUpload()" style="display:none;">
                                        
                    </div>
					<div class="position-relative form-group">
                    	<label></label>
						<button @click.prevent="$refs.profilePath.click()" class="btn btn-info">Upload Image</button>
					</div>
                
	                <div class="text-center">
	                	<button class="btn btn-primary" type="submit">SUBMIT</button>
	                </div>
	            </form>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>

<script>
	
import axios from 'axios';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'AddStaffMember',
	components: {
		DashboardPage
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
				branchId:1,
				email:null,
				roleId:null,
				profileImage: null,
			},
			profile_img_path: null,
			showPreview: false,
			branches: null,
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				let id           = this.$route.params.id
				let res          = await axios.get('/api/v1/staff/member/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.staff = res.data.data
				this.profile_img_path = this.staff.photoUrl;
                this.showPreview = true;
		    }
			let branchRes      = await axios.get('/api/v1/branch/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.branches = branchRes.data.data

		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.staff) 
			 	{
			 		let res = null
					let data = new FormData()
                    data.append('firstName', this.staff.firstName)
                    data.append('lastName', this.staff.lastName)
                    data.append('password', this.staff.password)
                    data.append('phone', this.staff.phone)
					data.append('dob', this.staff.dob)
                    data.append('gender', this.staff.gender)
                    data.append('address', this.staff.address)
                    data.append('branchId', this.staff.branchId)
					data.append('email', this.staff.email)
					data.append('roleId', this.staff.roleId)
                    data.append('profileImage', this.staff.profileImage)
					
			 		if(this.$route.params.id != null)
			 		{
                        data.append('id', this.staff.id)
			 			res = await axios.post('/api/v1/staff/member/update', data, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization, 'Content-Type': 'multipart/form-data'} } )
			 		}else
			 		{
		        		res = await axios.post('/api/v1/staff/member', data, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization, 'Content-Type': 'multipart/form-data'} } )
			 		}
		        

		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/staff-member-list');
						this.$snotify.success(null, res.data.message);
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);
		  	}

		},
		resetForm() {
			this.staff = null;	
		},
		onImageUpload() {
            this.staff.profileImage = this.$refs.profilePath.files[0];

            let reader  = new FileReader();
            reader.addEventListener("load", function () {
                this.showPreview = true;
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