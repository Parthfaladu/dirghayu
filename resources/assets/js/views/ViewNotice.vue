<template>
	<DashboardPage v-can:view__notice>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-note icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>NOTICE DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div v-if="notice && userRoleList" class="main-card mb-3 card">
	        <div class="card-body">
	            <h5 class="card-title"></h5>
				<div class="row justify-content-center">
					<h3>{{notice.title}}</h3>
				</div>
				<div class="row offset-sm-1 mt-5">
					<h5>Dear, {{ getRoleName(notice.role_id) }}</h5>
				</div>
				<div class="row offset-sm-1 mt-2">
					<h6>{{notice.detail}}</h6>
				</div>
	            <div class="position-relative form-group float-right from-margin">
					<div class="mt-2"><h5>From</h5></div>
                    <div class="">{{ notice.userfrom.first_name }} {{ notice.userfrom.last_name }}</div>
                </div>
                
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import DashboardPage from '@layouts/DashboardPage';
import axios from 'axios';
import _ from 'lodash';

export default {
	name: 'ViewNotice',
	components: {
		DashboardPage,
    },
    data() {
		return {
            notice: null,
            userRoleList: null
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null) {
                this.getNoticeList(); 
            }
            await this.getUserRole();
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
    },
    methods: {
		async getNoticeList() {
			const res   = await axios.get('/api/v1/notice/list/'+this.$route.params.id)
			this.notice = res.data.data
        },
        async getUserRole(){
            const roleRes = await axios.get('/api/v1/auth/user/role')
            this.userRoleList = roleRes.data.data
        },
        getRoleName(roleid){
            const roleData = _.find(this.userRoleList, (role) =>  role.id === roleid);
            return roleData.name;
        }
    }
}
</script>
<style scoped>
	.title-data{
		width: 60px;
	}
	.from-margin{
		margin-right:60px;
	}
</style>