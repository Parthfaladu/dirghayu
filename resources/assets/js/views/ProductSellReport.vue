<template>
	<DashboardPage v-can:view__product_sell>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-usb icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>PRODUCT SELL REPORT</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
				<div class="table-responsive">
	           		<ProductSellReportTable></ProductSellReportTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import ProductSellReportTable from '@components/ProductSellReportTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'ProductSellReport',
	components: {
		ProductSellReportTable,
		DashboardPage
	}
}
</script>