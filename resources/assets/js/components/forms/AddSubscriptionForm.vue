<template>
    <form  @submit.prevent="submitForm()">
        <h5 class="card-title">Subscription Detail</h5>
        <div class="position-relative form-group">
            <label for="user_id">Customer</label>
            <select id="user_id" v-model="subscription.user_id" class="form-control" name="user_id" v-validate="'required'">
                <option v-for="user in users" :key="user.id" :value="user.id" :selected="subscription.user_id ===  user.id">{{user.first_name}} {{user.last_name}} </option>
            </select>
			<span v-show="errors.has('user_id')" class="text-danger">The Customer name field is required.</span>
        </div>
        <div class="position-relative form-group">
            <label for="package_name">Package</label>
            <select id="package_name" v-model="subscription.package_name" class="form-control" name="package_name" v-validate="'required'"  @change="onChange($event)">
                <option v-for="packageData in packages" :key="packageData.id" :value="packageData.name" :selected="subscription.package_name ===  packageData.name">{{packageData.name}}</option>
            </select>
			<span v-show="errors.has('package_name')" class="text-danger">The Package field is required.</span>
        </div>
        <div class="position-relative form-group">
            <label for="amount">Amount</label>
			<div class="input-group" style="padding: 0px;">
            	<input id="amount" v-model="subscription.amount" type="number" class="form-control" name="amount" v-validate="'required'" readonly>
				<div class="input-group-append">
					<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
				</div>
			</div>
			<span v-show="errors.has('amount')" class="text-danger">{{ errors.first('amount') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="start_date">Start Date</label>
            <!-- <input id="start_date" v-model="subscription.start_date" type="text" class="form-control" name="start_date"  placeholder="yyyy-mm-dd" v-validate="'required'"> -->
			<VueJqueryCalendar v-model="subscription.start_date" v-validate="'required'" name="start_date" date-format="dd-mm-yy" :readonly="true" class-name="form-control" />
			<span v-show="errors.has('start_date')" class="text-danger">{{ errors.first('start_date') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="duration">Duration(In Month)</label>
            <input id="duration" v-model="subscription.duration" type="number" class="form-control" name="duration" v-validate="'required'" readonly>
			<span v-show="errors.has('duration')" class="text-danger">{{ errors.first('duration') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="end_date">End Date</label>
            <!-- <input id="end_date" v-model="endDate" type="text" class="form-control" name="end_date" placeholder="yyyy-mm-dd" v-validate="'required'" readonly> -->
			<VueJqueryCalendar v-model="endDate" v-validate="'required'" name="end_date" date-format="dd-mm-yy" :readonly="true" class-name="form-control"/>
			<span v-show="errors.has('end_date')" class="text-danger">{{ errors.first('end_date') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="trial_days">Trial Days</label>
            <input id="trial_days" v-model="subscription.trial_days" type="number" class="form-control" name="trial_days">
        </div>
        <div class="position-relative form-group">
            <label for="remark">Remark</label>
            <textarea id="remark" v-model="subscription.remark" rows="2" class="form-control" name="remark"></textarea>
        </div>
        
        <div class="text-center">
            <button class="btn btn-outline-success-new" type="submit">SUBMIT</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import VueJqueryCalendar from 'vue-jquery-calendar';

export default {
	name: 'AddSubscriptionForm',
	components: {
		VueJqueryCalendar,
	},
    data() {
		return {
			subscription:{
				package_name: null,
				amount: null,
                start_date: moment().format("DD-MM-YYYY"),
                duration: 0,
                end_date: null,
                trial_days: 0,
                remark: null,
			},
			packages: null,
			users: null,
			
		}
	},
	computed:{
		endDate() {
			let endDate = null;
            const currentDate = moment(this.subscription.start_date, 'DD-MM-YYYY');
			endDate = moment(currentDate).add(this.subscription.duration, 'M').endOf('month').format('DD-MM-YYYY');
			return endDate;
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null) {
				this.getSubscriptionList();
		    }
			this.getPackageList();
			await this.getCustomerList();
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async getSubscriptionList() {
			const res = await axios.get('/api/v1/subscription/list/'+this.$route.params.id)
			this.subscription = res.data.data
		},
		async getPackageList() {
			const packageRes = await axios.get('/api/v1/package/list')
			this.packages = packageRes.data.data
		},
		async getCustomerList() {
			const userRes = await axios.get('/api/v1/customer/list')
			this.users = userRes.data.data
		},
		async submitForm() {
			try {
				const result = await this.$validator.validateAll();
				if(!result){
					return
				}
				let res = null
				this.subscription.end_date = this.endDate;

				if(this.$route.params.id != null) {
					res = await axios.post('/api/v1/subscription/update', this.subscription)
				} else {
					res = await axios.post('/api/v1/subscription/create', this.subscription)
				}
		
				this.$router.push({name: 'subscriptionlist', params: { message: res.data.message }});
		  	}
		  	catch(err) {
		  		this.$snotify.error(null, err.message);
		  	}
		},
		onChange(event) {
			this.packages.forEach((packageDetail) => {
				if(packageDetail.name === event.target.value )
                {
                    this.subscription.amount = packageDetail.price
                    this.subscription.duration = packageDetail.duration
                }
			});
        },
	}
}
</script>