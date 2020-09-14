<template>
	<DashboardPage v-can:view__attendance>
		<div class="app-main__inner">
		<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-news-paper icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">ATTANDANCE LIST</div>
                    </div>
                </div>
            </div>         
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	           	<AttendanceTable></AttendanceTable>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import AttendanceTable from '@components/AttendanceTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'PaymentList',
	components: {
		AttendanceTable,
		DashboardPage
	}
}
</script>