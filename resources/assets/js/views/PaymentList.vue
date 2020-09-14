<template>
	<DashboardPage v-can:view__payment>
		<div class="app-main__inner">
			<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-cash icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">PAYMENT LIST</div>
                    </div>
                    <div v-can:add__payment class="align-content-end">
                        <router-link
                            to="/add-payment"
                            class="btn btn-outline-alternate-new all-add-new"
                            >Add Payment</router-link>
                    </div>
                </div>
            </div>         
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
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