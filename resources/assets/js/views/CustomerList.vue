<template>
	<DashboardPage v-can:view__customer>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-add-user icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>CUSTOMER LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 v-can:add__customer class="card-title">
	            	<router-link to="/add-customer" class="btn btn-outline-primary mb-5 pull-right">Add Customer</router-link>
	            </h5>
				<div class="table-responsive">
	           		<CustomerTable></CustomerTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import CustomerTable from '@components/CustomerTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'PaymentList',
	components: {
		CustomerTable,
		DashboardPage
	}
}
</script>