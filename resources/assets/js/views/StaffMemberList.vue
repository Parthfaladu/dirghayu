<template>
	<DashboardPage>
		<div class="app-main__inner">
			<div class="app-page-title">
		    	<div class="page-title-wrapper">
		            <div class="page-title-heading">
		                <div class="page-title-icon">
		                    <i class="pe-7s-display1 icon-gradient bg-premium-dark text-danger">
		                    </i>
		                </div>
		                <div>STAFF MEMBER LIST</div>
		            </div>    
		        </div>
		    </div>            
		    <div class="main-card mb-3 card">
		        <div class="card-body col-sm-12">
		            <h5 class="card-title mt-4">
		            	<router-link to="/add-staff-member" class="btn btn-info mb-5">Add New Staff</router-link>
		            </h5>
					<div class="table-responsive">
	            		<StaffMemberTable></StaffMemberTable>
					</div>
		        </div>
		    </div>
		</div>
	</DashboardPage>
</template>
<script>
import StaffMemberTable from '@components/StaffMemberTable.vue';
import DashboardPage from '@layouts/DashboardPage.vue';

export default {
	name: 'StaffMemberList',
	components: {
		StaffMemberTable,
		DashboardPage
	}
}
</script>