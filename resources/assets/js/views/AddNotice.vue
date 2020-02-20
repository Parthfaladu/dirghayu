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
	                <div>NOTICE DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
	            	<div class="position-relative form-group">
                        <label for="to_id">Customer</label>
                        <select class="form-control" name="to_id" v-model="notice.to_id" id="to_id" required>
                            <option v-for="customer in customers" :key="customer.id" :value="customer.id" :selected="notice.to_id ===  customer.id">{{customer.user.first_name}}</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" name="title" v-model="notice.title" id="title" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="detail">Detail</label>
                        <textarea rows="2" class="form-control" name="detail" v-model="notice.detail" id="detail" required></textarea>
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
			notice:{
				title: null,
				to_id: null,
				detail:null
			},
			customers: null,
			
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				let id       = this.$route.params.id
				let res      = await axios.get('http://localhost:8000/api/v1/notice/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.notice = res.data.data
		    }

		    let customerRes = await axios.get('http://localhost:8000/api/v1/customer/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.customers = customerRes.data.data
			
		} catch (err) {
			//this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.notice) 
			 	{
			 		let res = null
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('http://localhost:8000/api/v1/notice/update', this.notice ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('http://localhost:8000/api/v1/notice/create', this.notice ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
		    
		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/notice-list');
						//this.$snotify.success(null, res.data.message);
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		//this.$snotify.error(null, err.message);
		  	}

		},
		resetForm() {
			this.notice = null;	
		}
	}
}
</script>