<template>
	<DashboardPage v-can:view__invoice>
		<div class="app-main__inner">  
			<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-news-paper icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">INVOICE LIST</div>
                    </div>
                    <div v-can:add__invoice class="align-content-end">
                        <router-link
                            to="/add-invoice"
                            class="btn btn-outline-alternate-new all-add-new"
                            >Add Invoice</router-link
                        >
                    </div>
                </div>
            </div>         
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
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