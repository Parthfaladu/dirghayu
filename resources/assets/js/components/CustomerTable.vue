<template>
	<div>
		<VueDatatable :columns="columns" :url="url" @gaction="onAction">
			<th>Id</th>
			<th>Name</th>
			<th>Email</th>
			<th>Gender</th>
			<th>Phone</th>
			<th>City</th>
			<th>Action</th>
		</VueDatatable>
		<VueJqueryCalendar></VueJqueryCalendar>
	</div>
</template>
<script>
 
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import VueJqueryCalendar from 'vue-jquery-calendar';

	export default {
		name: 'CustomerTable',
		components: {
			VueDatatable,
			VueJqueryCalendar,
		},
		data() {
			return {
				columns: [
			        {data:'id', name:'id'},
			        {data:function(data){
						return data.first_name+' '+data.last_name;
                    }, name:'name'},
                    {data:'email', name:'email'},
                    {data:'gender', name:'gender'},
                    {data:'phone', name:'phone'},
			        {data:function(data){
						return data.customer.city;
                    }, name:'city'},
			        {data:function(data){
		            	return "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
		          	}, name:'action'}
			    ],
			    url: '/api/v1/customer/list',
			}
		},
		methods: {                                                                     

			async onAction(action) {
				if(action.action === 'view') {
					this.$router.push('/update-customer/'+action.data)
				}
				if(action.action === 'delete'){
					try{
						const customerId = action.data
						const res = await axios.post('/api/v1/customer/delete' , { id: customerId } ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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

<style scoped>
@import '~vue-jquery-calendar/dist/vuejquerycalendar.css';
</style>