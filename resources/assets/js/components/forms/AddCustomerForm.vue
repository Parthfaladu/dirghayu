<template>
    <form type="multipart/form-data" @submit.prevent="submitForm()">     
        <div class="row">    
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Personal Detail</h5>
                        <div class="position-relative form-group">
                            <label for="firstName">First Name</label>
                            <input id="firstName" v-model="customer.firstName" v-validate="'required'" type="text" class="form-control" name="firstName">
                            <span v-show="errors.has('firstName')" class="text-danger">{{ errors.first('firstName') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="lastName">Last Name</label>
                            <input id="lastName" v-model="customer.lastName" v-validate="'required'" type="text" class="form-control" name="lastName">
                            <span v-show="errors.has('lastName')" class="text-danger">{{ errors.first('lastName') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="email" >Email</label>
                            <input id="name" v-model="customer.email" v-validate="'required|email'" type="email" class="form-control" name="email">
                            <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="password">Password</label>
                            <input id="password" v-model="customer.password" v-validate="'required|min:6'" type="password" class="form-control" name="password">
                            <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="gender">Gender</label>
                            <div class="ml-1 row">
                                <div class="custom-control custom-radio">
                                    <input id="defaultGroupExample1" v-model="customer.gender"  type="radio" class="custom-control-input" name="gender" value="male" :checked="customer.gender === 'male'">
                                    <label class="custom-control-label" for="defaultGroupExample1">Male &nbsp;</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="defaultGroupExample2" v-model="customer.gender"  type="radio" class="custom-control-input" name="gender" value="female" checked :checked="customer.gender === 'female'">
                                    <label class="custom-control-label" for="defaultGroupExample2">&nbsp;Female</label>
                                </div>
                            </div>
                        </div>
                        <div class="position-relative form-group">
                            <label for="dob">Date Of Birth</label>
                            <!-- <input id="dob" v-model="customer.dob" v-validate="'required'" type="text" class="form-control" name="dob"> -->
                            <VueJqueryCalendar v-model="customer.dob" v-validate="'required'" name="dob" date-format="dd-mm-yy" :readonly="true" :change-month="true" :change-year="true" class-name="form-control" />
                            <span v-show="errors.has('dob')" class="text-danger">{{ errors.first('dob') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="profile_img_path">Profile Photo</label><br>
                            <img v-show="showPreview" :src="profile_img_path" width="25%" style="border: 1px solid #cac2c2;" />
                            <input id="profilePath" ref="profilePath" type="file" class="form-control" accept="image/*" name="profilePath" style="display:none;" @change="onImageUpload()">             
                        </div>
                        <div class="position-relative form-group">
                            <label></label>
                            <button class="btn btn-outline-alternate-new" @click.prevent="$refs.profilePath.click()">Upload Image</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">physical detail</h5>
                        <div class="position-relative form-group">
                            <label for="height">Height (centimeters)</label>
                            <input id="height" v-model="customer.height" v-validate="'required'" type="number" class="form-control" name="height" >
                            <span v-show="errors.has('height')" class="text-danger">{{ errors.first('height') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="weight">Weight (kg)</label>
                            <input id="weight" v-model="customer.weight" v-validate="'required'" type="number" class="form-control" name="weight" >
                            <span v-show="errors.has('weight')" class="text-danger">{{ errors.first('weight') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="chest">Chest (centimeters)</label>
                            <input id="chest" v-model="customer.chest" v-validate="'required'" type="number" class="form-control" name="chest">
                            <span v-show="errors.has('chest')" class="text-danger">{{ errors.first('chest') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="waist">Waist (centimeters)</label>
                            <input id="waist" v-model="customer.waist" v-validate="'required'" type="number" class="form-control" name="waist" >
                            <span v-show="errors.has('waist')" class="text-danger">{{ errors.first('waist') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="thigh">Thigh (centimeters)</label>
                            <input id="thigh" v-model="customer.thigh" v-validate="'required'" type="number" class="form-control" name="thigh" >
                            <span v-show="errors.has('thigh')" class="text-danger">{{ errors.first('thigh') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="arms">Arms (centimeters)</label>
                            <input id="arms" v-model="customer.arms" v-validate="'required'" type="number" class="form-control" name="arms" >
                            <span v-show="errors.has('arms')" class="text-danger">{{ errors.first('arms') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="fat">Fat (body fat percentage)</label>
                            <input id="fat" v-model="customer.fat" v-validate="'required'" type="number" class="form-control" name="fat" >
                            <span v-show="errors.has('fat')" class="text-danger">{{ errors.first('fat') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="interestedArea">Interested Area</label>
                            <textarea id="interestedArea" v-model="customer.interestedArea" rows="2" class="form-control" name="interestedArea"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Contact Detail</h5>
                        <div class="position-relative form-group">
                            <label for="phone">Phone</label>
                            <input id="phone" v-model="customer.phone" v-validate="'required'" type="text" class="form-control" name="phone">
                            <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="address">Address</label>
                            <textarea id="address" v-model="customer.address" v-validate="'required'" rows="2" class="form-control" name="address"></textarea>
                            <span v-show="errors.has('address')" class="text-danger">{{ errors.first('address') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="city">City</label>
                            <input id="city" v-model="customer.city" v-validate="'required'" type="text" class="form-control" name="city">
                            <span v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="state">State</label>
                            <input id="state" v-model="customer.state" v-validate="'required'" type="text" class="form-control" name="state">
                            <span v-show="errors.has('state')" class="text-danger">{{ errors.first('state') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="zipcode">Zipcode</label>
                            <input id="zipcode" v-model="customer.zipcode" v-validate="'required'" type="text" class="form-control" name="zipcode">
                            <span v-show="errors.has('zipcode')" class="text-danger">{{ errors.first('zipcode') }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Subscription Detail</h5>
                        <div class="position-relative form-group">
                            <label for="package_name">Package</label>
                            <select id="package_name" v-model="customer.package_name" v-validate="'required'" class="form-control"  name="package_name"    @change="onChange($event)">
                                <option :value="null" disabled>Select package</option>
                                <option v-for="packageData in packages" :key="packageData.name" :value="packageData.name" :selected="customer.package_name ===  packageData.name">{{packageData.name}}</option>
                            </select>
                            <span v-show="errors.has('package_name')" class="text-danger">The package field is required.</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="amount">Amount</label>
                            <div class="input-group" style="padding: 0px;">
                                <input id="amount" v-model="customer.amount" v-validate="'required'" type="number" class="form-control" name="amount" required readonly>
                                <div class="input-group-append">
                                    <span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
                                </div>
                            </div>
                            <span v-show="errors.has('amount')" class="text-danger">{{ errors.first('amount') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="startDate">Start Date</label>
                            <VueJqueryCalendar v-model="customer.startDate" v-validate="'required'" name="startDate" date-format="dd-mm-yy" :readonly="true" class-name="form-control" />
                            <!-- <input id="startDate" v-model="customer.startDate" v-validate="'required'" type="text" class="form-control" name="startDate" placeholder="yyyy-mm-dd"> -->
                            <span v-show="errors.has('startDate')" class="text-danger">{{ errors.first('startDate') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="duration">Duration(In Month)</label>
                            <input id="duration" v-model="customer.duration" v-validate="'required'" type="number" class="form-control" name="duration" required readonly>
                            <span v-show="errors.has('duration')" class="text-danger">{{ errors.first('duration') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="endDate">End Date</label>
                            <!-- <input id="endDate" v-model="endDate" v-validate="'required'" type="text" class="form-control" name="endDate" placeholder="yyyy-mm-dd" required readonly> -->
                            <VueJqueryCalendar v-model="endDate" v-validate="'required'" name="endDate" date-format="dd-mm-yy" :readonly="true" class-name="form-control"/>
                            <span v-show="errors.has('endDate')" class="text-danger">{{ errors.first('endDate') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="trialDays">Trial Days</label>
                            <input id="trialDays" v-model="customer.trialDays" v-validate="'required'" type="number" class="form-control" name="trialDays">
                            <span v-show="errors.has('trialDays')" class="text-danger">{{ errors.first('trialDays') }}</span>
                        </div>
                        <div class="position-relative form-group">
                            <label for="remark">Remark</label>
                            <textarea id="remark" v-model="customer.remark" rows="2" class="form-control" name="remark"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mb-4 mt-3 col-sm-12">
                <button class="btn btn-outline-success-new" style="width:23%" type="submit">SUBMIT</button>
            </div>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';
import VueJqueryCalendar from 'vue-jquery-calendar';

export default {
    name: 'AddCustomerForm',
    components: {
		VueJqueryCalendar,
	},
    data() {
		return {
            customer: {
                gender:"female",
                package_name: null,
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
                interestedArea: '',
                phone: null,
                address: null,
                city: null,
                state: null,
                zipcode: null,
                amount: null,
                startDate: moment().format("DD-MM-YYYY"),
                duration: 0,
                endDate: null,
                trialDays: 0,
                remark: '',
                profileImage: ''
            },
            packages: null,
			profile_img_path: null,
			showPreview: false,
		}
    },
    computed:{
        endDate() {
            const currentDate = moment(this.customer.startDate, 'DD-MM-YYYY');
			const endDate = moment(currentDate).add(this.customer.duration, 'M').endOf('month').format('DD-MM-YYYY');
			return endDate;
		}
    },
	async mounted() {
        await this.getPackageList();
	},
	methods: {
        async getPackageList() {
            try {
                const res = await axios.get('/api/v1/package/list')
                this.packages = res.data.data
            } catch (err) {
                this.$snotify.error(null, err.message);
            }
        },
        async submitForm() 
        {
			try{
                const result = await this.$validator.validateAll();
				if(!result){
					return
                }
                
                const customerData = new FormData();
                
                _.forEach(this.customer, (customerProperty, key) => {
                    customerData.append(key, customerProperty);
                });
    
                customerData.append('endDate', this.endDate)

                let res = await axios.post('/api/v1/customer/create', customerData ,{ headers: {'Content-Type': 'multipart/form-data'}})
                
                this.$router.push({name: 'customerlist', params: { message: res.data.message }});
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);
		  	}
		},
        onImageUpload() {
            this.customer.profileImage = this.$refs.profilePath.files[0];

            const reader  = new FileReader();
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
            this.packages.forEach((packageDetail) => {
				if(packageDetail.name === event.target.value)
                {
                    this.customer.amount = packageDetail.price
                    this.customer.duration = packageDetail.duration
                }
			});
        },
	}
}
</script>