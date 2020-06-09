<template>
    <div>
        <div class="position-relative form-group row mb-5">
            <div class="col-sm-2">
                <label for="attendanceDate" class="mr-3 mt-2">Customer</label>
                <select v-model="customerId" class="form-control" @change="changeFilter">
                    <option :value="null">All Customer</option>
                    <option v-for="customer in customerList" :key="customer.id" :value="customer.id" :selected="customer.id ===  customerId">{{customer.first_name}} {{customer.last_name}} </option>
                </select>
            </div>
            <div class="col-sm-2">
                <label for="attendanceDate" class="mr-3 mt-2">Product</label>
                <select v-model="productName" class="form-control" name="product_name" @change="changeFilter">
                    <option :value="null">All Product</option>
                    <option v-for="product in productList" :key="product.id" :value="product.name" :selected="productName ===  product.name">{{product.name}}</option>
                </select>
            </div>
            <div class="col-sm-4 offset-4 text-right mt-4">
                <button class="btn btn-danger" @click="downloadReport()">Download in PDF</button>
            </div>
        </div>
        <VueDatatable ref="vueDatatable" :columns="columns" :url="url">
            <th>Id</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Quantity</th>
            <th>Amount</th>
        </VueDatatable>
    </div>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import downloadjs from 'downloadjs';

export default {
	name: 'ProductSellReportTable',
	components: {
		VueDatatable
	},
	data() {
		return {
            customerId: null,
            productName: null,
            customerList: [],
            productList: [],
			columns: [
				{data:'id', name:'id', width:"100px"},
				{data:function(data){
					return data.product_name;
				}, name:'product'},
				{data:function(data){
					return data.user.first_name+' '+data.user.last_name;
				}, name:'user_id'},
				{data:'quantity', name:'quantity', width:"80px"},
				{data:(data)=>{
					return data.paid_amount+' '+this.$store.getters['init/currency'];
				}, name:'paid_amount', width:"120px"},
			],
			url: '/api/v1/productsell/report',
		}
    },
    mounted() {
        this.getCustomerList();
        this.getProductList();
    },
	methods: {
        async getProductList() {
			const productRes = await axios.get('/api/v1/product/list')
		    this.productList = productRes.data.data
		},
		async getCustomerList() {
			const userRes = await axios.get('/api/v1/customer/list')
			this.customerList = userRes.data.data
		},
        changeFilter() {
			this.$refs.vueDatatable.reload(`/api/v1/productsell/report/${this.customerId}/${this.productName}`);
        },
        async downloadReport() {
			const res = await axios({
				url:'/api/v1/productsell/report/download', 
				method: 'POST',
                responseType: 'blob',
				data: {
					customerId: this.customerId,
					packageName: this.packageName
				}
			});
			
			downloadjs(res.data, "product_sell_report.pdf", "application/pdf");
		}
	}
}
</script>