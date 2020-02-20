<template>
	<VueDatatable :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th>Title</th>
		<th>To</th>
		<th>From</th>
		<th>Detail</th>
		<th>Action</th>
    </VueDatatable>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';

export default {
	name: 'NoticeTable',
	components: {
		VueDatatable
	},
	data() {
		return {
			columns: [
		        {data:'id', name:'id'},
		        {data:'title', name:'title'},
		        {data:function(data){
		        	return data.userto.first_name+' '+data.userto.last_name;
		        }, name:'to_id'},
		        {data:function(data){
		        	return data.userfrom.first_name+' '+data.userfrom.last_name;
		        }, name:'from_id'},
		        {data:'detail', name:'detail'},
		        {data:function(data){
	            	return "<button class='btn btn-primary' data-g-action='view' data-g-actiondata="+data.id+">Update</button> <button class='btn btn-danger' data-g-action='delete' data-g-actiondata="+data.id+">Delete</button>";
	          	}, name:'action'}
		    ],
		    url: 'http://localhost:8000/api/v1/notice/list',
		}
	},
	methods: {
		
		async onAction(action) {
			if(action.action === 'view') {
				this.$router.push('/update-notice/'+action.data)
				//console.log(action.data);
			}
			if(action.action === 'delete'){
				try{
					let noticeId = action.data
					let res = await axios.post('http://localhost:8000/api/v1/notice/delete' , { id: noticeId }, { headers: {"Authorization" : this.$store.getters['auth/authHeaders'].Authorization} });
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