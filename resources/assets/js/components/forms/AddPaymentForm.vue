<template>
    <form  @submit.prevent="submitForm()">
        <div class="position-relative form-group">
            <label for="subscription_id">Customer</label>
            <select id="user_id" v-model="payment.user_id" class="form-control" name="user_id" v-validate="'required'" @change="onChange($event)">
                <option v-for="(customer, index) in customers" :key="index" :value="customer.id" :selected="payment.user_id ===  customer.id">{{customer.first_name}} {{customer.last_name}}</option>
            </select>
			<span v-show="errors.has('user_id')" class="text-danger">The Customer name field is required.</span>
        </div>
        <div class="position-relative form-group">
            <label for="package_id">Package</label>
            <select v-model="payment.package_id" class="form-control" name="package_id" v-validate="'required'" @change="onPackageChange($event)">
                <option v-for="packageData in packages" :key="packageData.id" :value="packageData.id" :selected="payment.package_id ===  packageData.id">{{packageData.name}}</option>
            </select>
			<span v-show="errors.has('package_id')" class="text-danger">The package name field is required.</span>
        </div>
        <div class="position-relative form-group">
            <label for="paid_amount">Payable Amount</label>
			<div class="input-group" style="margin-top:0px;">
            	<input id="paid_amount" v-model="payment.paid_amount" type="number" class="form-control" name="paid_amount" v-validate="'required'">
				<div class="input-group-append">
						<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
                </div>
			</div>
			<span v-show="errors.has('paid_amount')" class="text-danger">{{ errors.first('paid_amount') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="remaining_amount">Remaining Amount</label>
			<div class="input-group" style="margin-top:0px;">
            	<input id="remaining_amount" v-model="remainingAmount" type="number" class="form-control" name="remaining_amount" readonly v-validate="'required'">
				<div class="input-group-append">
						<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
                </div>
			</div>
			<span v-show="errors.has('remaining_amount')" class="text-danger">{{ errors.first('remaining_amount') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="payment_source">Payment Source</label>
            <select id="payment_source" v-model="payment.payment_source" class="form-control" name="payment_source" v-validate="'required'">
                <option value="cash">Cash</option>
                <option value="credit_card">Credit Card</option>
                <option value="debit_card">Debit Card</option>
                <option value="net_banking">Net Banking</option>
            </select>
			<span v-show="errors.has('payment_source')" class="text-danger">{{ errors.first('payment_source') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="remark">Remark</label>
            <textarea id="remark" v-model="payment.remark" rows="2" class="form-control" name="remark"></textarea>
        </div>
        
        <div class="text-center">
            <button class="btn btn-outline-success-new" type="submit">SUBMIT</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';

export default {
    name: 'AddPaymentForm',
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
		remainingAmount() {
			let remainingAmount = this.payment.remaining_amount;
			remainingAmount = remainingAmount - this.payment.paid_amount;
			return remainingAmount;
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null) {
				this.getPaymentList();
			}
			await this.getPaymentCustomerList();
		} catch (err) {
		 	this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async getPaymentList() {
			const res      = await axios.get('/api/v1/payment/list/'+this.$route.params.id)
			this.payment = res.data.data
		},
		async getPaymentCustomerList() {
			const customersRes = await axios.get('/api/v1/payment/customer')
			this.customers = customersRes.data.data
		},
		async submitForm() {
			try {
				const result = await this.$validator.validateAll();
				if(!result){
					return
				}
				this.payment.remaining_amount = this.remainingAmount;
				
				let res = null
				if(this.$route.params.id != null) {
					res = await axios.post('/api/v1/payment/update', this.payment)
					this.$snotify.success(null, res.data.message);
				} else {
					res = await axios.post('/api/v1/payment/create', this.payment)
					this.$router.push({name: 'paymentlist', params: { message: res.data.message }});
				}
		  	}
		  	catch(err) {
				this.$snotify.error(null, err.message);
		  	}
		},
		async onChange(event) {
			const res = await axios.get('/api/v1/payment/package/'+event.target.value)
			this.packages = res.data.data;
		},
		async onPackageChange(event) {
			const singlePackage = _.find(this.packages, (singlePackage) => singlePackage.id === parseInt(event.target.value));

			const res = await axios.post('/api/v1/payment/amount',{user_id: this.payment.user_id, package_name:singlePackage.name} , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			
			this.payment.subscription_id = res.data.data.id
			if(res.data.data.payment.length > 0) {
				this.payment.remaining_amount = res.data.data.payment[0].remaining_amount
			}
			else {
				this.payment.remaining_amount = res.data.data.amount
			}
		},
	}
}
</script>