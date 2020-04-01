<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-call icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>ENQUIRY LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 class="card-title">
	            	<router-link to="/add-enquiry" class="btn btn-outline-primary mb-5 pull-right">Add Enquiry</router-link>
	            </h5>
				<div class="table-responsive">
	           		<EnquiryTable></EnquiryTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>

<script>
import EnquiryTable from '@components/EnquiryTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'EnquiryList',
	components: {
		EnquiryTable,
		DashboardPage
	}
}
</script>