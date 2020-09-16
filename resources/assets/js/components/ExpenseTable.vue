<template>
	<VueDatatable ref="vueDatatable" v-can:view__expense :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Item</th>
		<th>Purchase Date</th>
		<th>Bill No.</th>
        <th>Price</th>
		<th v-show="$can('update__expense') || $can('delete__expense')">Action</th>
    </VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import moment from 'moment';

export default {
	name: 'ExpenseTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
		        {data:'id', name:'id', width:"40px"},
		        {data:'item_name', name:'item_name'},
		        {data:(data) =>{
					return moment(data.purchase_date).format("DD-MM-YYYY");
				}, name:'purchase_date', width:"100px"},
		        {data:'bill_no', name:'bill_no', width:"120px"},
                {data:(data) => {
					return data.price+' '+this.$store.getters['init/currency'];
				}, name:'price', width:"50px"},
		        {data:(data) => {
					let actions = "";
					if(this.$can('update__expense')) {
						actions += "<button class='btn btn-outline-primary-new' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button>";
					}
					if(this.$can('delete__expense')) {
						actions += " <button class='btn btn-outline-danger-new' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
					}
					return actions;
	          	}, name:'action', width:"130px"}
		    ],
		    url: '/api/v1/expense/list',
		}
	},
	mounted() {
		if(this.$route.params.message){
			this.$snotify.success(null, this.$route.params.message);
		}
	},
	methods: {
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/update-expense/'+action.data)
			}
			if(action.action === 'delete'){
				try {
					const res = await axios.post('/api/v1/expense/delete' , { id: action.data });
					this.$refs.vueDatatable.draw();
					this.$snotify.success(null, res.data.message);
				}
				catch(err) {
					this.$snotify.error(null, err.message);
				}
			}
		}
	}
}
</script>