<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-shopbag icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>PRODUCT SELL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  class="mt-4" @submit.prevent="submitForm()">
	            	<div class="position-relative form-group">
                        <label for="detail">Customer Name</label>
                        <select v-model="productSell.user_id" class="form-control" name="user_id">
                        	<option v-for="user in users" :key="user.id" :value="user.id" :selected="productSell.user_id ===  user.id">{{user.first_name}} {{user.last_name}}</option>
                        </select>
                    </div>
	            	<div class="position-relative form-group">
                        <label for="name">Product Name</label>
                        <select v-model="productSell.product_id" class="form-control" name="product_id">
                        	
                        	<option v-for="product in products" :key="product.id" :value="product.id" :selected="productSell.product_id ===  product.id">{{product.name}}</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="quantity">Quantity</label>
                        <div class="input-group" style="padding: 0px;">
                            <div class="input-group-prepend">
                                <span id="inputGroupPrepend" class="input-group-text">Each</span>
                            </div>
                        	<input id="quantity" v-model="productSell.quantity" type="text" class="form-control" name="quantity" required>
                        </div>
                    </div>
                    <div class="position-relative form-group">
                        <label for="price">Amount</label>
                        <input id="price" v-model="productSell.paid_amount" type="text" class="form-control" name="price" required>
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
	name: 'ProductSellView',
	components: {
		DashboardPage
	},
	data() {
		return {
			productSell:{
				product_id: null,
				user_id: null,
				quantity: null,
				paid_amount:null
			},
			products: null,
			users: null
			
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				const id       = this.$route.params.id
				const res      = await axios.get('/api/v1/productsell/list/'+id ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				console.log(res.data.data)
				this.productSell = res.data.data
		    }
		    

		    	const productRes = await axios.get('/api/v1/product/list', { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
		    	this.products = productRes.data.data

		    	const userRes = await axios.get('/api/v1/customer/list', { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.users = userRes.data.data
			
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
			 			res = await axios.post('/api/v1/productsell/update', this.productSell, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('/api/v1/productsell/create', this.productSell, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
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