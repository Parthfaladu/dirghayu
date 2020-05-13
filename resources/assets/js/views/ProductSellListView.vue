<template>
	<DashboardPage v-can:view__product_sell>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-shopbag icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>PRODUCT SELL LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 v-can:add__product_sell class="card-title">
	        		<router-link to="/add-product-sell" class="btn btn-outline-primary mb-5 pull-right">Add Product Sell</router-link>
	            </h5>
				<div class="table-responsive">
					<ProductSellTable></ProductSellTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import ProductSellTable from '@components/ProductSellTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'ProductSellListView',
	components: {
		ProductSellTable,
		DashboardPage
	}
}
</script>