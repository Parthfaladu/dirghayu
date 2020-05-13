<template>
	<DashboardPage v-can:permission_manage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="metismenu-icon pe-7s-tools">
	                    </i>
	                </div>
	                <div>USER PERMISSIONS</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body">
	            <div id="accordion" class="accordion-wrapper mb-3">
					<div v-if="manager" class="card">
						<div :id="'managercard'" class="card-header">
							<button type="button" data-toggle="collapse" :data-target="'#collapseOne'" aria-expanded="false" aria-controls="collapseOne" class="text-left m-0 p-0 btn btn-link btn-block collapsed">
								<h5 class="m-0 p-0"><i class="fas fa-chevron-down"></i> {{manager.name}}</h5>
							</button>
						</div>
						<div :data-parent="'#managercard'" :id="'collapseOne'" aria-labelledby="headingOne" class="collapse show">
							<div class="card-body">
								<div class="row">
									<div v-for="(permission, permissionIndex) in permissionList" :key="permissionIndex" class="col-sm-4 mb-3">
										<label><input v-model="managerPermissionIds" type="checkbox" class="mr-1" :value="permission.id" /> {{permission.name}}</label>
									</div>
								</div>			
							</div>
						</div>
					</div>
					<div v-if="staff" class="card">
						<div :id="'cardstaff'" class="card-header">
							<button type="button" data-toggle="collapse" :data-target="'#collapseSec'" aria-expanded="false" aria-controls="collapseOne" class="text-left m-0 p-0 btn btn-link btn-block collapsed">
								<h5 class="m-0 p-0"><i class="fas fa-chevron-down"></i> {{staff.name}}</h5>
							</button>
						</div>
						<div :data-parent="'#cardstaff'" :id="'collapseSec'" aria-labelledby="headingOne" class="collapse">
							<div class="card-body">
								<div class="row">
									<div v-for="(permission, permissionIndex) in permissionList" :key="permissionIndex" class="col-sm-4 mb-3">
										<label><input type="checkbox" class="mr-1" v-model="staffPermissionIds" :value="permission.id" /> {{permission.name}}</label>
									</div>
								</div>			
							</div>
						</div>
					</div>
					<div v-if="customer" class="card">
						<div :id="'cardcustomer'" class="card-header">
							<button type="button" data-toggle="collapse" :data-target="'#collapseThird'" aria-expanded="false" aria-controls="collapseOne" class="text-left m-0 p-0 btn btn-link btn-block collapsed">
								<h5 class="m-0 p-0"><i class="fas fa-chevron-down"></i> {{customer.name}}</h5>
							</button>
						</div>
						<div :data-parent="'#cardcustomer'" :id="'collapseThird'" aria-labelledby="headingOne" class="collapse">
							<div class="card-body">
								<div class="row">
									<div v-for="(permission, permissionIndex) in permissionList" :key="permissionIndex" class="col-sm-4 mb-3">
										<label><input type="checkbox" class="mr-1" v-model="customerPermissionIds" :value="permission.id" /> {{permission.name}}</label>
									</div>
								</div>			
							</div>
						</div>
					</div>
				</div>
				<center><button class="btn btn-success btn-lg mt-3" @click="submitForm" :disabled="isSubmit">Update Permissions</button></center>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import axios from 'axios';
import DashboardPage from '@layouts/DashboardPage';
import _ from 'lodash';

export default {
	name: 'UserPermission',
	components: {
		DashboardPage
    },
    data() {
        return {
			managerPermissionIds: [],
			staffPermissionIds: [],
			customerPermissionIds: [],
			roleList: [],
			permissionList: [],
			isSubmit: false,
        }
	},
	computed: {
		manager() {
			if(this.roleList) {
				return _.find(this.roleList, (role) => role.name === 'manager');
			}
			return null;
		},
		staff() {
			if(this.roleList) {
				return _.find(this.roleList, (role) => role.name === 'staff');
			}
			return null;
		},
		customer() {
			if(this.roleList) {
				return _.find(this.roleList, (role) => role.name === 'customer');
			}
			return null;
		}
	},
    async mounted() {
		await this.getPermissionList();
		await this.getRolePermissionList();
		this.setUserPermissionIds()
    },
    methods: {
        async getRolePermissionList() {
            const res = await axios.get('/api/v1/roles/permissions');
            this.roleList = res.data.data;
		},
		async getPermissionList() {
			const res = await axios.get('/api/v1/permissions');
            this.permissionList = res.data.data;
		},
		checkPermission(allPermissions, permissionId) {
			_.find(allPermissions, (permission) => permission.id === permissionId);
		},
		setUserPermissionIds() {
			_.forEach(this.roleList, (role) => {
				const ids = _.map(role.permissions, 'id');
				if(role.name === 'manager') {
					this.managerPermissionIds = ids;
				}
				else if(role.name === 'staff') {
					this.staffPermissionIds = ids;
				}
				else if(role.name === 'customer') {
					this.customerPermissionIds = ids;
				}
			})
		},
		async submitForm() {
			try {
				this.isSubmit = true;
				const res = await axios.post('/api/v1/roles/permissions',{
					'manager': this.managerPermissionIds,
					'staff': this.staffPermissionIds,
					'customer': this.customerPermissionIds
				});
				this.isSubmit = false;
				this.$snotify.success(null, res.data.message);
			} catch(err) {
				this.isSubmit = false;
				this.$snotify.success(null, err.message);
			}
		}
    }
}
</script>