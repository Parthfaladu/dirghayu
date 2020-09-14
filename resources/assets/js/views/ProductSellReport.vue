<template>
	<DashboardPage v-can:view__product_sell>
		<div class="app-main__inner"> 
		<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-shopbag icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">PRODUCT SELL REPORT</div>
                    </div>
                </div>
        </div>          
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	           	<ProductSellReportTable></ProductSellReportTable>
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