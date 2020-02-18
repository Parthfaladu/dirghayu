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
	                <div>PRODUCT DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
	            	<div class="position-relative form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" v-model="product.name" id="name" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="detail">Detail</label>
                        <textarea rows="2" class="form-control" name="detail" v-model="product.detail" id="detail" required></textarea>
                    </div>
                	<div class="position-relative form-group">
                        <label for="price">Price</label>
                        <input type="text" class="form-control" name="price" v-model="product.price" id="price" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="quantity">Quantity</label>
                        <div class="input-group" style="padding: 0px;">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend">Each</span>
                            </div>
                        	<input type="text" class="form-control" name="quantity" v-model="product.quantity" id="quantity" required>
                        </div>
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
			product:{
				name: null,
				price: null,
				quantity: null,
				detail:null
			},
			
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				let id       = this.$route.params.id
				let res      = await axios.get('http://localhost:8000/api/v1/product/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.product = res.data.data
		    }
			
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.product) 
			 	{
			 		let res = null
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('http://localhost:8000/api/v1/product/update', this.product ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('http://localhost:8000/api/v1/product/create', this.product ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
		    
		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/product-list');
						this.$snotify.success(null, res.data.message);
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);
		  	}

		},
		resetForm() {
			this.product = null;	
		}
	}
}
</script>