<template>
	<DashboardPage v-can:update__customer>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-user icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>CUSTOMER DETAIL</div>
	            </div>    
	        </div>
	    </div> 
        <form  enctype="multipart/form-data" @submit.prevent="submitForm()">     
            <div class="row">    
                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Personal Detail</h5>
                            <div class="position-relative form-group">
                                <label for="first_name">First Name</label>
                                <input id="first_name" v-model="user.first_name" type="text" class="form-control" name="first_name" v-validate="'required'">
                                <span v-show="errors.has('first_name')" class="text-danger">{{ errors.first('first_name') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="last_name">Last Name</label>
                                <input id="last_name" v-model="user.last_name" type="text" class="form-control" name="last_name" v-validate="'required'">
                                <span v-show="errors.has('last_name')" class="text-danger">{{ errors.first('last_name') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="email" >Email</label>
                                <input id="name" v-model="user.email" type="email" class="form-control" name="email" v-validate="'required|email'">
                                <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="gender">Gender</label>
                                <div class="ml-1 row">
                                    <div class="custom-control custom-radio">
                                        <input id="defaultGroupExample1" v-model="user.gender" type="radio" class="custom-control-input" name="gender" value="male" :checked="user.gender === 'male'">
                                        <label class="custom-control-label" for="defaultGroupExample1">Male &nbsp;</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input id="defaultGroupExample2" v-model="user.gender" type="radio" class="custom-control-input" name="gender" value="female" checked :checked="user.gender === 'female'">
                                        <label class="custom-control-label" for="defaultGroupExample2">&nbsp;Female</label>
                                    </div>
                                </div>
                            </div>
                            <div class="position-relative form-group">
                                <label for="dob">Date Of Birth</label>
                                <!-- <input id="dob" v-model="user.dob" type="text" class="form-control" name="dob" v-validate="'required'"> -->
                                <VueJqueryCalendar v-model="user.dob" v-validate="'required'" name="dob" date-format="dd-mm-yy" :readonly="true" class-name="form-control" />
                                <span v-show="errors.has('dob')" class="text-danger">{{ errors.first('dob') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="profile_img_path">Profile Photo</label><br>
                                <img v-show="showPreview" :src="profile_img_path" width="20%" style="border: 1px solid #cac2c2;" />
                                <input id="profilePath" ref="profilePath" type="file" class="form-control" accept="image/*" name="profilePath" style="display:none;" @change="onImageUpload()">             
                            </div>
                            <div class="position-relative form-group">
                                <label></label>
                                <button class="btn btn-info" @click.prevent="$refs.profilePath.click()">Upload Image</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">physical detail</h5>
                           <div class="position-relative form-group">
                                <label for="height">Height</label>
                                <input id="height" v-model="customer.height" type="text" class="form-control" name="height" v-validate="'required'">
                                <span v-show="errors.has('height')" class="text-danger">{{ errors.first('height') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="weight">Weight</label>
                                <input id="weight" v-model="customer.weight" type="text" class="form-control" name="weight" v-validate="'required'">
                                <span v-show="errors.has('weight')" class="text-danger">{{ errors.first('weight') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="chest">Chest</label>
                                <input id="chest" v-model="customer.chest" type="text" class="form-control" name="chest" v-validate="'required'">
                                <span v-show="errors.has('chest')" class="text-danger">{{ errors.first('chest') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="waist">Waist</label>
                                <input id="waist" v-model="customer.waist" type="text" class="form-control" name="waist" v-validate="'required'">
                                <span v-show="errors.has('waist')" class="text-danger">{{ errors.first('waist') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="thigh">Thigh</label>
                                <input id="thigh" v-model="customer.thigh" type="text" class="form-control" name="thigh" v-validate="'required'">
                                <span v-show="errors.has('thigh')" class="text-danger">{{ errors.first('thigh') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="arms">Arms</label>
                                <input id="arms" v-model="customer.arms" type="text" class="form-control" name="arms" v-validate="'required'">
                                <span v-show="errors.has('arms')" class="text-danger">{{ errors.first('arms') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="fat">Fat</label>
                                <input id="fat" v-model="customer.fat" type="text" class="form-control" name="fat" v-validate="'required'">
                                <span v-show="errors.has('fat')" class="text-danger">{{ errors.first('fat') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="interested_area">Interested Area</label>
                                <textarea id="interested_area" v-model="customer.interested_area" rows="2" class="form-control" name="interested_area"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Contact Detail</h5>
                           <div class="position-relative form-group">
                                <label for="phone">Phone</label>
                                <input id="phone" v-model="user.phone" type="text" class="form-control" name="phone" v-validate="'required'">
                                <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="address">Address</label>
                                <textarea id="address" v-model="user.address" rows="2" class="form-control" name="address" v-validate="'required'"></textarea>
                                <span v-show="errors.has('address')" class="text-danger">{{ errors.first('address') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="city">City</label>
                                <input id="city" v-model="customer.city" type="text" class="form-control" name="city" v-validate="'required'">
                                <span v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="state">State</label>
                                <input id="state" v-model="customer.state" type="text" class="form-control" name="state" v-validate="'required'">
                                <span v-show="errors.has('state')" class="text-danger">{{ errors.first('state') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="zipcode">Zipcode</label>
                                <input id="zipcode" v-model="customer.zipcode" type="text" class="form-control" name="zipcode" v-validate="'required'">
                                <span v-show="errors.has('zipcode')" class="text-danger">{{ errors.first('zipcode') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mb-4 mt-3 col-sm-12">
                    <button class="btn btn-outline-info" style="width:23%" type="submit">SUBMIT</button>
                </div>
            </div>
        </form>
	</div>
	</DashboardPage>
</template>
<script>
import axios from 'axios';
import DashboardPage from '@layouts/DashboardPage';
import VueJqueryCalendar from 'vue-jquery-calendar';

export default {
	name: 'AddCustomer',
	components: {
        DashboardPage,
        VueJqueryCalendar
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
                interested_area: '',
                city: null,
                state: null,
                zipcode: null,
               
            },
            user: {
                gender:"female",
                first_name: null,
                last_name: null,
                email: null,
                dob: null,
                phone: null,
                address: null,
                profileImage: ''
            },
            packages: null,
            branches: null,
			profile_img_path: null,
			showPreview: false,
		}
	},
	async mounted() {
		try {
            if(this.$route.params.id != null) {
				this.getCusomerList();
		    }
            await this.getPackageList();
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
        async getCusomerList() {
			const res = await axios.get('/api/v1/customer/list/'+this.$route.params.id)
            this.customer = res.data.data.customer
            this.user     = res.data.data
            this.profile_img_path = this.user.photo_url;
            this.showPreview = true;
        },
        async getPackageList() {
            const res = await axios.get('/api/v1/package/list')
            this.packages = res.data.data
        },
		async submitForm() {
			try {
                 
                 const result = await this.$validator.validateAll();
				if(!result){
					return
                }
                 
                let res = null
                const customerData = new FormData()
                customerData.append('gender', this.user.gender)
                customerData.append('first_name', this.user.first_name)
                customerData.append('last_name', this.user.last_name)
                customerData.append('email', this.user.email)
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

                res = await axios.post('/api/v1/customer/update', customerData,{headers: {'Content-Type': 'multipart/form-data'}})
                
                this.$snotify.success(null, res.data.message);
		  	}
		  	catch(err) {
		  		this.$snotify.error(null, err.message);
		  	}
		},
        onImageUpload() {
            this.user.profileImage = this.$refs.profilePath.files[0];

            const reader  = new FileReader();
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