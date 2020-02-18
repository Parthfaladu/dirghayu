<template>
	<DashboardPage>
		<DashboardComp></DashboardComp>
	</DashboardPage>
</template>

<script>
import DashboardComp from '@components/DashboardComp';
import DashboardPage from '@layouts/DashboardPage';

export default {
	name: 'Dashboard',
	components: {
		DashboardComp,
		DashboardPage
	}
}
</script>