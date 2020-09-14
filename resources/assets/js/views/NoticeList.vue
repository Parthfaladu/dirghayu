<template>
	<DashboardPage v-can:view__notice>
		<div class="app-main__inner">
			<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-note icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">NOTICE LIST</div>
                    </div>
                    <div v-can:add__notice class="align-content-end">
                        <router-link
                            to="/add-notice"
                            class="btn btn-outline-alternate-new all-add-new"
                            >Add Notice</router-link
                        >
                    </div>
                </div>
            </div>           
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
				<div class="table-responsive">
	           		<NoticeTable></NoticeTable>
				</div>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>

<script>
import NoticeTable from '@components/NoticeTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'NoticeListView',
	components: {
		NoticeTable,
		DashboardPage
	}
}
</script>