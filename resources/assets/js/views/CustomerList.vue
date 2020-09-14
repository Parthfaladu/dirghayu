<template>
	<DashboardPage v-can:view__customer>
		<div class="app-main__inner">     
			<div class="app-page-title">
				<div class="page-title-wrapper d-flex">
					<div class="page-title-heading mr-auto align-content-start">
						<div class="page-title-icon">
							<i class="pe-7s-add-user icon-gradient bg-premium-dark text-danger"></i>
						</div>
						<div class="heading-font-weight">CUSTOMER LIST</div>
					</div>
					<div v-can:add__customer class="align-content-end">
						<router-link
							to="/add-customer"
							class="btn btn-outline-alternate-new all-add-new"
							>Add Customer</router-link
						>
					</div>
				</div>
			</div>      
			<div class="main-card mb-3 card">
				<div class="card-body col-sm-12">
					<div class="table-responsive">
						<CustomerTable></CustomerTable>
					</div>
				</div>
			</div>
		</div>
	</DashboardPage>
</template>
<script>
import CustomerTable from '@components/CustomerTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'PaymentList',
	components: {
		CustomerTable,
		DashboardPage
	}
}
</script>