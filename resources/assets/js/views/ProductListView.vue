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
	                <div>PRODUCT LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-10 offset-sm-1">
	            <h5 class="card-title">
	            	<router-link to="/add-product" class="btn btn-info mb-5">Add Product</router-link>
	            </h5>
				<div class="table-responsive">
	           		<ProductTable></ProductTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>

<script>
import ProductTable from '@components/ProductTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'ProductListView',
	components: {
		ProductTable,
		DashboardPage
	}
}
</script>