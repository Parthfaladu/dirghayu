<template>
  <div id="app">
  	<DashboardComp>
    	<router-view></router-view>
		<vue-snotify></vue-snotify>
    </DashboardComp>
  </div>
</template>
<script>
import DashboardComp from '@components/DashboardComp';

export default {
	name: 'App',
	components: {
		DashboardComp
	}
}
</script>

<style>
@import '~@assets/css/main.css';
@import '~@assets/css/dataTables.bootstrap4.min.css';
@import "~vue-snotify/styles/material.css";

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

</style>
	