<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper d-flex">
	            <div class="page-title-heading mr-auto align-content-start">
	                <div class="page-title-icon">
	                    <i class="pe-7s-usb icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>BRANCH LIST</div>
	            </div>  
				<div v-can:add__branch class="align-content-end">
                    <router-link to="/add-branch" class="btn btn-outline-alternate-new all-add-new">Add Branch</router-link>
                </div>  
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
				<div class="table-responsive">
	           		<BranchTable></BranchTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import BranchTable from '@components/BranchTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'PaymentList',
	components: {
		BranchTable,
		DashboardPage
	}
}
</script>