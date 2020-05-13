<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-usb icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>BRANCH DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <AddBranchForm></AddBranchForm>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>

<script>
import DashboardPage from '@layouts/DashboardPage';
import AddBranchForm from '@components/forms/AddBranchForm';

export default {
	name: 'AddBranch',
	components: {
		DashboardPage,
		AddBranchForm
	},
}
</script>