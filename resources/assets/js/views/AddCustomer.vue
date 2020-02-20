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
                                <label for="branchId">Branch</label>
                                <select class="form-control" name="branchId" v-model="customer.branchId" id="branchId" required>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div class="position-relative form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" class="form-control" name="firstName" v-model="customer.firstName" id="firstName" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" class="form-control" name="lastName" v-model="customer.lastName" id="lastName" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="email" >Email</label>
                                <input type="email" class="form-control" name="email" v-model="customer.email" id="name" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" name="password" v-model="customer.password" id="password" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="gender">Gender</label>
                                <div class="ml-1 row">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="gender" value="male" :checked="customer.gender === 'male'" v-model="customer.gender">
                                        <label class="custom-control-label" for="defaultGroupExample1">Male &nbsp;</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="gender" value="female" checked :checked="customer.gender === 'female'" v-model="customer.gender">
                                        <label class="custom-control-label" for="defaultGroupExample2">&nbsp;Female</label>
                                    </div>
                                </div>
                            </div>
                            <div class="position-relative form-group">
                                <label for="dob">Date Of Birth</label>
                                <input type="text" class="form-control" name="dob" v-model="customer.dob" id="dob" required>
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
                                <label for="height">Height (centimeters)</label>
                                <input type="text" class="form-control" name="height" v-model="customer.height" id="height" placeholder="150" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="weight">Weight (kg)</label>
                                <input type="text" class="form-control" name="weight" v-model="customer.weight" id="weight" placeholder="50" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="chest">Chest (centimeters)</label>
                                <input type="text" class="form-control" name="chest" v-model="customer.chest" id="chest" placeholder="135" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="waist">Waist (centimeters)</label>
                                <input type="text" class="form-control" name="waist" v-model="customer.waist" id="waist" placeholder="140" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="thigh">Thigh (centimeters)</label>
                                <input type="text" class="form-control" name="thigh" v-model="customer.thigh" id="thigh" placeholder="58" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="arms">Arms (centimeters)</label>
                                <input type="text" class="form-control" name="arms" v-model="customer.arms" id="arms" placeholder="180" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="fat">Fat (body fat percentage)</label>
                                <input type="text" class="form-control" name="fat" v-model="customer.fat" id="fat" placeholder="40" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="interestedArea">Interested Area</label>
                                <textarea rows="2" class="form-control" name="interestedArea" v-model="customer.interestedArea" id="interestedArea" required></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Contact Detail</h5>
                           <div class="position-relative form-group">
                                <label for="phone">Phone</label>
                                <input type="text" class="form-control" name="phone" v-model="customer.phone" id="phone" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="address">Address</label>
                                <textarea rows="2" class="form-control" name="address" v-model="customer.address" id="address" required></textarea>
                            </div>
                            <div class="position-relative form-group">
                                <label for="city">City</label>
                                <input type="text" class="form-control" name="city" v-model="customer.city" id="city">
                            </div>
                            <div class="position-relative form-group">
                                <label for="state">State</label>
                                <input type="text" class="form-control" name="state" v-model="customer.state" id="state">
                            </div>
                            <div class="position-relative form-group">
                                <label for="zipcode">Zipcode</label>
                                <input type="text" class="form-control" name="zipcode" v-model="customer.zipcode" id="zipcode" required>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Subscription Detail</h5>
                           <div class="position-relative form-group">
                                <label for="packageId">Package</label>
                                <select class="form-control" name="packageId" v-model="customer.packageId" id="packageId" @change="onChange($event)"  required>
                                    <option v-for="packageData in packages" :key="packageData.id" :value="packageData.id" :selected="customer.packageId ===  packageData.id">{{packageData.name}}</option>
                                </select>
                            </div>
                            <div class="position-relative form-group">
                                <label for="amount">Amount</label>
                                <input type="number" class="form-control" name="amount" v-model="customer.amount" id="amount" required readonly>
                            </div>
                            <div class="position-relative form-group">
                                <label for="startDate">Start Date</label>
                                <input type="text" class="form-control" name="startDate" v-model="customer.startDate" id="startDate" v-on:keypress="findEndDate($event)" @change="findEndDate($event)" placeholder="yyyy-mm-dd" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="duration">Duration(In Month)</label>
                                <input type="number" class="form-control" name="duration" v-model="customer.duration" id="duration" required readonly>
                            </div>
                            <div class="position-relative form-group">
                                <label for="endDate">End Date</label>
                                <input type="text" class="form-control" name="endDate" v-model="customer.endDate" id="endDate" placeholder="yyyy-mm-dd" required readonly>
                            </div>
                            <div class="position-relative form-group">
                                <label for="trialDays">Trial Days</label>
                                <input type="number" class="form-control" name="trialDays" v-model="customer.trialDays" id="trialDays">
                            </div>
                            <div class="position-relative form-group">
                                <label for="remark">Remark</label>
                                <textarea rows="2" class="form-control" name="remark" v-model="customer.remark" id="remark"></textarea>
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
                branchId: 1,
                gender:"female",
                packageId: null,
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                dob: null,
                height: null,
                weight: null,
                chest: null,
                waist: null,
                thigh: null,
                arms: null,
                fat: null,
                interestedArea: null,
                phone: null,
                address: null,
                city: null,
                state: null,
                zipcode: null,
                amount: null,
                startDate: null,
                duration: 0,
                endDate: null,
                trialDays: 0,
                remark: null,
                profileImage: null
            },
            packages: null,
			profile_img_path: null,
			showPreview: false,
		}
	},
	async mounted() {
		try {
            let res      = await axios.get('http://localhost:8000/api/v1/package/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
            this.packages = res.data.data
			
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
                    customerData.append('branchId', this.customer.branchId)
					customerData.append('gender', this.customer.gender)
                    customerData.append('packageId', this.customer.packageId)
                    customerData.append('firstName', this.customer.firstName)
					customerData.append('lastName', this.customer.lastName)
                    customerData.append('email', this.customer.email)
                    customerData.append('password', this.customer.password)
					customerData.append('dob', this.customer.dob)
                    customerData.append('height', this.customer.height)
                    customerData.append('weight', this.customer.weight)
					customerData.append('chest', this.customer.chest)
                    customerData.append('waist', this.customer.waist)
                    customerData.append('thigh', this.customer.thigh)
					customerData.append('arms', this.customer.arms)
                    customerData.append('fat', this.customer.fat)
                    customerData.append('interestedArea', this.customer.interestedArea)
					customerData.append('phone', this.customer.phone)
                    customerData.append('address', this.customer.address)
                    customerData.append('city', this.customer.city)
					customerData.append('state', this.customer.state)
                    customerData.append('zipcode', this.customer.zipcode)
                    customerData.append('amount', this.customer.amount)
					customerData.append('startDate', this.customer.startDate)
                    customerData.append('duration', this.customer.duration)
                    customerData.append('endDate', this.customer.endDate)
                    customerData.append('trialDays', this.customer.trialDays)
                    customerData.append('remark', this.customer.remark)
                    customerData.append('profileImage', this.customer.profileImage)

		        	res = await axios.post('http://localhost:8000/api/v1/customer/create', customerData ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization, 'Content-Type': 'multipart/form-data'} } )
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
            this.customer.profileImage = this.$refs.profilePath.files[0];

            let reader  = new FileReader();
            reader.addEventListener("load", function () {
                this.showPreview = true;
                this.profile_img_path = reader.result;
            }.bind(this), false);

            if( this.customer.profileImage ){
            //   if ( /\.(jpe?g|png|gif)$/i.test( this.customer.profileImage.name ) ) {
                reader.readAsDataURL( this.customer.profileImage );
            //   }
        	}
        },
        onChange(event) {
            for(let i = 0;i <= this.packages.length; i++ )
            {
                if(this.packages[i].id == event.target.value )
                {
                    this.customer.amount = this.packages[i].price
                    this.customer.duration = this.packages[i].duration
                }
            }
        },
        findEndDate(event)
        {
            let moment = require('moment');
            let currentDate = moment(this.customer.startDate);
            this.customer.endDate = moment(currentDate).add(this.customer.duration, 'M').endOf('month').format('YYYY-MM-DD');
                       
        }
	}
}
</script>