<template>
<div>
	<div class="position-relative form-group row mb-5">
		<div class="col-sm-2">
			<label for="attendanceDate" class="mr-3 mt-2">From</label>
			<VueJqueryCalendar v-model="fromDate" :class-name="'form-control'" date-format="dd-mm-yy" :readonly="true" @change="changeFilter" />
		</div>
		<div class="col-sm-2">
			<label for="attendanceDate" class="mr-3 mt-2">To</label>
			<VueJqueryCalendar v-model="toDate" :class-name="'form-control'" date-format="dd-mm-yy" :readonly="true" @change="changeFilter" />
		</div>
		<div class="col-sm-3">
			<span v-if="$can('add__attendance')">
				<label for="attendanceDate" class="mr-3 mt-2">Customer</label>
				<select v-model="customerId" class="form-control" @change="changeFilter">
					<option :value="null">All Customer</option>
					<option v-for="customer in customerList" :key="customer.id" :value="customer.id" :selected="customer.id ===  customerId">{{customer.first_name}} {{customer.last_name}} </option>
				</select>
			</span>
		</div>
		<div v-can:view__attendance  class="col-sm-3 offset-2 text-right mt-4">
			<button class="btn btn-outline-alternate-new" @click="downloadReport()">Download in PDF</button>
		</div>
	</div>
	<div class="table-responsive">
    <VueDatatable ref="vueDatatable" :columns="columns" :url="url">
		<th>Id</th>
		<th>Customer Name</th>
		<th>Date</th>
		<th>Status</th>
	</VueDatatable>
	</div>
</div>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import moment from 'moment';
import VueJqueryCalendar from 'vue-jquery-calendar';
import downloadjs from 'downloadjs';

export default {
	name: 'AttendanceReportTable',
	components: {
		VueDatatable,
		VueJqueryCalendar,
	},
	data() {
		return {
			fromDate: moment().subtract(30, "days").format("DD-MM-YYYY"),
			toDate: moment().format("DD-MM-YYYY"),
			customerId: null,
			customerList: [],
			columns: [
				{data:'id', name:'id', width:"15%"},
                {data:function(data){
                    if(data && data.user){
						return data.user.first_name+' '+data.user.last_name
					}
					return null;
				}, name:'name'},
				{data:(data) => {
                    return   moment(data.date).format("DD-MM-YYYY");
				}, name:'date', width:"20%"},
				{data:function(data){
					return 'Present';
				}, name:'status', width:"20%"}
			],
			url: `/api/v1/attendance/report/${moment().subtract(30, "days").format("DD-MM-YYYY")}/${moment().format("DD-MM-YYYY")}`,
		}
	},
	mounted() {
		if(this.$can('view__customer')){
			this.getCustomerList();
		}
	},
	methods: {
		async getCustomerList() {
			const res = await axios.get('/api/v1/customer/list')
			this.customerList = res.data.data
		},
		changeFilter() {
			this.$refs.vueDatatable.reload(`/api/v1/attendance/report/${this.fromDate}/${this.toDate}/${this.customerId}`);
		},
		async downloadReport() {
			const res = await axios({
				url:'/api/v1/attendance/report/download', 
				method: 'POST',
                responseType: 'blob',
				data: {
					from: this.fromDate,
					to: this.toDate,
					customerId: this.customerId
				}
			});
			
			downloadjs(res.data, "attendance_report.pdf", "application/pdf");
		}
	}
}
</script>