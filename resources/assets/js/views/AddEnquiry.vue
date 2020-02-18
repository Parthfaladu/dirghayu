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
	                <div>ENQUIRY DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
	            	<div class="position-relative form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" v-model="enquiry.name" id="name" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" v-model="enquiry.email" id="email" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" name="phone" v-model="enquiry.phone" id="phone" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="gender">Gender</label>
						<div class="ml-1 row">
							<div class="custom-control custom-radio">
								<input type="radio" class="custom-control-input" id="defaultGroupExample1" name="gender" value="male" :checked="enquiry.gender === 'male'" v-model="enquiry.gender">
								<label class="custom-control-label" for="defaultGroupExample1">Male &nbsp;</label>
							</div>
							<div class="custom-control custom-radio">
								<input type="radio" class="custom-control-input" id="defaultGroupExample2" name="gender" value="female" checked :checked="enquiry.gender === 'female'" v-model="enquiry.gender">
								<label class="custom-control-label" for="defaultGroupExample2">&nbsp;Female</label>
							</div>
						</div>
                    </div>
                    <div class="position-relative form-group">
                        <label for="last_follow_up_date">Last Follow Up Date</label>
                        <input type="text" class="form-control" name="last_follow_up_date" v-model="enquiry.last_follow_up_date" id="last_follow_up_date" placeholder="yyyy-mm-dd" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="next_follow_up_date">Next Follow Up Date</label>
                        <input type="text" class="form-control" name="next_follow_up_date" v-model="enquiry.next_follow_up_date" id="next_follow_up_date" placeholder="yyyy-mm-dd" required>
                    </div>
                    <div class="position-relative form-group">
                        <label for="remark">Remark</label>
                        <textarea rows="2" class="form-control" name="remark" v-model="enquiry.remark" id="remark" required></textarea>
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
	name: 'AddEnqiry',
	components: {
		DashboardPage
	},
	data() {
		return {
			enquiry:{
				name: null,
                email: null,
                phone: null,
                gender: 'female',
                last_follow_up_date: null,
                next_follow_up_date: null,
				remark: null,
			},
			
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				let id       = this.$route.params.id
				let res      = await axios.get('http://localhost:8000/api/v1/enquiry/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.enquiry = res.data.data
			}
			
			
		} catch (err) {
			this.$snotify.error(null, err.message);

		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.enquiry) 
			 	{
			 		let res = null
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('http://localhost:8000/api/v1/enquiry/update', this.enquiry ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}else
			 		{
		        		res = await axios.post('http://localhost:8000/api/v1/enquiry/create', this.enquiry ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
		    
		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/enquiry-list');
						this.$snotify.success(null, res.data.message);
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);

		  	}

		},
		resetForm() {
			this.enquiry = null;	
		}
	}
}
</script>