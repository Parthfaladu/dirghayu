<template>
    <VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
        <th>Staff Member Name</th>
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
		<th>Gender</th>
        <th>Last FollowUp Date</th>
		<th>Next FollowUp Date</th>
		<th>Action</th>
	</VueDatatable>
</template>
<script>
 
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';


	export default {
		name: 'EnquiryTable',
		components: {
			VueDatatable
		},
		data() {
			return {
				columns: [
			        {data:'id', name:'id'},
			        {data:function(data){
                        return data.user.first_name+' '+data.user.last_name;
                    }, name:'user_id'},
			        {data:'name', name:'name'},
			        {data:'email', name:'email'},
                    {data:'phone', name:'phone'},
                    {data:'gender', name:'gender'},
                    {data:'last_follow_up_date', name:'last_follow_up_date'},
                    {data:'next_follow_up_date', name:'next_follow_up_date'},
			        {data:function(data){
		            	return "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
		          	}, name:'action'}
			    ],
			    url: '/api/v1/enquiry/list',
			}
		},
		methods: {

			async onAction(action) {
				if(action.action === 'view') {
					this.$router.push('/update-enquiry/'+action.data)
				}
				if(action.action === 'delete'){
					try{
						const enquiryId = action.data
						const res = await axios.post('/api/v1/enquiry/delete' , { id: enquiryId } ,{ headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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