<template>
    <VueDatatable ref="vueDatatable" v-can:view__subscription :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Customer</th>
		<th>Package</th>
		<th>Start Date</th>
		<th>Duration</th>
		<th>End Date</th>
		<th>Paid</th>
		<th>Remaining</th>
		<th v-show="$can('delete__subscription')">Action</th>
	</VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import Swal from 'sweetalert2'
import moment from 'moment';

export default {
	name: 'SubscriptionTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
				{data:'id', name:'id', width:"40px"},
				{data:function(data){
					return data.user.first_name+' '+data.user.last_name;
				}, name:'name'},
				{data:'package_name', name:'package_name'},
				{data:(data) => {
					return moment(data.start_date).format("DD-MM-YYYY");
				}, name:'start_date', width:"110px"},
				{data:'duration', name:'duration', width:"20px"},
				{data:(data) => {
					return moment(data.end_date).format("DD-MM-YYYY");
				}, name:'end_date', width:"100px"},
				{data:(data) =>{
					if(data.payment.length > 0){
						return data.payment[0].paid_amount+' '+this.$store.getters['init/currency'];
					}
					else{
						return '0'+' '+this.$store.getters['init/currency'];
					}
				}, name:'paid_amount', width:"80px"},
				{data: (data) =>{
					if(data.payment.length > 0){
						return data.payment[0].remaining_amount+' '+this.$store.getters['init/currency'];
					}
					else{
						return data.amount+' '+this.$store.getters['init/currency'];;
					}
				}, name:'remaining_amount', width:"80px"},
				{data:(data) => {
					let actions = "";
					if(this.$can('delete__subscription')) {
						actions += "<button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return actions;
				}, name:'action', width:"80px"}
			],
			url: '/api/v1/subscription/list',
		}
	},
	mounted() {
		if(this.$route.params.message){
			this.$snotify.success(null, this.$route.params.message);
		}
	},
	methods: {
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/update-subscription/'+action.data)
			}
			if(action.action === 'delete'){
				try {
					const result = await Swal.fire({
						title: "Along with this subscription delete all it's payment details will be deleted so Are you sure want delete this subscription?",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, delete it!'
					});
					
					if (result.value) {
						const res = await axios.post('/api/v1/subscription/delete' , { id: action.data });
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