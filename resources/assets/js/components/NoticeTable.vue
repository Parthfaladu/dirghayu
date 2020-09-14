<template>
	<VueDatatable ref="vueDatatable" v-can:view__notice v-if="userRoleList" :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Title</th>
		<th>To</th>
		<th>From</th>
		<th v-show="$can('view_notice') || $can('update__notice') || $can('delete__notice')">Action</th>
    </VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import _ from 'lodash';

export default {
	name: 'NoticeTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			userRoleList: null,
			columns: [
		        {data:'id', name:'id', width:"40px"},
		        {data:'title', name:'title'},
		        {data:(data) => {
		        	return this.getRoleName(data.role_id);
		        }, name:'role_id', width:"120px"},
		        {data:function(data){
		        	return data.userfrom.first_name+' '+data.userfrom.last_name;
		        }, name:'from_id', width:"120px"},
		        {data:(data) => {
					let actions = "";
					if(this.$can('view__notice')) {
						actions += "<button class='btn btn-outline-info-new' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-eye'></i> <span class='button-text'>View</span></button>";
					}
					if(this.$can('update__notice')) {
						actions += " <button class='btn btn-outline-primary-new' data-g-action='edit' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button>";
					}
					if(this.$can('delete__notice')) {
						actions += " <button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return actions;
	          	}, name:'action', width:"220px"}
		    ],
		    url: '/api/v1/notice/list',
		}
	},
	async mounted() {
		try {
            await this.getUserRole();
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
    },
	methods: {
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/view-notice/'+action.data)
			}
			if(action.action === 'edit') {
				this.$router.push('/update-notice/'+action.data)
			}
			if(action.action === 'delete'){
				try {
					const res = await axios.post('/api/v1/notice/delete' , { id: action.data });
					this.$refs.vueDatatable.draw();
					this.$snotify.success(null, res.data.message);
				}
				catch(err) {
					this.$snotify.error(null, err.message);
				}
			}
		},
		async getUserRole(){
            const roleRes = await axios.get('/api/v1/auth/user/role')
			this.userRoleList = roleRes.data.data;
        },
        getRoleName(roleid){
			const roleData = _.find(this.userRoleList, (role) =>  role.id === parseInt(roleid));
			return roleData.name;
			
        }
	}
}
</script>