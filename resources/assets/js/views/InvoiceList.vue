<template>
	<DashboardPage v-can:view__invoice>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-news-paper icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>INVOICE LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 v-can:add__invoice class="card-title">
	            	<router-link to="/add-invoice" class="btn btn-outline-primary mb-5 pull-right">Add Invoice</router-link>
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
	
}
</script>