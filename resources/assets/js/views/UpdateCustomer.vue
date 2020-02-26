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
	                <div>CUSTOMER DETAIL</div>
	            </div>    
	        </div>
	    </div> 
        <form  @submit.prevent="submitForm()" enctype="multipart/form-data">     
            <div class="row">    
                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Personal Detail</h5>
                            <div class="position-relative form-group">
                                <label for="branch_id">Branch</label>
                                <select class="form-control" name="branch_id" v-model="user.branch_id" id="branch_id" required>
                                    <option v-for="branch in branches" :key="branch.id" :value="branch.id" :selected="user.branch_id ===  branch.id">{{branch.name}}</option>
                                </select>
                            </div>
                            <div class="position-relative form-group">
                                <label for="first_name">First Name</label>
                                <input type="text" class="form-control" name="first_name" v-model="user.first_name" id="first_name" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="last_name">Last Name</label>
                                <input type="text" class="form-control" name="last_name" v-model="user.last_name" id="last_name" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="email" >Email</label>
                                <input type="email" class="form-control" name="email" v-model="user.email" id="name" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" name="password" v-model="user.password" id="password" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="gender">Gender</label>
                                <div class="ml-1 row">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="gender" value="male" :checked="user.gender === 'male'" v-model="user.gender">
                                        <label class="custom-control-label" for="defaultGroupExample1">Male &nbsp;</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="gender" value="female" checked :checked="user.gender === 'female'" v-model="user.gender">
                                        <label class="custom-control-label" for="defaultGroupExample2">&nbsp;Female</label>
                                    </div>
                                </div>
                            </div>
                            <div class="position-relative form-group">
                                <label for="dob">Date Of Birth</label>
                                <input type="text" class="form-control" name="dob" v-model="user.dob" id="dob" required>
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
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">physical detail</h5>
                           <div class="position-relative form-group">
                                <label for="height">Height</label>
                                <input type="text" class="form-control" name="height" v-model="customer.height" id="height" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="weight">Weight</label>
                                <input type="text" class="form-control" name="weight" v-model="customer.weight" id="weight" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="chest">Chest</label>
                                <input type="text" class="form-control" name="chest" v-model="customer.chest" id="chest" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="waist">Waist</label>
                                <input type="text" class="form-control" name="waist" v-model="customer.waist" id="waist" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="thigh">Thigh</label>
                                <input type="text" class="form-control" name="thigh" v-model="customer.thigh" id="thigh" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="arms">Arms</label>
                                <input type="text" class="form-control" name="arms" v-model="customer.arms" id="arms" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="fat">Fat</label>
                                <input type="text" class="form-control" name="fat" v-model="customer.fat" id="fat" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="interested_area">Interested Area</label>
                                <textarea rows="2" class="form-control" name="interested_area" v-model="customer.interested_area" id="interested_area" required></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Contact Detail</h5>
                           <div class="position-relative form-group">
                                <label for="phone">Phone</label>
                                <input type="text" class="form-control" name="phone" v-model="user.phone" id="phone" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="address">Address</label>
                                <textarea rows="2" class="form-control" name="address" v-model="user.address" id="address" required></textarea>
                            </div>
                            <div class="position-relative form-group">
                                <label for="city">City</label>
                                <input type="text" class="form-control" name="city" v-model="customer.city" id="city" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="state">State</label>
                                <input type="text" class="form-control" name="state" v-model="customer.state" id="state" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="zipcode">Zipcode</label>
                                <input type="text" class="form-control" name="zipcode" v-model="customer.zipcode" id="zipcode" required>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mb-4 mt-3 col-sm-12">
                    <button class="btn btn-primary" style="width:23%" type="submit">SUBMIT</button>
                </div>
            </div>
        </form>
	</div>
	</DashboardPage>
</template>

<script>

import axios from 'axios';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'AddCustomer',
	components: {
		DashboardPage
	},
	data() {
		return {
            customer: {
                height: null,
                weight: null,
                chest: null,
                waist: null,
                thigh: null,
                arms: null,
                fat: null,
                interested_area: null,
                city: null,
                state: null,
                zipcode: null,
               
            },
            user:{
                branch_id: 1,
                gender:"female",
                first_name: null,
                last_name: null,
                email: null,
                password: null,
                dob: null,
                phone: null,
                address: null,
                profileImage: null
            },
            packages: null,
            branches: null,
			profile_img_path: null,
			showPreview: false,
		}
	},
	async mounted() {
		try {
            let res      = await axios.get('/api/v1/package/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
            this.packages = res.data.data

            let branchRes      = await axios.get('/api/v1/branch/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
            this.branches = branchRes.data.data

            if(this.$route.params.id != null)
			{
				let id        = this.$route.params.id
				let res       = await axios.get('/api/v1/customer/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
                this.customer = res.data.data.customer
                this.user     = res.data.data
				this.profile_img_path = this.user.photo_url;
                this.showPreview = true;
		    }
			
		} catch (err) {
			this.$snotify.error(null, err.message);

		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.customer) 
			 	{
                    let res = null
                    let customerData = new FormData()
                    customerData.append('branch_id', this.user.branch_id)
					customerData.append('gender', this.user.gender)
                    customerData.append('first_name', this.user.first_name)
					customerData.append('last_name', this.user.last_name)
                    customerData.append('email', this.user.email)
                    customerData.append('password', this.user.password)
					customerData.append('dob', this.user.dob)
                    customerData.append('height', this.customer.height)
                    customerData.append('weight', this.customer.weight)
					customerData.append('chest', this.customer.chest)
                    customerData.append('waist', this.customer.waist)
                    customerData.append('thigh', this.customer.thigh)
					customerData.append('arms', this.customer.arms)
                    customerData.append('fat', this.customer.fat)
                    customerData.append('interested_area', this.customer.interested_area)
					customerData.append('phone', this.user.phone)
                    customerData.append('address', this.user.address)
                    customerData.append('city', this.customer.city)
					customerData.append('state', this.customer.state)
                    customerData.append('zipcode', this.customer.zipcode)
                    customerData.append('profileImage', this.user.profileImage)
                    customerData.append('user_id', this.$route.params.id)

		        	res = await axios.post('/api/v1/customer/update', customerData ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization, 'Content-Type': 'multipart/form-data'} } )
		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/customer-list');
						this.$snotify.success(null, res.data.message);
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);

		  	}

		},
		resetForm() {
			this.customer = null;	
        },
        onImageUpload() {
            this.user.profileImage = this.$refs.profilePath.files[0];

            let reader  = new FileReader();
            reader.addEventListener("load", function () {
                this.showPreview = true;
                this.profile_img_path = reader.result;
            }.bind(this), false);

            if( this.user.profileImage ){
            //   if ( /\.(jpe?g|png|gif)$/i.test( this.user.profileImage.name ) ) {
                reader.readAsDataURL( this.user.profileImage );
            //   }
        	}
        },
	}
}
</script>