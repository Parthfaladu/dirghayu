<template>
	<DashboardPage v-can:view__staff_member>
		<div class="app-main__inner">  
			<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-user icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">STAFF MEMBER LIST</div>
                    </div>
                    <div v-can:add__staff_member class="align-content-end">
                        <router-link
                            to="/add-staff-member"
                            class="btn btn-outline-alternate-new all-add-new"
                            >Add New Staff</router-link>
                    </div>
                </div>
            </div>       
		    <div class="main-card mb-3 card">
		        <div class="card-body col-sm-12">
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