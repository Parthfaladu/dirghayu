<template>
    <VueDatatable ref="vueDatatable" v-can:view__payment :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Subscriber Name</th>
		<th>Package</th>
		<th>Paid Amount</th>
		<th>Remaining Amount</th>
		<th>Payment Source</th>
        <th>Payment Date</th>
		
		<th v-show="$can('add_invoice')">Action</th>
	</VueDatatable>
</template>
<script> 
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';

export default {
	name: 'PaymentTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
				{data:'id', name:'id' ,width:"80px"},
				{data:function(data){
					return data.subscription.user.first_name+' '+data.subscription.user.last_name;
				}, name:'subscription_id', width:"230px"},
				{data:function(data){
					return data.subscription.package_name ;
				}, name:'package'},
				{data:(data) => {
					return data.paid_amount+' '+this.$store.getters['init/currency'];
				}, name:'paid_amount', width:"80px"},
				{data:(data) =>{
					return data.remaining_amount+' '+this.$store.getters['init/currency'];
				}, name:'remaining_amount', width:"80px"},
				{data:'payment_source', name:'payment_source', width:"100px"},
				{data:'updated_at', name:'updated_at', width:"120px"},
				
				{data:(data) => {
					let actions = "";
					if(this.$can('add__invoice')) {
						actions += "<button class='btn btn-outline-info' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-file-invoice'></i> <span class='button-text'>Invoice</span></button>";
					}
					return actions;
				}, name:'action', width:"100px"}
			],
			url: '/api/v1/payment/list',
		}
	},
	methods: {
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/payment-invoice/'+action.data)
			}
			if(action.action === 'delete'){
				try {
					const res = await axios.post('/api/v1/payment/delete' , { id: action.data });
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