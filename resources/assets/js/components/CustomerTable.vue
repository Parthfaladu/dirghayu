<template>
	<div v-can:view__customer>
		<VueDatatable ref="vueDatatable" :columns="columns" :url="url" @gaction="onAction">
			<th>Id</th>
			<th>Name</th>
			<th>Email</th>
			<th>Phone</th>
			<th>Gender</th>
			<th>City</th>
			<th v-show="$can('update__customer') || $can('delete__customer')">Action</th>
		</VueDatatable>
	</div>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import Swal from 'sweetalert2'

export default {
	name: 'CustomerTable',
	components: {
		VueDatatable,
	},
	data() {
		return {
			columns: [
				{data:'id', name:'id', width:"100px"},
				{data:function(data){
					let customer = '';
					if(data.photo_url) {
						customer += `<img src=${data.photo_url} width='50px' class='rounded-circle mr-3'>`;
					}
					customer += `${data.first_name} ${data.last_name}`;
					return customer;
				}, name:'name'},
				{data:'email', name:'email'},
				{data:'phone', name:'phone', width:"100px"},
				{data:'gender', name:'gender', width:"100px"},
				{data:function(data){
					return data.customer ? data.customer.city : null;
				}, name:'city', width:"120px"},
				{data:(data) => {
					let actions = "";
					if(this.$can('update__customer')) {
						actions += "<button class='btn btn-outline-alternate mr-2' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button>";
					}
					if(this.$can('delete__customer')) {
						actions += " <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return  actions;
				}, name:'action', width:"150px"}
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
				try {
					const result = await Swal.fire({
						title: "Along with this customer delete all it's subscription and payment details will be deleted so Are you sure want to delete this customer?",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, delete it!'
					});
					if (result.value) {
						const res = await axios.post('/api/v1/customer/delete' , { id: action.data });
						this.$refs.vueDatatable.draw();
						this.$snotify.success(null, res.data.message);
					}
				}
				catch(err) {
					this.$snotify.error(null, err.message);
				}
			}
		}
	}
}
</script>

<style scoped>
@import '~jquery-ui-dist/jquery-ui.css';
</style>