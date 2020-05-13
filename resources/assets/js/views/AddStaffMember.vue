<template>
	<DashboardPage v-can:add__staff_member>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-user icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>STAFF MEMBER DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <AddStaffMemberForm></AddStaffMemberForm>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import DashboardPage from '@layouts/DashboardPage';
import AddStaffMemberForm from '@components/forms/AddStaffMemberForm';

export default {
	name: 'AddStaffMember',
	components: {
		DashboardPage,
		AddStaffMemberForm,
	},
}
</script>