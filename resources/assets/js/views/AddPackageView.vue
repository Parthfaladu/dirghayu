<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-gift icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>PACKAGE DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form  @submit.prevent="submitForm()">
	                
                    <div class="position-relative form-group">
                        <label for="name">{{ $t('NAME') }}</label>
                        <input id="name" v-model="packageData.name" v-validate="'required'" type="text" class="form-control" name="name">
						<span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="detail">Detail</label>
                        <textarea id="detail" v-model="packageData.detail" v-validate="'required'" rows="2" class="form-control" name="detail"></textarea>
						<span v-show="errors.has('detail')" class="text-danger">{{ errors.first('detail') }}</span>
                    </div>
                	<div class="position-relative form-group">
                        <label for="price">Price</label>
                        <input id="price" v-model="packageData.price" v-validate="'required'" type="number" class="form-control" name="price">
						<span v-show="errors.has('price')" class="text-danger">{{ errors.first('price') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="duration">Duration</label>
                        <div class="input-group" style="padding: 0px;">
                        	<input id="duration" v-model="packageData.duration" v-validate="'required'" type="number" class="form-control" name="duration">
							
							<div class="input-group-append">
								<span id="basic-addon2" class="input-group-text">Month</span>
							</div>
                        </div>
						<span v-show="errors.has('duration')" class="text-danger">{{ errors.first('duration') }}</span>
                    </div> 
                	<div class="position-relative form-group">
                        <label for="package_img_path">Profile Photo</label><br>
						<img v-show="showPreview" :src="package_img_path" width="25%" style="border: 1px solid #cac2c2;" />
						<input id="packagePath" ref="packagePath" type="file" class="form-control" accept="image/*" name="packagePath" style="display:none;" @change="onImageUpload()">
                                        
                    </div>
					<div class="position-relative form-group">
                    	<label></label>
						<button class="btn btn-info" @click.prevent="$refs.packagePath.click()">Upload Image</button>
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
	name: 'AddPackageView',
	components: {
		DashboardPage
	},
	data() {
		return {
			packageData:{
				name: null,
				price: null,
				duration: null,
				detail:null,
				packageImage: null,
			},
			package_img_path: null,
			showPreview: false,
		}
	},
	async mounted() {
		try {
			
			if(this.$route.params.id != null)
			{
				const id           = this.$route.params.id
				const res          = await axios.get('/api/v1/package/list/'+id , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} })
				this.packageData = res.data.data
				this.package_img_path = this.packageData.image;
				this.showPreview = true;

		    }
			
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
			 	if(this.packageData) 
			 	{
					let res = null
					const data = new FormData()
					data.append('name', this.packageData.name)
					data.append('price', this.packageData.price)
					data.append('duration', this.packageData.duration)
					data.append('detail', this.packageData.detail)
					data.append('packageImage', this.packageData.packageImage)

			 		if(this.$route.params.id != null)
			 		{
			 			res = await axios.post('/api/v1/package/update', data , { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization, 'Content-Type': 'multipart/form-data'} })
			 		}else
			 		{
		        		res = await axios.post('/api/v1/package/create', data, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization, 'Content-Type': 'multipart/form-data'} } )
			 		}

		        	if(res.data.status == "success")
		        	{
		        		this.resetForm();
						this.$router.push('/package-list');
						this.$snotify.success(null, res.data.message);
						
		        	}
		      	}
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);

		  	}

		},
		resetForm() {
			this.packageData = null;	
		},
		onImageUpload() {
            this.packageData.packageImage = this.$refs.packagePath.files[0];

            const reader  = new FileReader();
            reader.addEventListener("load", function () {
                this.showPreview = true;
                this.package_img_path = reader.result;
            }.bind(this), false);

            if( this.packageData.packageImage ){
            //   if ( /\.(jpe?g|png|gif)$/i.test( this.packageData.packageImage.name ) ) {
                reader.readAsDataURL( this.packageData.packageImage );
            //   }
        	}
        }
	}
}
</script>