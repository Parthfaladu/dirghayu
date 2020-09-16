<template>
	<DashboardPage v-can:add__product_sell>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading mr-auto align-content-start">
					<div class="page-title-icon">
						<i class="pe-7s-shopbag icon-gradient bg-premium-dark text-danger"></i>
					</div>
					<div class="heading-font-weight">PRODUCT SELL</div>
				</div>
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-8 offset-sm-2">
	            <h5 class="card-title"></h5>
	            <form  class="mt-4" @submit.prevent="submitForm()">
	            	<div class="position-relative form-group">
                        <label for="detail">Customer Name</label>
                        <select v-model="productSell.user_id" v-validate="'required'" class="form-control" name="user_id">
							<option :value="null" disabled>Select customer</option>
                        	<option v-for="user in users" :key="user.id" :value="user.id" :selected="productSell.user_id ===  user.id">{{user.first_name}} {{user.last_name}}</option>
                        </select>
						<span v-show="errors.has('user_id')" class="text-danger">The Custmer field is required.</span>
                    </div>
	            	<div class="position-relative form-group">
                        <label for="name">Product Name</label>
                        <select v-model="productSell.product_name" v-validate="'required'" class="form-control" name="product_name">
							<option :value="null" disabled>Select product</option>
                        	<option v-for="product in products" :key="product.id" :value="product.name" :selected="productSell.product_name ===  product.name">{{product.name}}</option>
                        </select>
						<span v-show="errors.has('product_name')" class="text-danger">The product field is required.</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="quantity">Quantity</label>
                        <div class="input-group" style="padding: 0px;">
							<input id="quantity" v-model="productSell.quantity" v-validate="{'required':true, 'min_value':0, 'max_value': quantityMaxValue}" type="text" class="form-control" name="quantity" >
                            <div class="input-group-append">
                                <span id="" class="input-group-text">Each</span>
                            </div>
                        </div>
						<span v-show="errors.has('quantity')" class="text-danger">{{ errors.first('quantity') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="price">Amount</label>
						<div class="input-group" style="padding: 0px;">
							<input id="price" v-model="productSell.paid_amount" v-validate="'required'" type="text" class="form-control" name="amount">
							<div class="input-group-append">
									<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
							</div>
						</div>
						<span v-show="errors.has('amount')" class="text-danger">{{ errors.first('amount') }}</span>
                    </div>
                    <div class="text-center">
	                	<button class="btn btn-outline-success-new" type="submit">SUBMIT</button>
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
import _ from 'lodash';

export default {
	name: 'ProductSellView',
	components: {
		DashboardPage
	},
	data() {
		return {
			productSell:{
				product_name: null,
				user_id: null,
				quantity: null,
				paid_amount:null
			},
			products: null,
			users: null
		}
	},
	computed: {
		quantityMaxValue() {
			if(this.productSell.product_name) {
				const product = _.find(this.products, (product) => product.name === this.productSell.product_name);
				return product ? parseInt(product.quantity) : 1000000;
			}
			return 1000000;
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null) {
				this.getProductSellList();
		    }
		    this.getProductList();
			this.getCustomerList();
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async getProductSellList() {
			const res      = await axios.get('/api/v1/productsell/list/'+this.$route.params.id)
			this.productSell = res.data.data
		},
		async getProductList() {
			const productRes = await axios.get('/api/v1/product/list')
		    this.products = _.filter(productRes.data.data, (product) => product.quantity > 0);
		},
		async getCustomerList() {
			const userRes = await axios.get('/api/v1/customer/list')
			this.users = userRes.data.data
		},
		async submitForm() {
			try {
				const result = await this.$validator.validateAll();
				if(!result){
					return;
				}
				
				
				let res = null
				
				if(this.$route.params.id != null) {
					res = await axios.post('/api/v1/productsell/update', this.productSell)
				} else {
					res = await axios.post('/api/v1/productsell/create', this.productSell)
				}
		
				this.$router.push('/productsell-list');
		  	}
		  	catch(err) {
		  		this.$snotify.error(null, err.message);
		  	}
		},
	}
}
</script>