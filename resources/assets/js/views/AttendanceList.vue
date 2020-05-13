<template>
	<DashboardPage v-can:view__attendance>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="metismenu-icon pe-7s-news-paper"></i>
	                </div>
	                <div>ATTANDANCE LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <!-- <h5 class="card-title">
	            	<router-link to="/add-branch" class="btn btn-outline-primary mb-5 pull-right">Add Branch</router-link>
	            </h5> -->
				<div class="table-responsive">
	           		<AttendanceTable></AttendanceTable>
				</div>
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