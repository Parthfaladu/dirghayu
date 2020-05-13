<template>
	<DashboardPage v-can:add__invoice>
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
                                <label for="bill_to">Bill To</label>
                                <input id="customer_name" v-model="invoice.customer_name" type="text" class="form-control" name="customer_name" required>
                                <!-- <select class="form-control" name="bill_to" v-model="invoice.bill_to" id="bill_to" required>
                                    <option v-for="customer in customers" :key="customer.id" :value="customer.id" :selected="invoice.bill_to ===  customer.id">{{customer.first_name}} {{customer.last_name}} </option>
                                </select> -->
                            </div>
                            <div class="position-relative form-group">
                                <label for="customer_address">Customer Address</label>
                                <textarea id="customer_address" v-model="invoice.customer_address" rows="2" class="form-control" name="customer_address" required></textarea>
                            </div>
                            <div class="position-relative form-group">
                                <label for="invoice_date">Invoice Date</label>
								<VueJqueryCalendar v-model="invoice.invoice_date" v-validate="'required'" name="invoice_date" date-format="dd-mm-yy" :readonly="true" class-name="form-control"/>
                                <!-- <input id="invoice_date" v-model="invoice.invoice_date" type="text" class="form-control" name="invoice_date" placeholder="yyyy-mm-dd" required> -->
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="position-relative form-group">
                                <label for="customer_email">Customer Email</label>
                                <input id="customer_email" v-model="invoice.customer_email" type="email" class="form-control" name="customer_email" required>
                            </div>
                            <div class="position-relative form-group">
                                <label for="customer_phone">Customer Phone</label>
                                <input id="customer_phone" v-model="invoice.customer_phone" type="text" class="form-control" name="customer_phone" required>
                            </div>
                        </div>
                    </div>
                    <table align="center" width="100%" class="table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Quantity (Each)</th>
								<th>Rate {{ $store.getters['init/currency'] }}</th>
								<th>Amount {{ $store.getters['init/currency'] }}</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(invoiceItem, index) in invoice.invoiceitems" :key="index">
								<td><input id="name" v-model="invoiceItem.name" type="text" class="form-control" name="name" readonly placeholder="Item Name" required></td>
								<td><input id="quantity" v-model="invoiceItem.quantity" type="number" class="form-control" name="quantity" placeholder="Item Quantity" required></td>
								<td><input id="rate" v-model="invoiceItem.rate" type="number" class="form-control" name="rate" placeholder="Item Rate" required></td>
								<td><input id="amount" type="number" class="form-control" name="amount" :value="invoiceItem.quantity*invoiceItem.rate" placeholder="Item Amount" style="border:none;" readonly required></td>
								<td><button type="button" class="btn btn-danger" @click="removeRow(index)">Remove</button></td>
							</tr>
							<tr>
								<td><button type="button" class="btn btn-info" @click="addRow()">Add Item</button></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Subtotal</td>
								<td>
									<!-- <input id="subtotal" v-model="subTotal" type="number" class="form-control" name="subtotal" style="border:none;" readonly required> -->
									<div class="input-group" style="margin-top:0px;">
										<input id="subtotal" v-model="subTotal" v-validate="'required'" type="number" class="form-control" name="subtotal" style="border:none;" readonly>
										<div class="input-group-append">
											<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Discount</td>
								<td>
									<div class="input-group" style="margin-top:0px;">
										<input id="discount" v-model="invoice.discount" v-validate="'required'" type="number" class="form-control" name="discount">
										<div class="input-group-append">
											<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
										</div>
									</div>
									<!-- <input id="discount" v-model="invoice.discount" type="number" class="form-control" name="discount" required> -->
								</td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Tax</td>
								<td>
									<!-- <input id="tax" v-model="invoice.tax" type="number" class="form-control" name="tax" required> -->
									<div class="input-group" style="margin-top:0px;">
										<input id="tax" v-model="invoice.tax" v-validate="'required'" type="number" class="form-control" name="tax">
										<div class="input-group-append">
											<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Total</td>
								<td>
									<!-- <input id="total" v-model="totalVal" type="number" class="form-control" name="total" style="border:none;" readonly required> -->
									<div class="input-group" style="margin-top:0px;">
										<input id="total" v-model="totalVal" v-validate="'required'" type="number" class="form-control" name="total" style="border:none;" readonly>
										<div class="input-group-append">
											<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td>Invoice Generated By</td>
								<td>
									<select id="user_id" v-model="invoice.user_id" class="form-control" name="user_id" required>
                                    	<option v-for="staff in staffs" :key="staff.id" :value="staff.id" :selected="invoice.user_id ===  staff.id">{{staff.first_name}} {{staff.last_name}} </option>
                                	</select>
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
import moment from 'moment';
import VueJqueryCalendar from 'vue-jquery-calendar';
export default {
	name: 'AddInvoice',
	components: {
		DashboardPage,
		VueJqueryCalendar,
	},
	data() {
		return {
			invoice:{
                bill_to: null,
                customer_name: null,
                customer_email: null,
                customer_address: null,
                customer_phone: null,
                invoice_date: moment().format("DD-MM-YYYY"),
                subtotal: 0,
                discount: 0,
                tax: 0,
                total: 0,
				user_id: this.$store.state.init.user.id,
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
			totalVal = this.subTotal - parseInt(this.invoice.discount) + parseInt(this.invoice.tax);
			return totalVal;
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null) {
				await this.getPaymentSubscriptionList();
		    }
			await this.getStaffMemberList();
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async getPaymentSubscriptionList() {
			const res = await axios.get('/api/v1/payment/subscription/'+this.$route.params.id)
			this.invoice.bill_to                  = res.data.data.user_id
			this.invoice.customer_name            = res.data.data.user.first_name+' '+res.data.data.user.last_name
			this.invoice.customer_email           = res.data.data.user.email
			this.invoice.customer_address         = res.data.data.user.address
			this.invoice.customer_phone           = res.data.data.user.phone
			this.invoice.invoice_date             = moment().format("DD-MM-YYYY")
			this.invoice.invoiceitems[0].name     = res.data.data.package_name
			this.invoice.invoiceitems[0].quantity = 1
			this.invoice.invoiceitems[0].rate     = res.data.data.amount
		},
		async getStaffMemberList() {
			const staffRes = await axios.post('/api/v1/staff/member/list' , null)
			this.staffs = staffRes.data.data
		},
		async submitForm() {
			try {
				let res = null
				this.invoice.invoiceitems.forEach((invoiceItem) => {
					invoiceItem.amount += invoiceItem.quantity * invoiceItem.rate
				});
				this.invoice.subtotal = this.subTotal;
				this.invoice.total    = this.totalVal;
				res = await axios.post('/api/v1/invoice/create', this.invoice)
				// if(this.$route.params.id != null) {
				// 	res = await axios.post('/api/v1/invoice/update', this.invoice)
				// } else {
				// 	res = await axios.post('/api/v1/invoice/create', this.invoice)
				// }		
				this.$router.push('/invoice-list');
				this.$snotify.success(null, res.data.message);
		  	}
		  	catch(err) {
		  		this.$snotify.error(null, err.message);
		  	}
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