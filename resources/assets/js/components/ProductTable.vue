<template>
    <VueDatatable ref="vueDatatable" v-can:view__product :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Name</th>
		<th>Price</th>
		<th>Quantity</th>
		<th v-show="$can('update__product') || $can('delete__product')">Action</th>
	</VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';

export default {
	name: 'ProductTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
				{data:'id', name:'id', width:"40px"},
				{data:'name', name:'name'},
				{data:(data) => {
					return data.price+' '+this.$store.getters['init/currency'];
				}, name:'price', width:"80px"},
				{data:'quantity', name:'quantity', width:"80px"},
				{data:(data) => {
					let actions = "";
					if(this.$can('update__product')) {
						actions += "<button class='btn btn-outline-primary-new' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button>";
					}
					if(this.$can('delete__product')) {
						actions += " <button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return actions; 
				}, name:'action', width:"140px"}
			],
			url: '/api/v1/product/list',
		}
	},
	methods: {
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/update-product/'+action.data)
			}
			if(action.action === 'delete'){
				try {
					const res = await axios.post('/api/v1/product/delete' , { id: action.data });
					this.$snotify.success(null, res.data.message);
					this.$refs.vueDatatable.draw();
				}
				catch(err) {
					this.$snotify.error(null, err.message);
				}
			}
		}
	}
}
</script>