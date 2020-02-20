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
                        <label for="packageId">Package</label>
                        <select class="form-control" name="packageId" v-model="subscription.packageId" id="packageId" @change="onChange($event)"  required>
                            <option v-for="packageData in packages" :key="packageData.id" :value="packageData.id" :selected="subscription.packageId ===  packageData.id">{{packageData.name}}</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="amount">Amount</label>
                        <input type="number" class="form-control" name="amount" v-model="subscription.amount" id="amount" required readonly>
                    </div>
                    <div class="position-relative form-group">
                        <label for="startDate">Start Date</label>
                        <input type="text" class="form-control" name="startDate" v-model="subscription.startDate" id="startDate" v-on:keypress="findEndDate($event)" @change="findEndDate($event)" placeholder="yyyy-mm-dd" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="duration">Duration(In Month)</label>
                        <input type="number" class="form-control" name="duration" v-model="subscription.duration" id="duration" required readonly>
                    </div>
                    <div class="position-relative form-group">
                        <label for="endDate">End Date</label>
                        <input type="text" class="form-control" name="endDate" v-model="subscription.endDate" id="endDate" placeholder="yyyy-mm-dd" required readonly>
                    </div>
                    <div class="position-relative form-group">
                        <label for="trialDays">Trial Days</label>
                        <input type="number" class="form-control" name="trialDays" v-model="subscription.trialDays" id="trialDays">
                    </div>
                    <div class="position-relative form-group">
                        <label for="remark">Remark</label>
                        <textarea rows="2" class="form-control" name="remark" v-model="subscription.remark" id="remark"></textarea>
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
	name: 'AddProductView',
	components: {
		DashboardPage
	},
	data() {
		return {
			subscription:{
				packageId: null,
				amount: null,
                startDate: null,
                duration: 0,
                endDate: null,
                trialDays: 0,
                remark: null,
			},
			packages: null,
			
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				let id       = this.$route.params.id
				let res      = await axios.get('http://localhost:8000/api/v1/subscription/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.subscription = res.data.data
		    }

		    let res      = await axios.get('http://localhost:8000/api/v1/package/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
            this.packages = res.data.data
			
		} catch (err) {
			console.log(err)
			//this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.subscription) 
			 	{
			 		let res = null
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('http://localhost:8000/api/v1/subscription/update', this.subscription ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('http://localhost:8000/api/v1/subscription/create', this.subscription ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
		    
		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/subscription-list');
						//this.$snotify.success(null, res.data.message);
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		console.log(err)
		  		//this.$snotify.error(null, err.message);
		  	}

		},
		resetForm() {
			this.subscription = null;	
		},
		onChange(event) {
            for(let i = 0;i <= this.packages.length; i++ )
            {
                if(this.packages[i].id == event.target.value )
                {
                    this.subscription.amount = this.packages[i].price
                    this.subscription.duration = this.packages[i].duration
                }
            }
        },
        findEndDate(event)
        {
            let moment = require('moment');
            let currentDate = moment(this.subscription.startDate);
            this.subscription.endDate = moment(currentDate).add(this.subscription.duration, 'M').endOf('month').format('YYYY-MM-DD');
                       
        }
	}
}
</script>