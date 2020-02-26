<template>
	<DashboardPage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="pe-7s-display1 icon-gradient bg-premium-dark text-danger">
	                    </i>
	                </div>
	                <div>EXPENSE LIST</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-12">
	            <h5 class="card-title">
	            	<router-link to="/add-expense" class="btn btn-info mb-5">Add Expense</router-link>
	            </h5>
	           <ExpenseTable></ExpenseTable>
			</div>
	    </div>
	</div>
	</DashboardPage>
</template>

<script>
import ExpenseTable from '@components/ExpenseTable';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'ExpenseList',
	components: {
		ExpenseTable,
		DashboardPage
	}
}
</script>