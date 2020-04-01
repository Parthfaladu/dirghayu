<template>
    <VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Customer</th>
		<th>Package</th>
		<th>Start Date</th>
		<th>Duration</th>
		<th>End Date</th>
		<th>Paid Amount</th>
		<th>Remaining Amount</th>
		<th>Action</th>
	</VueDatatable>
</template>
<script>
 
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';


	export default {
		name: 'SubscriptionTable',
		components: {
			VueDatatable
		},
		data() {
			return {
				columns: [
			        {data:'id', name:'id'},
			        {data:function(data){
			        	return data.user.first_name+' '+data.user.last_name;
			        }, name:'name'},
			        {data:function(data){
			        	return data.package.name;
			        }, name:'package'},
			        {data:'start_date', name:'start_date'},
			        {data:'duration', name:'duration'},
			        {data:'end_date', name:'end_date'},
			        {data:'duration', name:'duration'},
			         {data:'duration', name:'duration'},
			        {data:function(data){
		            	return "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
		          	}, name:'action'}
			    ],
			    url: '/api/v1/subscription/list',
			}
		},
		methods: {

			async onAction(action) {
				if(action.action === 'view') {
					this.$router.push('/update-subscription/'+action.data)
				}
				if(action.action === 'delete'){
					try{
						const subscriptionId = action.data
						const res = await axios.post('/api/v1/subscription/delete' , { id: subscriptionId } ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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