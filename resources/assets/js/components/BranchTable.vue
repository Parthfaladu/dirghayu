<template>
	<VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Name</th>
        <th>Address</th>
        <th>Incharge Name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>City</th>
        <th>State</th>
        <th>ZipCode</th>
		<th>Action</th>
    </VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';

export default {
	name: 'BranchTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
		        {data:'id', name:'id'},
		        {data:'name', name:'name'},
		        {data:'address', name:'address'},
		        {data:'incharge_name', name:'incharge_name'},
                {data:'mobile', name:'mobile'},
                {data:'email', name:'email'},
                {data:'city', name:'city'},
                {data:'state', name:'state'},
                {data:'zipcode', name:'zipcode'},
		        {data:function(data){
	            	return "<button class='btn btn-primary' data-g-action='view' data-g-actiondata="+data.id+">Update</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata="+data.id+">Delete</button>";
	          	}, name:'action'}
		    ],
		    url: '/api/v1/branch/list',
		}
	},
	methods: {
		
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/update-branch/'+action.data)
				//console.log(action.data);
			}
			if(action.action === 'delete'){
				try{
					let branchId = action.data
					let res = await axios.post('/api/v1/branch/delete' , { id: branchId }, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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