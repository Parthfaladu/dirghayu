<template>
	<DashboardPage v-can:view__product>
		<div class="app-main__inner">
		<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-diskette icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">PRODUCT LIST</div>
                    </div>
                    <div v-can:add__product class="align-content-end">
                        <router-link
                            to="/add-product"
                            class="btn btn-outline-alternate-new all-add-new"
                            >Add Product</router-link>
                    </div>
                </div>
            </div>         
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
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