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
	                <div>INVOICE DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="position-relative form-group">
                                <label for="to_id">Bill To</label>
                                <input type="text" class="form-control" name="customer_name" v-model="invoice.customer_name" id="customer_name" required>
                                <!-- <select class="form-control" name="bill_to" v-model="invoice.bill_to" id="bill_to" required>
                                    <option v-for="customer in customers" :key="customer.id" :value="customer.id" :selected="invoice.bill_to ===  customer.id">{{customer.first_name}} {{customer.last_name}} </option>
                                </select> -->
                            </div>
                            <div class="position-relative form-group">
                                <label for="customer_address">Customer Address</label>
                                <textarea rows="2" class="form-control" name="customer_address" v-model="invoice.customer_address" id="customer_address" required></textarea>
                            </div>
                            <div class="position-relative form-group">
                                <label for="invoice_date">Invoice Date</label>
                                <input type="text" class="form-control" name="invoice_date" v-model="invoice.invoice_date" id="invoice_date" placeholder="yyyy-mm-dd" required>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="position-relative form-group">
                                <label for="customer_email">Customer Email</label>
                                <input type="email" class="form-control" name="customer_email" v-model="invoice.customer_email" id="customer_email" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="customer_phone">Customer Phone</label>
                                <input type="text" class="form-control" name="customer_phone" v-model="invoice.customer_phone" id="customer_phone" required>
                            </div>
                        </div>
                    </div>
                    <table align="center" width="100%" class="table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Quantity</th>
								<th>Rate</th>
								<th>Amount</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(invoiceItem, index) in invoice.invoiceitems" :key="index">
								<td><input type="text" class="form-control" name="name" v-model="invoiceItem.name" id="name" readonly placeholder="Item Name" required></td>
								<td><input type="number" class="form-control" name="quantity" v-model="invoiceItem.quantity" id="quantity" placeholder="Item Quantity" required></td>
								<td><input type="number" class="form-control" name="rate" v-model="invoiceItem.rate" id="rate" placeholder="Item Rate" required></td>
								<td><input type="number" class="form-control" name="amount" :value="invoiceItem.quantity*invoiceItem.rate" id="amount" placeholder="Item Amount" style="border:none;" readonly required></td>
								<td><button type="button" @click="removeRow(index)" class="btn btn-danger">Remove</button></td>
							</tr>
							<tr>
								<td><button type="button" @click="addRow()" class="btn btn-info">Add Item</button></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Subtotal</td>
								<td><input type="number" class="form-control" name="subtotal" v-model="subTotal" id="subtotal" style="border:none;" readonly required></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Discount</td>
								<td><input type="number" class="form-control" name="discount" v-model="invoice.discount" id="discount" required></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Tax</td>
								<td><input type="number" class="form-control" name="tax" v-model="invoice.tax" id="tax" required></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Total</td>
								<td><input type="number" class="form-control" name="total" v-model="totalVal" id="total" style="border:none;" readonly required></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Invoice Generated By</td>
								<td>
									<select class="form-control" name="user_id" v-model="invoice.user_id" id="user_id" required>
                                    	<option v-for="staff in staffs" :key="staff.id" :value="staff.id" :selected="invoice.user_id ===  staff.id">{{staff.first_name}} {{staff.last_name}} </option>
                                	</select>
								</td>
							</tr>
						</tbody>
					</table>
					
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
	name: 'AddInvoice',
	components: {
		DashboardPage
	},
	data() {
		return {
			invoice:{
                bill_to: null,
                customer_name: null,
                customer_email: null,
                customer_address: null,
                customer_phone: null,
                invoice_date: null,
                subtotal: 0,
                discount: 0,
                tax: 0,
                total: 0,
				user_id: null,
				invoiceitems:[
					{
						name: null,
						quantity: 0,
						rate: 0,
						amount: 0,
					},
				],
			},
			
			staffs: null,
			customers: null,
			
		}
	},
	computed: {
		subTotal() {
			let subTotal = 0;

			this.invoice.invoiceitems.forEach((invoiceItem) => {
				subTotal += invoiceItem.quantity * invoiceItem.rate
			});
			return subTotal;
		},
		totalVal(){
			let totalVal = 0;
			totalVal = this.subTotal + parseInt(this.invoice.discount) + parseInt(this.invoice.tax);
			return totalVal;
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				var moment = require('moment');
				let id       = this.$route.params.id
				let res      = await axios.get('/api/v1/payment/subscription/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
                this.invoice.bill_to                  = res.data.data.user_id
                 this.invoice.customer_name           = res.data.data.user.first_name+' '+res.data.data.user.last_name
                this.invoice.customer_email           = res.data.data.user.email
                this.invoice.customer_address         = res.data.data.user.address
                this.invoice.customer_phone           = res.data.data.user.phone
                this.invoice.invoice_date             = moment().format("YYYY-MM-DD")
                this.invoice.invoiceitems[0].name     = res.data.data.package.name
                this.invoice.invoiceitems[0].quantity = 1
                this.invoice.invoiceitems[0].rate     = res.data.data.package.price
				console.log(this.invoice)
		    }

			let staffRes = await axios.post('/api/v1/staff/member/list' , null, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.staffs = staffRes.data.data
			
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.invoice) 
			 	{
					let res = null
					this.invoice.invoiceitems.forEach((invoiceItem) => {
						invoiceItem.amount += invoiceItem.quantity * invoiceItem.rate
					});
					this.invoice.subtotal = this.subTotal;
					this.invoice.total    = this.totalVal;

			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('/api/v1/invoice/update', this.invoice ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('/api/v1/invoice/create', this.invoice ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
		    
		        	if(res.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/invoice-list');
						this.$snotify.success(null, res.data.message);
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);
		  	}

		},
		resetForm() {
			this.invoice = null;	
			this.invoice.invoiceitems = null;
		},
		addRow(){
			this.invoice.invoiceitems.push({name: null, quantity: 0, rate: 0, amount: 0});
		},
		removeRow(index){
			this.invoice.invoiceitems.splice(index, 1)
		}
	}
}
</script>