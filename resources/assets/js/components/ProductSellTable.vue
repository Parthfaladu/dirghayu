<template>
    <VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Product</th>
		<th>Customer</th>
		<th>Quantity</th>
		<th>Amount</th>
		<th>Action</th>
	</VueDatatable>
</template>
<script>
 
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';


	export default {
		name: 'ProductSellTable',
		components: {
			VueDatatable
		},
		data() {
			return {
				columns: [
			        {data:'id', name:'id'},
			        {data:function(data){
			        	return data.product.name;
			        }, name:'product'},
			        {data:function(data){
			        	return data.user.first_name+' '+data.user.last_name;
			        }, name:'user_id'},
			        {data:'quantity', name:'quantity'},
			        {data:'paid_amount', name:'paid_amount'},
			        {data:function(data){
		            	return "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
		          	}, name:'action'}
			    ],
			    url: '/api/v1/productsell/list',
			}
		},
		methods: {

			async onAction(action) {
				if(action.action === 'view') {
					this.$router.push('/update-product-sell/'+action.data)
				}
				if(action.action === 'delete'){
					try{
						const productSellId = action.data
						const res = await axios.post('/api/v1/productsell/delete' , { id: productSellId }, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
						this.$snotify.success(null, res.data.message);
						
					}
					catch(err){
						this.$snotify.error(null, err.message);

					}
				}
			}

		}

	}
</script>