<template>
    <div>
        <div class="position-relative form-group row mb-5">
            <div class="col-sm-2">
                <span v-can:add__subscription>
                    <label for="attendanceDate" class="mr-3 mt-2">Customer</label>
                    <select v-model="customerId" class="form-control" @change="changeFilter">
                        <option :value="null">All Customer</option>
                        <option v-for="customer in customerList" :key="customer.id" :value="customer.id" :selected="customer.id ===  customerId">{{customer.first_name}} {{customer.last_name}} </option>
                    </select>
                </span>
            </div>
            <div class="col-sm-2">
                <label for="attendanceDate" class="mr-3 mt-2">Package</label>
                <select v-model="packageName" class="form-control" @change="changeFilter">
                    <option :value="null">All Package</option>
                    <option v-for="singlePackage in packageList" :key="singlePackage.id" :value="singlePackage.name" :selected="singlePackage.id === packageName">{{singlePackage.name}}</option>
                </select>
            </div>
            <div class="col-sm-2">
                <label for="attendanceDate" class="mr-3 mt-2">Status</label>
                <select v-model="status" class="form-control" @change="changeFilter">
                    <option :value="null">All Status</option>
                    <option :value="'active'">Active</option>
                    <option :value="'expired'">Expired</option>
                </select>
            </div>
            <div v-can:view__subscription class="col-sm-4 offset-2 text-right mt-4">
                <button class="btn btn-danger" @click="downloadReport()">Download in PDF</button>
            </div>
        </div>
        <VueDatatable ref="vueDatatable" :columns="columns" :url="url">
            <th>Id</th>
            <th>Customer</th>
            <th>Package</th>
            <th>Start Date</th>
            <th>Duration(In Month)</th>
            <th>End Date</th>
            <th>Paid Amount</th>
            <th>Remaining Amount</th>
            <th>Status</th>
        </VueDatatable>
    </div>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import Swal from 'sweetalert2'
import moment from 'moment';
import downloadjs from 'downloadjs';

export default {
	name: 'SubscriptionReportTable',
	components: {
		VueDatatable
	},
	data() {
		return {
            customerId: null,
            packageName: null,
            status: null,
            customerList: [],
            packageList: [],
			columns: [
				{data:'id', name:'id', width:"80px"},
				{data:function(data){
					return data.user.first_name+' '+data.user.last_name;
				}, name:'name'},
				{data:'package_name', name:'package_name'},
				{data:(data) => {
					return moment(data.start_date).format("DD-MM-YYYY");
				}, name:'start_date', width:"100px"},
				{data:'duration', name:'duration', width:"50px"},
				{data:(data) => {
					return moment(data.end_date).format("DD-MM-YYYY");
				}, name:'end_date', width:"100px"},
				{data:(data) =>{
					if(data.payment.length > 0){
						return data.payment[0].paid_amount+' '+this.$store.getters['init/currency'];
					}
					else{
						return '0'+' '+this.$store.getters['init/currency'];
					}
				}, name:'paid_amount', width:"80px"},
				{data: (data) =>{
					if(data.payment.length > 0){
						return data.payment[0].remaining_amount+' '+this.$store.getters['init/currency'];
					}
					else{
						return data.amount+' '+this.$store.getters['init/currency'];;
					}
                }, name:'remaining_amount', width:"80px"},
                {data: (data) => {
                    return moment(data.end_date).isSameOrAfter(moment()) ? 'Active' : 'Expired';
				}, name:'status', width:"100px"}
			],
			url: '/api/v1/subscription/report',
		}
    },
    mounted() {
        if(this.$can('add__subscription')) {
            this.getCustomerList();
        }
        this.getPackageList();
    },
	methods: {
        async getCustomerList() {
			const res = await axios.get('/api/v1/customer/list')
			this.customerList = res.data.data
        },
        async getPackageList() {
            const packageRes = await axios.get('/api/v1/package/list')
			this.packageList = packageRes.data.data
		},
        changeFilter() {
			this.$refs.vueDatatable.reload(`/api/v1/subscription/report/${this.customerId}/${this.packageName}/${this.status}`);
        },
        async downloadReport() {
			const res = await axios({
				url:'/api/v1/subscription/report/download', 
				method: 'POST',
                responseType: 'blob',
				data: {
					customerId: this.customerId,
					packageName: this.packageName,
					status: this.status
				}
			});
			
			downloadjs(res.data, "subscription_report.pdf", "application/pdf");
		}
	}
}
</script>