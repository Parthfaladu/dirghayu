<template>
  <div id="app">
  	<DashboardComp>
    	<router-view :key="$route.fullPath"></router-view>
    </DashboardComp>
  </div>
</template>
<script>
import DashboardComp from '@components/DashboardComp';

export default {
	name: 'App',
	components: {
		DashboardComp
	},
}
</script>

<style>
@import '~@assets/css/main.css';
@import '~@assets/css/dataTables.bootstrap4.min.css';
@import "~vue-snotify/styles/material.css";
@import '~jquery-ui-dist/jquery-ui.css';

	@media only screen and (min-width: 667px) {
		.snotifyToast__title {
			font-size: 19px !important;
		}
		.snotify {
			width: 440px !important;
		}
	}
	@media only screen and (max-width: 667px) {
		.snotify-icon--success {
			background: no-repeat !important;
		}
		.snotify-icon--error {
			background: no-repeat !important;
		}
	}
	.card-body{
		padding: 3.25rem;
	}
	.button-text {
		display: inline;
	}
	@media only screen and (max-width: 667px) {
		.button-text {
			display: none;
		}
	}
	.app-main__inner{
		background-color: #f3f6f9;
	}
	.dashboard-head-font{
		font-weight:600;
	}
	.cursor-pointer {
		cursor: pointer;
	}
	.datepicker.form-control[readonly] {
		background-color: white !important;
	}
	.btn-outline-warning:hover{
		color: #ffff !important;
	}
	.btn-outline-alternate-new{
		color: #3699FF;
    	background-color: #E1F0FF;
    	border-color: transparent;
	}
	.btn-outline-alternate-new:hover{
		color: #E1F0FF;
    	background-color: #3699FF;
    	border-color: transparent;
	}
	.btn-outline-danger-new{
		color: #F64E60;
		background-color: #FFE2E5;
		border-color: transparent;
	}
	.btn-outline-danger-new:hover{
		color: #FFE2E5;
		background-color: #F64E60;
		border-color: transparent;
	}
	.btn-outline-warning-new{
		color: #FFA800;
		background-color: #FFF4DE;
		border-color: transparent;
	}
	.btn-outline-warning-new:hover{
		color: #FFF4DE;
		background-color: #FFA800;
		border-color: transparent;
	}
	.btn-outline-primary-new
	{
		color: #1BC5BD;
		background-color: #C9F7F5;
		border-color: transparent;
	}
	.btn-outline-primary-new:hover{
		color: #C9F7F5;
		background-color: #1BC5BD;
		border-color: transparent;
	}
	
	.btn-outline-info-new{
		color: #8950FC;
    	background-color: #EEE5FF;
    	border-color: transparent;
	}
	.btn-outline-info-new:hover{
		color: #EEE5FF;
    	background-color: #8950FC;
    	border-color: transparent;
	}
	.btn-outline-success-new{
		color:#00bcd4;
		background-color: #dbf4f7;
	}
	.btn-outline-success-new:hover{
		color:#dbf4f7;
		background-color: #00bcd4;
		border-color: transparent;
	}
	.all-add-new{
		font-weight:600;
		font-size: 16px;
	}
	.heading-font-weight{
		font-weight: 600;
	}
	.app-page-title{
		padding-bottom: 12px!important;
	}
	.router-link-active{
		background-color: #e0f3ff;	
	}
	.page-link{
		border-radius: 10px!important;
    	font-weight: 600;
    	margin-right: 10px;
	}
	.page-item.active .page-link, .pagination .active.page-number .page-link{
		background-color: #3fc5bc;
    	border-color: #3fc5bc;
	}
	.previous{
		border-radius: 10px;
	}
	.bg-light-success{
		background-color: #C9F7F5 !important;
		color: #1BC5BD !important;
	}
	.fa-spin{
		animation: none !important;
	}
	.fa-2x {
		line-height: 2.1;
		padding-left: 1px;
		font-size: 1.5em;
	}
	.btn-open-options {
		margin-left: 10px;
		padding: 0;
		height: 42px;
		line-height: 40px;
		width: 42px;
		text-align: center;
		display: block;
		left: -15px;		
	}
</style>
	