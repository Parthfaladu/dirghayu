<template>
	<DashboardPage v-can:add__customer>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-add-user icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>CUSTOMER DETAIL</div>
	            </div>    
	        </div>
	    </div> 
        <AddCustomerForm></AddCustomerForm>
	</div>
	</DashboardPage>
</template>

<script>
import DashboardPage from '@layouts/DashboardPage';
import AddCustomerForm from '@components/forms/AddCustomerForm';

export default {
	name: 'AddCustomer',
	components: {
        DashboardPage,
        AddCustomerForm,
	},
}
</script>