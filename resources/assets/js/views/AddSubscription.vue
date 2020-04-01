<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-bell icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>SUBSCRIPTION DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
            		<h5 class="card-title">Subscription Detail</h5>
					<div class="position-relative form-group">
                        <label for="user_id">Customer</label>
                        <select id="user_id" v-model="subscription.user_id" class="form-control" name="user_id" required>
                            <option v-for="user in users" :key="user.id" :value="user.id" :selected="subscription.user_id ===  user.id">{{user.first_name}} {{user.last_name}} </option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="package_id">Package</label>
                        <select id="package_id" v-model="subscription.package_id" class="form-control" name="package_id" required  @change="onChange($event)">
                            <option v-for="packageData in packages" :key="packageData.id" :value="packageData.id" :selected="subscription.package_id ===  packageData.id">{{packageData.name}}</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="amount">Amount</label>
                        <input id="amount" v-model="subscription.amount" type="number" class="form-control" name="amount" required readonly>
                    </div>
                    <div class="position-relative form-group">
                        <label for="start_date">Start Date</label>
                        <input id="start_date" v-model="subscription.start_date" type="text" class="form-control" name="start_date"  placeholder="yyyy-mm-dd" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="duration">Duration(In Month)</label>
                        <input id="duration" v-model="subscription.duration" type="number" class="form-control" name="duration" required readonly>
                    </div>
                    <div class="position-relative form-group">
                        <label for="end_date">End Date</label>
                        <input id="end_date" v-model="endDate" type="text" class="form-control" name="end_date" placeholder="yyyy-mm-dd" required readonly>
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
	                	<button class="btn btn-outline-info" type="submit">SUBMIT</button>
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
var moment = require('moment');
export default {
	name: 'AddProductView',
	components: {
		DashboardPage
	},
	data() {
		return {
			subscription:{
				package_id: null,
				amount: null,
                start_date: moment().format("YYYY-MM-DD"),
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
		endDate()
		{
			let endDate = null;
            const currentDate = moment(this.subscription.start_date);
			endDate = moment(currentDate).add(this.subscription.duration, 'M').endOf('month').format('YYYY-MM-DD');
			return endDate;
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				const id       = this.$route.params.id
				const res      = await axios.get('/api/v1/subscription/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.subscription = res.data.data
		    }

		    const packageRes      = await axios.get('/api/v1/package/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.packages = packageRes.data.data
			
			const userRes = await axios.get('/api/v1/customer/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.users = userRes.data.data
			
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.subscription) 
			 	{
					 let res = null
					 this.subscription.end_date = this.endDate;
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('/api/v1/subscription/update', this.subscription ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('/api/v1/subscription/create', this.subscription ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
		    
		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/subscription-list');
						this.$snotify.success(null, res.data.message);
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);
		  	}

		},
		resetForm() {
			this.subscription = null;	
		},
		onChange(event) {
			this.packages.forEach((packageDetail) => {
				if(packageDetail.id == event.target.value )
                {
                    this.subscription.amount = packageDetail.price
                    this.subscription.duration = packageDetail.duration
                }
			});
        },

	}
}
</script>