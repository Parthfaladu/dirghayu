<template>
<div v-can:view__attendance>
	<span class="position-relative form-group row ml-1 mb-5" >
		<label for="attendanceDate" class="mr-3 mt-2">Date</label>
		<VueJqueryCalendar v-model="attendanceDate" :class-name="'form-control'" date-format="dd-mm-yy" :readonly="true" @change="changeDate" />
	</span>
	<div class="table-responsive">
    <VueDatatable ref="vueDatatable" :columns="columns" :url="url" @gaction="onAction">
		<th>Id</th>
		<th v-show="$can('update__attendance')">Action</th>
		<th v-show="!$can('update__attendance')">Status</th>
		<th>Customer Name</th>	
	</VueDatatable>
	</div>
</div>
</template>
<script>
import axios from 'axios';
import VueDatatable from '@components/custom/VueDatatable.vue';
import moment from 'moment';
import VueJqueryCalendar from 'vue-jquery-calendar';

export default {
	name: 'AttendanceTable',
	components: {
		VueDatatable,
		VueJqueryCalendar,
	},
	data() {
		return {
            attendanceDate: moment().format("DD-MM-YYYY"),
			columns: [
				{data:'id', name:'id', width:"20%"},
				{data:(data) => {
					if(this.$can('update__attendance')) {
						if(data.attendance.length > 0)
						{
							return "<button class='btn btn-outline-success-new' data-g-action='uncheck' data-g-actiondata="+data.id+"><i class='fas fa-lock'></i> <span class='button-text'>Checked In</span></button>"
						}else{
							return "<button class='btn btn-outline-danger-new' data-g-action='check' data-g-actiondata="+data.id+"><i class='fas fa-unlock'></i> <span class='button-text'>Check In</span></button>";
						}
					}
					if(data.attendance.length > 0)
					{
						return "<label class='text-success'>Present</label>"
					}else{
						return "<label class='text-danger'>Absent</label>"
					}
				}, name:'action', width:"20%"},
                {data:function(data){
                    return data.customer;
                }, name:'customer'}
			],
			url: '/api/v1/attendance/list/'+ moment().format("DD-MM-YYYY"),
		}
    },
    async mounted() {
		
    },
	methods: {
		async onAction(action) {
			if(action.action === 'check') {
				try {
					const checkRes = await axios.post('/api/v1/attendance/create' , { user_id: action.data, date: this.attendanceDate  });
					this.$refs.vueDatatable.draw();
					this.$snotify.success(null, checkRes.data.message);
				}
				catch(err) {
					this.$snotify.error(null, err.message);
				}
			}
			if(action.action === 'uncheck'){
				try {
					const uncheckRes = await axios.post('/api/v1/attendance/uncheck' , { user_id: action.data, date: this.attendanceDate });
					this.$refs.vueDatatable.draw();
					this.$snotify.success(null, uncheckRes.data.message);
				}
				catch(err) {
					this.$snotify.error(null, err.message);
				}
			}
		},
		changeDate() {
			this.$refs.vueDatatable.reload('/api/v1/attendance/list/'+this.attendanceDate);
		}
	}
}
</script>