<template>
    <VueDatatable ref="vueDatatable" v-can:view__staff_member :columns="columns" :url="url" :type="type" @gaction="onAction">
		<th>Id</th>
		<th>Name</th>
		<th>Email address</th>
		<th>Phone</th>
		<th>Date Of Birth</th>
		<th>Gender</th>
		<th v-show="$can('update__staff_member') || $can('delete__staff_member')">Action</th>
	</VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import moment from 'moment';

export default {
	name: 'StaffMemberTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
				{data:'id', name:'id', width:"80px"},
				{data:function(data){
					let user = '';
					if(data.photo_url) {
						user += `<img src=${data.photo_url} width='50px' class='mr-3'>`;
					}
					user += `${data.first_name} ${data.last_name}`;
					return user;
				}, name:'name'},
				{data:'email', name:'email'},
				{data:'phone', name:'phone', width:"100px"},
				{data:(data) =>{
					return moment(data.dob).format("DD-MM-YYYY");
				}, name:'dob', width:"100px"},
				{data:'gender', name:'gender', width:"80px"},
				{data:(data) => {
					let action = "";
					if(this.$can('update__staff_member')) {
						action += "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> <button class='btn btn-outline-warning' data-g-action='status' data-g-actiondata="+data.id+"><i class='fas fa-toggle-on'></i> ";
						if(data.is_active == 1)
						{
							action += "<span class='button-text'>Active</span>";
						}
						else {
							action += "<span class='button-text'>In Active</span>";
						}
					}
					if(this.$can('delete__staff_member')) {
						action += " </button> <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return action;
				}, name:'action', width:"250px"}
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
			if(action.action === 'delete') {
				try {
					const res = await axios.delete('/api/v1/staff/member/'+action.data);
					this.$refs.vueDatatable.draw();
					this.$snotify.success(null, res.data.message);
				}
				catch(err) {
					this.$snotify.error(null, err.message);
				}
			}
			if(action.action === 'status'){
				try {
					const res = await axios.post('/api/v1/staff/member/status',{ id: action.data });
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