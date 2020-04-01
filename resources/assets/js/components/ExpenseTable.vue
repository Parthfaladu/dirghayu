<template>
	<VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Item Name</th>
		<th>Purchase Date</th>
		<th>Bill No.</th>
        <th>Price</th>
		<th>Branch</th>
		<th>Action</th>
    </VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';

export default {
	name: 'ExpenseTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
		        {data:'id', name:'id'},
		        {data:'item_name', name:'item_name'},
		        {data:'purchase_date', name:'purchase_date'},
		        {data:'bill_no', name:'bill_no'},
                {data:'price', name:'price'},
                {data:'branch_id', name:'branch_id'},
		        {data:function(data){
	            	return "<button class='btn btn-outline-alternate' data-g-action='view' data-g-actiondata="+data.id+"><i class='fas fa-edit'></i> <span class='button-text'>Edit</span></button> <button class='btn btn-outline-danger' data-g-action='delete' data-g-actiondata="+data.id+"><i class='fas fa-trash-alt'></i> <span class='button-text'>Delete</span></button>";
	          	}, name:'action'}
		    ],
		    url: '/api/v1/expense/list',
		}
	},
	methods: {
		
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/update-expense/'+action.data)
				// console.log(action.data);
			}
			if(action.action === 'delete'){
				try{
					const expenseId = action.data
					const res = await axios.post('/api/v1/expense/delete' , { id: expenseId }, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
					this.$snotify.success(null, res.data.message);
				}
				catch(err){
					this.$snotify.error(null, err.message);

				}
			}
		}
	}

}
</script>