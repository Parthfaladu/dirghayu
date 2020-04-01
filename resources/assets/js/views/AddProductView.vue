<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-diskette icon-gradient bg-premium-dark text-danger">
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
                        <input id="name" v-model="product.name" type="text" class="form-control" name="name" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="detail">Detail</label>
                        <textarea id="detail" v-model="product.detail" rows="2" class="form-control" name="detail" required></textarea>
                    </div>
                	<div class="position-relative form-group">
                        <label for="price">Price</label>
                        <input id="price" v-model="product.price" type="number" class="form-control" name="price" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="quantity">Quantity</label>
                        <div class="input-group" style="padding: 0px;">
                            <div class="input-group-prepend">
                                <span id="inputGroupPrepend" class="input-group-text">Each</span>
                            </div>
                        	<input id="quantity" v-model="product.quantity" type="number" class="form-control" name="quantity" required>
                        </div>
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
				const id       = this.$route.params.id
				const res      = await axios.get('/api/v1/product/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
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
			 			res = await axios.post('/api/v1/product/update', this.product ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('/api/v1/product/create', this.product ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
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