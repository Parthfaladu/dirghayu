<template>
	<VueDatatable :columns="columns" :url="url" :searching="false" :length-change="false" :order=order>
		<th>Id</th>
		<th>Customer Name</th>
		<th>Package Name</th>
		<th>Expiry Date</th>
	</VueDatatable>
</template>
<script>

import VueDatatable from '@components/custom/VueDatatable.vue';
import moment from 'moment';

export default {
	name: 'ExpirySubscription',
	components: {
		VueDatatable
	},
	data() {
		return {
			order: [[ 3, "desc" ]],
			columns: [
				{data:'id', name:'id'},
				{data:(data) =>{
					return data.user.first_name+' '+data.user.last_name;
				},name:'name'},
				{data:'package_name', name:'package_name'},
				{data:(data) =>{
					return moment(data.end_date).format("DD-MM-YYYY");
				}, name:'end_date'},
		    ],
		    url: '/api/v1/expiry/subscription',
		}
	},
	
}
</script>

<style lang="scss">
.dataTables_info {
	display: none;
}
</style>