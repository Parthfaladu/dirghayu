<template>
	<VueDatatable ref="vueDatatable" v-can:view__package :columns="columns" :url="url" @gaction="onAction">
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
				{data:'id', name:'id' , width:"100px"},
				{data:function(data){
					let packageName = '';
					if(data.image) {
						packageName += `<img src=${data.image} width='50px' class='rounded-circle mr-3'>`;
					}
					packageName += `${data.name}`;
					return packageName;
				}, name:'name', width:"320px"},
		        {data:(data) => {
					return data.price+' '+this.$store.getters['init/currency'];
				}, name:'price', width:"80px"},
		        {data:'duration', name:'duration', width:"50px"},
		        {data:'detail', name:'detail'},
		        {data:(data) => {
					let actions = "";
					if(this.$can('update__package')) {
						actions += "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button>";
					}
					if(this.$can('delete__package')) {
						actions += " <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return actions;
	          	}, name:'action', width:"150px"}
		    ],
		    url: '/api/v1/package/list',
		}
	},
	methods: {
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/update-package/'+action.data)
			}
			if(action.action === 'delete'){
				try {
					const res = await axios.post('/api/v1/package/delete' , { id: action.data });
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