<template>
    <form  @submit.prevent="submitForm()">
        <div class="position-relative form-group">
            <label for="name">Name</label>
            <input id="name" v-model="branchData.name" type="text" class="form-control" name="name" required>
        </div>
        <div class="position-relative form-group">
            <label for="incharge_name">Incharge Name</label>
            <input id="incharge_name" v-model="branchData.incharge_name" type="text" class="form-control" name="incharge_name" required>
        </div>
        <div class="position-relative form-group">
            <label for="email">Email</label>
            <input id="email" v-model="branchData.email" type="email" class="form-control" name="email" required>
        </div>
        <div class="position-relative form-group">
            <label for="mobile">Mobile</label>
            <input id="mobile" v-model="branchData.mobile" type="text" class="form-control" name="mobile" required>
        </div>
        <div class="position-relative form-group">
            <label for="address">Address</label>
            <textarea id="address" v-model="branchData.address" rows="2" class="form-control" name="address" required></textarea>
        </div>
        <div class="position-relative form-group">
            <label for="city">City</label>
            <input id="city" v-model="branchData.city" type="text" class="form-control" name="city">
        </div>
        <div class="position-relative form-group">
            <label for="state">State</label>
            <input id="state" v-model="branchData.state" type="text" class="form-control" name="state">
        </div>
        <div class="position-relative form-group">
            <label for="zipcode">Zipcode</label>
            <input id="zipcode" v-model="branchData.zipcode" type="text" class="form-control" name="zipcode" required>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success-new" type="submit">SUBMIT</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios';

export default {
    name: 'AddBranchForm',
    data() {
		return {
			branchData:{
				name: null,
				incharge_name: null,
                address:null,
                mobile: null,
				email: null,
				city:null,
                state: null,
				zipcode: null,
			},
			
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				const id           = this.$route.params.id
				const res          = await axios.get('/api/v1/branch/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.branchData = res.data.data
				
		    }
			
		} catch (err) {
			this.$snotify.error(null, err.message);

		}
	},
	methods: {
		async submitForm() {

			try{
			 	if(this.branchData) 
			 	{
					let res = null
				
			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('/api/v1/branch/update', this.branchData , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
			 		}else
			 		{
		        		res = await axios.post('/api/v1/branch/create', this.branchData, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} } )
			 		}
					
		        	if(res.data.status == "success")
		        	{
						this.resetForm();
						this.$snotify.success(null, res.data.message);
						this.$router.push('/branch-list');
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);

		  	}

		},
		resetForm() {
			this.branchData = null;	
		},
		
	}
}
</script>