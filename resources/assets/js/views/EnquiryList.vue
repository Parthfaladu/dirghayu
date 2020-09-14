<template>
	<DashboardPage v-can:view__enquiry>
		<div class="app-main__inner">
			<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-call icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">ENQUIRY LIST</div>
                    </div>
                    <div v-can:add__enquiry class="align-content-end">
                        <router-link
                            to="/add-enquiry"
                            class="btn btn-outline-alternate-new all-add-new"
                            >Add Enquiry</router-link>
                    </div>
                </div>
            </div>            
			<div class="main-card mb-3 card">
				<div class="card-body col-sm-12">
					<div class="table-responsive">
						<EnquiryTable></EnquiryTable>
					</div>
				</div>
			</div>
	</div>
	</DashboardPage>
</template>
<script>
import EnquiryTable from '@components/EnquiryTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'EnquiryList',
	components: {
		EnquiryTable,
		DashboardPage
	}
}
</script>