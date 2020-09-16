<template>
	<DashboardPage v-can:add__product>
		<div class="app-main__inner">    
			<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-diskette icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">PRODUCT DETAIL</div>
                    </div>
                </div>
			</div>        
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-8 offset-sm-2">
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