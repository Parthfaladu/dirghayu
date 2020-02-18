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
			        	return data.customer.user.first_name;
			        }, name:'customer'},
			        {data:'quantity', name:'quantity'},
			        {data:'paid_amount', name:'paid_amount'},
			        {data:function(data){
		            	return "<button class='btn btn-primary' data-g-action='view' data-g-actiondata="+data.id+">Update</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata="+data.id+">Delete</button>";
		          	}, name:'action'}
			    ],
			    url: 'http://localhost:8000/api/v1/productsell/list',
			}
		},
		methods: {

			async onAction(action) {
				if(action.action === 'view') {
					this.$router.push('/update-product-sell/'+action.data)
				}
				if(action.action === 'delete'){
					try{
						let productSellId = action.data
						let res = await axios.post('http://localhost:8000/api/v1/productsell/delete' , { id: productSellId }, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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