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
	                <div>INVOICE LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 class="card-title">
	            	<router-link to="/add-invoice" class="btn btn-info mb-5">Add Invoice</router-link>
	            </h5>
				<div class="table-responsive">
	           		<InvoiceTable></InvoiceTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>

<script>
import InvoiceTable from '@components/InvoiceTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'InvoiceList',
	components: {
		InvoiceTable,
		DashboardPage
	},
	mounted() {
		console.log('mounted');
		this.$snotify.success(null,'Example body content');
	}
}
</script>