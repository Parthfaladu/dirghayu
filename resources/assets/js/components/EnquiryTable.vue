<template>
    <VueDatatable ref="vueDatatable" v-can:view__enquiry :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
        <th>Last FollowUp</th>
		<th>Next FollowUp</th>
		<th v-show="$can('update__enquiry') || $can('delete__enquiry')">Action</th>
	</VueDatatable>
</template>
<script>
 
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import moment from 'moment';

export default {
	name: 'EnquiryTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
				{data:'id', name:'id', width:"40px"},
				{data:'name', name:'name'},
				{data:'email', name:'email'},
				{data:'phone', name:'phone', width:"100px"},
				{data:(data) =>{
					return moment(data.last_follow_up_date).format("DD-MM-YYYY");
				}, name:'last_follow_up_date'},
				{data:(data) =>{
					return moment(data.next_follow_up_date).format("DD-MM-YYYY");
				}, name:'next_follow_up_date'},
				{data:(data) => {
					let actions = "";
					if(this.$can('update__enquiry')) {
						actions += "<button class='btn btn-outline-primary-new' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> ";
					}
					if(this.$can('delete__enquiry')) {
						actions += " <button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return actions;
				}, name:'action', width:"150px"}
			],
			url: '/api/v1/enquiry/list',
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
				this.$router.push('/update-enquiry/'+action.data)
			}
			if(action.action === 'delete'){
				try {
					const res = await axios.post('/api/v1/enquiry/delete' , { id: action.data });
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