<template>
	<DashboardPage v-can:add__subscription>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-bell icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>SUBSCRIPTION DETAIL</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <AddSubscriptionForm></AddSubscriptionForm>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import DashboardPage from '@layouts/DashboardPage';
import AddSubscriptionForm from '@components/forms/AddSubscriptionForm';

export default {
	name: 'AddProductView',
	components: {
		DashboardPage,
		AddSubscriptionForm,
	},
}
</script>