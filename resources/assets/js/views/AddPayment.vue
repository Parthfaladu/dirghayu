<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-cash icon-gradient bg-premium-dark text-danger">
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
                        <select id="user_id" v-model="payment.user_id" class="form-control" name="user_id" required @change="onChange($event)">
							<option v-for="(user, index) in customers" :key="index" :value="index" :selected="payment.user_id ===  index">{{user}}</option>
                        </select>
                    </div>
					<div class="position-relative form-group">
                        <label for="package_id">Package</label>
						<select v-model="payment.package_id" class="form-control" name="package_id" required @change="onPackageChange($event)">
                        	<option v-for="packageData in packages" :key="packageData.id" :value="packageData.id" :selected="payment.package_id ===  packageData.id">{{packageData.name}}</option>
                        </select>
                    </div>
	            	<div class="position-relative form-group">
                        <label for="paid_amount">Payable Amount</label>
                        <input id="paid_amount" v-model="payment.paid_amount" type="number" class="form-control" name="paid_amount" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="remaining_amount">Remaining Amount</label>
                        <input id="remaining_amount" v-model="remainingAmount" type="number" class="form-control" name="remaining_amount" readonly required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="payment_source">Payment Source</label>
                        <select id="payment_source" v-model="payment.payment_source" class="form-control" name="payment_source" required>
                        	<option value="cash">Cash</option>
                            <option value="credit_card">Credit Card</option>
                            <option value="debit_card">Debit Card</option>
                            <option value="net_banking">Net Banking</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="remark">Remark</label>
                        <textarea id="remark" v-model="payment.remark" rows="2" class="form-control" name="remark" required></textarea>
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

export default {
	name: 'AddPayment',
	components: {
		DashboardPage
	},
	data() {
		return {
			payment:{
				subscription_id: null,
				paid_amount: 0,
                remaining_amount: 0,
                payment_source:'cash',
				remark:null,
				package_id: null,
				user_id: null
			},
			customers: null,
			packages: null,
			
		}
	},
	computed:{
		remainingAmount()
		{
			console.log('aaa')
			let remainingAmount = this.payment.remaining_amount;
			remainingAmount = remainingAmount - this.payment.paid_amount;
			return remainingAmount;
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				const id       = this.$route.params.id
				const res      = await axios.get('/api/v1/payment/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.payment = res.data.data
			}
			
			const customersRes = await axios.get('/api/v1/payment/customer', { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.customers = customersRes.data.data
			
			
		} catch (err) {
		 	this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.payment) 
			 	{
					this.payment.remaining_amount = this.remainingAmount;
			 		// if(this.payment.remaining_amount >= 0)
			 		// {
			 		// 	this.payment.remaining_amount = this.payment.remaining_amount - this.payment.paid_amount;
			 		// }
					
			 		let res = null
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('/api/v1/payment/update', this.payment ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
						res = await axios.post('/api/v1/payment/create', this.payment ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
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
		},
		async onChange(event)
		{
			const res = await axios.get('/api/v1/payment/package/'+event.target.value,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			this.packages = res.data.data;
			console.log(this.packages)
		},
		async onPackageChange(event)
		{
			const res = await axios.post('/api/v1/payment/amount',{user_id: this.payment.user_id,package_id:event.target.value} , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			if(res.data.message == 'lastpayment')
			{
				this.payment.subscription_id = res.data.data.subscription_id
				this.payment.remaining_amount = res.data.data.remaining_amount
			}
			if(res.data.message == 'subscription')
			{
				this.payment.subscription_id = res.data.data.id
				this.payment.remaining_amount = res.data.data.amount
			}
			
		},
	}
}
</script>