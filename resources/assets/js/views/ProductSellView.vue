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
	                <div>PRODUCT SELL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()" class="mt-4">
	            	<div class="position-relative form-group">
                        <label for="detail">Customer Name</label>
                        <select class="form-control" name="customer_id" v-model="productSell.customer_id">
                        	<option v-for="customer in customers" :key="customer.id" :value="customer.id" :selected="productSell.customer_id ===  customer.id">{{customer.user.first_name}}</option>
                        </select>
                    </div>
	            	<div class="position-relative form-group">
                        <label for="name">Product Name</label>
                        <select class="form-control" name="product_id" v-model="productSell.product_id">
                        	
                        	<option v-for="product in products" :key="product.id" :value="product.id" :selected="productSell.product_id ===  product.id">{{product.name}}</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="quantity">Quantity</label>
                        <div class="input-group" style="padding: 0px;">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend">Each</span>
                            </div>
                        	<input type="text" class="form-control" name="quantity" v-model="productSell.quantity" id="quantity" required>
                        </div>
                    </div>
                    <div class="position-relative form-group">
                        <label for="price">Amount</label>
                        <input type="text" class="form-control" name="price" v-model="productSell.paid_amount" id="price" required>
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
	name: 'ProductSellView',
	components: {
		DashboardPage
	},
	data() {
		return {
			productSell:{
				product_id: null,
				customer_id: null,
				quantity: null,
				paid_amount:null
			},
			products: null,
			customers: null
			
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				let id       = this.$route.params.id
				let res      = await axios.get('http://localhost:8000/api/v1/productsell/list/'+id ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				console.log(res.data.data)
				this.productSell = res.data.data
		    }
		    

		    	let productRes = await axios.get('http://localhost:8000/api/v1/product/list', { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
		    	this.products = productRes.data.data

		    	let customerRes = await axios.get('http://localhost:8000/api/v1/customer/list', { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.customers = customerRes.data.data
			
		} catch (err) {
			this.$snotify.error(null, err.message);

		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.productSell) 
			 	{
			 		let res = null
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('http://localhost:8000/api/v1/productsell/update', this.productSell, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('http://localhost:8000/api/v1/productsell/create', this.productSell, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
		    
		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/productsell-list');
						this.$snotify.success(null, res.data.message);
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);

		  	}

		},
		resetForm() {
			this.productSell = null;	
		}
	}
}
</script>