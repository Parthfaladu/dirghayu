<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-note icon-gradient bg-premium-dark text-danger">
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
                        <select id="to_id" v-model="notice.to_id" class="form-control" name="to_id" required>
                            <option v-for="customer in customers" :key="customer.id" :value="customer.id" :selected="notice.to_id ===  customer.id">{{customer.first_name}} {{customer.last_name}} </option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Title</label>
                        <input id="title" v-model="notice.title" type="text" class="form-control" name="title" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="detail">Detail</label>
                        <textarea id="detail" v-model="notice.detail" rows="2" class="form-control" name="detail" required></textarea>
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
	name: 'AddNotice',
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
				const id       = this.$route.params.id
				const res      = await axios.get('/api/v1/notice/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.notice = res.data.data
		    }

		    const customerRes = await axios.get('/api/v1/customer/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			this.customers = customerRes.data.data
			
		} catch (err) {
			this.$snotify.error(null, err.message);
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
			 			res = await axios.post('/api/v1/notice/update', this.notice ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('/api/v1/notice/create', this.notice ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
		    
		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/notice-list');
						this.$snotify.success(null, res.data.message);
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);
		  	}

		},
		resetForm() {
			this.notice = null;	
		}
	}
}
</script>