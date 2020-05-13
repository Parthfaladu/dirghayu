<template>
	<DashboardPage v-can:add__invoice>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-news-paper icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>INVOICE DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 class="card-title"></h5>
	            <AddInvoiceForm></AddInvoiceForm>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import DashboardPage from '@layouts/DashboardPage';
import AddInvoiceForm from '@components/forms/AddInvoiceForm';

export default {
	name: 'AddInvoice',
	components: {
		DashboardPage,
		AddInvoiceForm,
	},
}
</script>