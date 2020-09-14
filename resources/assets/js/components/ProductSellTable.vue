<template>
    <VueDatatable ref="vueDatatable" v-can:view__product_sell :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Product</th>
		<th>Customer</th>
		<th>Quantity</th>
		<th>Amount</th>
		<th v-show="$can('delete__product_sell')">Action</th>
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
				{data:'id', name:'id', width:"40px"},
				{data:function(data){
					return data.product_name;
				}, name:'product_name'},
				{data:function(data){
					return data.customer;
				}, name:'customer'},
				{data:'quantity', name:'quantity', width:"80px"},
				{data:(data)=>{
					return data.paid_amount+' '+this.$store.getters['init/currency'];
				}, name:'paid_amount', width:"80px"},
				{data:(data) => {
					let actions = "";
					if(this.$can('delete__product_sell')) {
						actions += "<button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return actions;
				}, name:'action', width:"130px"}
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
				try {
					const res = await axios.post('/api/v1/productsell/delete' , { id: action.data });
					this.$refs.vueDatatable.draw();
					this.$snotify.success(null, res.data.message);
				}
				catch(err) {
					this.$snotify.error(null, err.message);
				}
			}
		}
	}
}
</script>