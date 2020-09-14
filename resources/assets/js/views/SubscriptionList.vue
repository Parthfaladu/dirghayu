<template>
	<DashboardPage v-can:view__subscription>
		<div class="app-main__inner">
			<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-bell icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">SUBSCRIPTION LIST</div>
                    </div>
                    <div v-can:add__subscription class="align-content-end">
                        <router-link
                            to="/add-subscription"
                            class="btn btn-outline-alternate-new all-add-new"
                            >Add Subscription</router-link
                        >
                    </div>
                </div>
            </div>         
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
				<div class="table-responsive">
	           		<SubscriptionTable></SubscriptionTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import SubscriptionTable from '@components/SubscriptionTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'ProductListView',
	components: {
		SubscriptionTable,
		DashboardPage
	}
}
</script>