<template>
    <VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Name</th>
		<th>Email</th>
		<th>Gender</th>
		<th>Phone</th>
        <th>City</th>
		<th>Action</th>
	</VueDatatable>
</template>
<script>
 
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';


	export default {
		name: 'CustomerTable',
		components: {
			VueDatatable
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
		            	return "<button class='btn btn-primary' data-g-action='view' data-g-actiondata="+data.id+">Update</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata="+data.id+">Delete</button>";
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
						let customerId = action.data
						let res = await axios.post('/api/v1/customer/delete' , { id: customerId } ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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