<template>
    <form  @submit.prevent="submitForm()">
        <div class="position-relative form-group">
            <label for="name">Name</label>
            <input id="name" v-model="product.name" type="text" class="form-control" name="name" v-validate="'required'">
			<span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="detail">Detail</label>
            <textarea id="detail" v-model="product.detail" rows="2" class="form-control" name="detail" v-validate="'required'"></textarea>
			<span v-show="errors.has('detail')" class="text-danger">{{ errors.first('detail') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="price">Price</label>
			<div class="input-group" style="padding: 0px;">
				<input id="price" v-model="product.price" type="number" class="form-control" name="price" v-validate="'required'">
				<div class="input-group-append">
						<span id="basic-addon2" class="input-group-text">{{ $store.getters['init/currency'] }}</span>
                </div>
			</div>
			<span v-show="errors.has('price')" class="text-danger">{{ errors.first('price') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="quantity">Quantity</label>
            <div class="input-group" style="padding: 0px;">
				<input id="quantity" v-model="product.quantity" type="number" class="form-control" name="quantity" v-validate="'required'">
                <div class="input-group-append">
                    <span id="" class="input-group-text">Each</span>
                </div>
                
            </div>
			<span v-show="errors.has('quantity')" class="text-danger">{{ errors.first('quantity') }}</span>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success-new" type="submit">SUBMIT</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios';

export default {
    name: 'AddProductForm',
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
			if(this.$route.params.id != null) {
				await this.getProductList();
		    }
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async getProductList() {
			const res      = await axios.get('/api/v1/product/list/'+this.$route.params.id)
			this.product = res.data.data
		},
		async submitForm() {
			try {
				const result = await this.$validator.validateAll();
				if(!result){
					return
				}
				let res = null
				if(this.$route.params.id != null) {
					res = await axios.post('/api/v1/product/update', this.product)
				}else
				{
					res = await axios.post('/api/v1/product/create', this.product)
				}

				this.$router.push('/product-list');
		  	}
		  	catch(err){
		  		this.$snotify.error(null, err.message);
		  	}
		},
	}
}
</script>