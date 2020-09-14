<template>
	<DashboardPage v-can:add__expense>
		<div class="app-main__inner">      
		<div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-diamond icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">EXPENSE DETAIL</div>
                    </div>
                </div>
			</div>      
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <AddExpenseForm></AddExpenseForm>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import DashboardPage from '@layouts/DashboardPage';
import AddExpenseForm from '@components/forms/AddExpenseForm';

export default {
	name: 'AddExpense',
	components: {
		DashboardPage,
		AddExpenseForm,
	},	
}
</script>