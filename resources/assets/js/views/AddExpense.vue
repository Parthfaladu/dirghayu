<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-diamond icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>EXPENSE DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
	                <!-- <div class="position-relative form-group">
                        <label for="branch_id">Branch</label>
                        <select id="branch_id" v-model="expenseData.branch_id" class="form-control" name="branch_id" required>
                            <option v-for="branch in branches" :key="branch.id" :value="branch.id" :selected="expenseData.branch_id ===  branch.id">{{branch.name}}</option>
                        </select>
                    </div> -->
                    <div class="position-relative form-group">
                        <label for="item_name">Item Name</label>
                        <input  id="item_name" v-model="expenseData.item_name" v-validate="'required'" type="text" class="form-control" name="item_name" >
						<span v-show="errors.has('item_name')" class="text-danger">The item name field is required.</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="purchase_date">Purchase Date</label>
                        <input id="purchase_date" v-model="expenseData.purchase_date" v-validate="'required'" type="text" class="form-control" name="purchase_date" placeholder="yyyy-mm-dd">
						<span v-show="errors.has('purchase_date')" class="text-danger">The purchase date field is required.</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="bill_no">Bill Number</label>
                        <input id="bill_no" v-model="expenseData.bill_no" v-validate="'required'" type="text"  class="form-control" name="bill_no">
						<span v-show="errors.has('bill_no')" class="text-danger">The bill number field is required.</span>
                    </div>
                	<div class="position-relative form-group">
                        <label for="price">Price</label>
                        <input id="price" v-model="expenseData.price" v-validate="'required'" type="number" class="form-control" name="price">
						<span v-show="errors.has('price')" class="text-danger">{{ errors.first('price') }}</span>
                    </div>
                	<div class="position-relative form-group">
                        <label for="expense_img_path">Bill Photo</label><br>
						<img v-show="showPreview" :src="expense_img_path" width="25%" style="border: 1px solid #cac2c2;" />
						<input id="expensePath" ref="expensePath" type="file" class="form-control" accept="image/*" name="expensePath" style="display:none;" @change="onImageUpload()">
                                        
                    </div>
					<div class="position-relative form-group">
                    	<label></label>
						<button class="btn btn-info" @click.prevent="$refs.expensePath.click()">Upload Image</button>
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
	name: 'AddExpense',
	components: {
		DashboardPage
	},
	data() {
		return {
			expenseData:{
				//branch_id: null,
				item_name: null,
				purchase_date: null,
                bill_no:null,
                price: null,
				expenseImage: null,
			},
			expense_img_path: null,
			showPreview: false,
			// branches: null,
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null)
			{
				const id           = this.$route.params.id
				const res          = await axios.get('/api/v1/expense/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.expenseData = res.data.data
				this.expense_img_path = this.expenseData.bill_photo;
                this.showPreview = true;
			}
			// const branchRes      = await axios.get('/api/v1/branch/list' , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
    		// this.branches = branchRes.data.data
			
		} catch (err) {
			this.$snotify.error(null, err.message);

		}
	},
	methods: {
		async submitForm() {

			try{
				const result = await this.$validator.validateAll();
				if(!result){
					return
				}
				
			 	if(this.expenseData) 
			 	{
					let res = null
					const data = new FormData()
					//data.append('branch_id', this.expenseData.branch_id)
					data.append('item_name', this.expenseData.item_name)
                    data.append('purchase_date', this.expenseData.purchase_date)
                    data.append('bill_no', this.expenseData.bill_no)
                    data.append('price', this.expenseData.price)
                    data.append('id', this.$route.params.id)
					data.append('expenseImage', this.expenseData.expenseImage)

			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('/api/v1/expense/update', data , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization, 'Content-Type': 'multipart/form-data'} })
			 		}else
			 		{
		        		res = await axios.post('/api/v1/expense/create', data, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization, 'Content-Type': 'multipart/form-data'} } )
			 		}

		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/expense-list');
						this.$snotify.success(null, res.data.message);
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);

		  	}

		},
		resetForm() {
			this.expenseData = null;	
		},
		onImageUpload() {
            this.expenseData.expenseImage = this.$refs.expensePath.files[0];

            const reader  = new FileReader();
            reader.addEventListener("load", function () {
                this.showPreview = true;
                this.expense_img_path = reader.result;
            }.bind(this), false);

            if( this.expenseData.expenseImage ){
            //   if ( /\.(jpe?g|png|gif)$/i.test( this.expenseData.expenseImage.name ) ) {
                reader.readAsDataURL( this.expenseData.expenseImage );
            //   }
        	}
        }
	}
}
</script>