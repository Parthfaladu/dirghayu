<template>
	<DashboardPage v-can:add__product>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-diskette icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>PRODUCT DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <AddProductForm></AddProductForm>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import DashboardPage from '@layouts/DashboardPage';
import AddProductForm from '@components/forms/AddProductForm';

export default {
	name: 'AddProductView',
	components: {
		DashboardPage,
		AddProductForm,
	},
}
</script>