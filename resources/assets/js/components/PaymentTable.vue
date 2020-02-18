<template>
    <VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Subscriber Name</th>
		<th>Paid Amount</th>
		<th>Remaining Amount</th>
		<th>Payment Source</th>
        <th>Payment Date</th>
		<th>Remark</th>
		<th>Action</th>
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
			        {data:'id', name:'id'},
			        {data:function(data){
						return data.subscription.user.first_name+' '+data.subscription.user.last_name;
					}, name:'subscription_id'},
			        {data:'paid_amount', name:'paid_amount'},
			        {data:'remaining_amount', name:'remaining_amount'},
                    {data:'payment_source', name:'payment_source'},
                    {data:'updated_at', name:'updated_at'},
                    {data:'remark', name:'remark'},
			        {data:function(data){
		            	return "<button class='btn btn-primary' data-g-action='view' data-g-actiondata="+data.id+">Update</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata="+data.id+">Delete</button>";
		          	}, name:'action'}
			    ],
			    url: 'http://localhost:8000/api/v1/payment/list',
			}
		},
		methods: {

			async onAction(action) {
				if(action.action === 'view') {
					this.$router.push('/update-payment/'+action.data)
				}
				if(action.action === 'delete'){
					try{
						let paymentId = action.data
						let res = await axios.post('http://localhost:8000/api/v1/payment/delete' , { id: paymentId } ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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