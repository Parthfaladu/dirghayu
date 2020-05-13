<template>
	<DashboardPage v-can:view__attendance>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-usb icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>ATTANDANCE REPORT</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
				<div class="table-responsive">
	           		<AttendanceReportTable></AttendanceReportTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import AttendanceReportTable from '@components/AttendanceReportTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'AttendanceReport',
	components: {
		AttendanceReportTable,
		DashboardPage
	}
}
</script>