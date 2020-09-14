<template>
	<DashboardPage v-can:view__subscription>
		<div class="app-main__inner"> 
			<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-bell icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">SUBSCRIPTION REPORT</div>
                    </div>
                </div>
        	</div>           
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	           	<SubscriptionReportTable></SubscriptionReportTable>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import SubscriptionReportTable from '@components/SubscriptionReportTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'SubscriptionReport',
	components: {
		SubscriptionReportTable,
		DashboardPage
	}
}
</script>