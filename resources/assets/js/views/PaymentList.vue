<template>
	<DashboardPage v-can:view__payment>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-cash icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>PAYMENT LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 v-can:add__payment class="card-title">
	            	<router-link to="/add-payment" class="btn btn-outline-primary mb-5 pull-right">Add Payment</router-link>
	            </h5>
				<div class="table-responsive">
	           		<PaymentTable></PaymentTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import PaymentTable from '@components/PaymentTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'PaymentList',
	components: {
		PaymentTable,
		DashboardPage
	}
}
</script>