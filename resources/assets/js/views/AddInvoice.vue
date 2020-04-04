<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-news-paper icon-gradient bg-premium-dark text-danger">
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
                                <select id="bill_to" v-model="invoice.bill_to" v-validate="'required'" class="form-control"  name="bill_to">
                                    <option v-for="customer in customers" :key="customer.id" :value="customer.id" :selected="invoice.bill_to ===  customer.id">{{customer.first_name}} {{customer.last_name}} </option>
                                </select>
								<span v-show="errors.has('bill_to')" class="text-danger">{{ errors.first('bill_to') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="customer_address">Customer Address</label>
                                <textarea id="customer_address" v-model="invoice.customer_address" v-validate="'required'" rows="2"  class="form-control" name="customer_address"></textarea>
								<span v-show="errors.has('customer_address')" class="text-danger">{{ errors.first('customer_address') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="invoice_date">Invoice Date</label>
                                <input id="invoice_date" v-model="invoice.invoice_date" v-validate="'required'" type="text" class="form-control" name="invoice_date" placeholder="yyyy-mm-dd">
								<span v-show="errors.has('invoice_date')" class="text-danger">{{ errors.first('invoice_date') }}</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="position-relative form-group">
                                <label for="customer_email">Customer Email</label>
                                <input id="customer_email" v-model="invoice.customer_email" v-validate="'required'" type="email" class="form-control" name="customer_email">
								<span v-show="errors.has('customer_email')" class="text-danger">{{ errors.first('customer_email') }}</span>
                            </div>
                            <div class="position-relative form-group">
                                <label for="customer_phone">Customer Phone</label>
                                <input id="customer_phone" v-model="invoice.customer_phone" v-validate="'required'" type="text" class="form-control" name="customer_phone">
								<span v-show="errors.has('customer_phone')" class="text-danger">{{ errors.first('customer_phone') }}</span>
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
								<td><input id="name" v-model="invoiceItem.name" v-validate="'required'" type="text" class="form-control" name="name" placeholder="Item Name"><span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span></td>
								<td><input id="quantity" v-model="invoiceItem.quantity" v-validate="'required'" type="number" class="form-control" name="quantity" placeholder="Item Quantity"><span v-show="errors.has('quantity')" class="text-danger">{{ errors.first('quantity') }}</span></td>
								<td><input id="rate" v-model="invoiceItem.rate" v-validate="'required'" type="number" class="form-control" name="rate" placeholder="Item Rate"><span v-show="errors.has('rate')" class="text-danger">{{ errors.first('rate') }}</span></td>
								<td><input id="amount" v-validate="'required'" type="number" class="form-control" name="amount" :value="invoiceItem.quantity*invoiceItem.rate" placeholder="Item Amount" style="border:none;" readonly><span v-show="errors.has('amount')" class="text-danger">{{ errors.first('amount') }}</span></td>
								<td><button type="button" class="btn btn-danger" @click="removeRow(index)">Remove</button></td>
							</tr>
							<tr>
								<td><button type="button" class="btn btn-info" @click="addRow()">Add Item</button></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Subtotal</td>
								<td><input id="subtotal" v-model="subTotal" v-validate="'required'" type="number" class="form-control" name="subtotal" style="border:none;" readonly>
								<span v-show="errors.has('subTotal')" class="text-danger">{{ errors.first('subTotal') }}</span>
								</td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Discount</td>
								<td><input id="discount" v-model="invoice.discount" v-validate="'required'" type="number" class="form-control" name="discount">
								<span v-show="errors.has('discount')" class="text-danger">{{ errors.first('discount') }}</span>
								</td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Tax</td>
								<td><input id="tax" v-model="invoice.tax" v-validate="'required'" type="number" class="form-control" name="tax">
								<span v-show="errors.has('tax')" class="text-danger">{{ errors.first('tax') }}</span>
								</td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Total</td>
								<td><input id="total" v-model="totalVal" v-validate="'required'" type="number" class="form-control" name="total" style="border:none;" readonly>
								<span v-show="errors.has('totalVal')" class="text-danger">{{ errors.first('totalVal') }}</span>
								</td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Invoice Generated By</td>
								<td>
									<select id="user_id" v-model="invoice.user_id" v-validate="'required'" class="form-control" name="user_id">
                                    	<option v-for="staff in staffs" :key="staff.id" :value="staff.id" :selected="invoice.user_id ===  staff.id">{{staff.first_name}} {{staff.last_name}} </option>
                                	</select>
									<span v-show="errors.has('user_id')" class="text-danger">This Staff Member field is required.</span>
								</td>
							</tr>
						</tbody>
					</table>
					
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
	name: 'AddInvoice',
	components: {
		DashboardPage
	},
	data() {
		return {
			invoice:{
				bill_to: null,
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
				const id       = this.$route.params.id
				const res      = await axios.get('/api/v1/invoice/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.invoice = res.data.data
		    }

		    const customerRes = await axios.get('/api/v1/customer/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.customers = customerRes.data.data

			const staffRes = await axios.post('/api/v1/staff/member/list' , null, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.staffs = staffRes.data.data
			
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
				const result = await this.$validator.validateAll();
				if(!result){
					return
				}
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