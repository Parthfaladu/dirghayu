<template>
    <VueDatatable :columns="columns" :url="url" @gaction="onAction" :type="type">
		<th>Id</th>
		<th>Name</th>
		<th>Phone</th>
		<th>Date Of Birth</th>
		<th>Gender</th>
		<th>Address</th>
		<th>Action</th>
	</VueDatatable>
</template>
<script>
 
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';


	export default {
		name: 'StaffMemberTable',
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
			        {data:'phone', name:'phone'},
			        {data:'dob', name:'dob'},
			        {data:'gender', name:'gender'},
			        {data:'address', name:'address'},
			        {data:function(data){
			        	
			        	var action = "<button class='btn btn-primary' data-g-action='view' data-g-actiondata="+data.id+">Update</button> <button class='btn btn-warning' data-g-action='status' data-g-actiondata="+data.id+">";
			        	if(data.is_active == 1)
			        	{
			        		action += "Active";
			        	}
			        	else{
			        		action += "InActive";
			        	}
			        	action += "</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata="+data.id+">Delete</button>";
			        	return action;
		          	}, name:'action'}
			    ],
			    url: '/api/v1/staff/member/list',
			    type: 'POST',
			}
		},
		methods: {

			async onAction(action) {
				if(action.action === 'view') {
					this.$router.push('/update-staff-member/'+action.data)
				}
				if(action.action === 'delete'){
					try{
						let memberId = action.data
						let res = await axios.delete('/api/v1/staff/member/'+memberId, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
						this.$snotify.success(null, res.data.message);

					}
					catch(err){
						this.$snotify.error(null, err.message);
					}
				}
				if(action.action === 'status'){
					try{
						let memberId = action.data
						let res = await axios.post('/api/v1/staff/member/status',{ id: memberId }, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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