<template>
	<VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Name</th>
		<th>Price</th>
		<th>Duration</th>
		<th>Detail</th>
		<th>Action</th>
    </VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';

export default {
	name: 'PackageTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
		        {data:'id', name:'id'},
		        {data:'name', name:'name'},
		        {data:'price', name:'price'},
		        {data:'duration', name:'duration'},
		        {data:'detail', name:'detail'},
		        {data:function(data){
	            	return "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
	          	}, name:'action'}
		    ],
		    url: '/api/v1/package/list',
		}
	},
	methods: {
		
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/update-package/'+action.data)
				// console.log(action.data);
			}
			if(action.action === 'delete'){
				try{
					const packageId = action.data
					const res = await axios.post('/api/v1/package/delete' , { id: packageId }, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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