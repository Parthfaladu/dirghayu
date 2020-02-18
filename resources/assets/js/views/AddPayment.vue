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
	                <div>PAYMENT DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
                    <div class="position-relative form-group">
                        <label for="subscription_id">Customer</label>
                        <select class="form-control" name="subscription_id" v-model="payment.subscription_id" id="subscription_id" required>
							<option v-for="subscription in subscriptions" :key="subscription.id" :value="subscription.id" :selected="payment.subscription_id ===  subscription.id">{{subscription.user.first_name}} {{subscription.user.last_name}}</option>
                        </select>
                    </div>
	            	<div class="position-relative form-group">
                        <label for="paid_amount">Paid Amount</label>
                        <input type="number" class="form-control" name="paid_amount" v-model="payment.paid_amount" id="paid_amount" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="remaining_amount">Remaining Amount</label>
                        <input type="number" class="form-control" name="remaining_amount" v-model="payment.remaining_amount" id="remaining_amount" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="payment_source">Payment Source</label>
                        <select class="form-control" name="payment_source" v-model="payment.payment_source" id="payment_source" required>
                        	<option value="cash">Cash</option>
                            <option value="credit_card">Credit Card</option>
                            <option value="debit_card">Debit Card</option>
                            <option value="net_banking">Net Banking</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="remark">Remark</label>
                        <textarea rows="2" class="form-control" name="remark" v-model="payment.remark" id="remark" required></textarea>
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
	name: 'AddPayment',
	components: {
		DashboardPage
	},
	data() {
		return {
			payment:{
				subscription_id: null,
				paid_amount: null,
                remaining_amount: null,
                payment_source:'cash',
				remark:null
			},
			subscriptions:null,
			
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				let id       = this.$route.params.id
				let res      = await axios.get('http://localhost:8000/api/v1/payment/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.payment = res.data.data
			}
			
			let subscriptionRes = await axios.get('http://localhost:8000/api/v1/payment/customer', { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
		    this.subscriptions = subscriptionRes.data.data
			
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.payment) 
			 	{
			 		let res = null
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('http://localhost:8000/api/v1/payment/update', this.payment ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
						res = await axios.post('http://localhost:8000/api/v1/payment/create', this.payment ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
						console.log(res.data.message);
						this.$snotify.success("aaa");
			 		}
		    
		        	if(res.data.status == "success")
		        	{
						this.resetForm();
						this.$snotify.success(null, res.data.message);
						this.$router.push('/payment-list');
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);
		  	}

		},
		resetForm() {
			this.payment = null;	
		}
	}
}
</script>