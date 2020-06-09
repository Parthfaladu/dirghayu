<template>
    <form  @submit.prevent="submitForm()">
        <div class="position-relative form-group">
            <label for="to_id">User Role</label>
            <select id="to_id" v-model="notice.role_id" v-validate="'required'" class="form-control" name="role_id" >
				<option :value="null" disabled>Select user</option>
                <option v-for="userRole in userRoleList" :key="userRole.id" :value="userRole.id" :selected="notice.role_id ===  userRole.id">{{userRole.name}} </option>
            </select>
            <span v-show="errors.has('role_id')" class="text-danger">The Role field is required</span>
        </div>
        <div class="position-relative form-group">
            <label for="title">Title</label>
            <input id="title" v-model="notice.title" v-validate="'required'" type="text" class="form-control" name="title" >
            <span v-show="errors.has('title')" class="text-danger">{{ errors.first('title') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="detail">Detail</label>
            <textarea id="detail" v-model="notice.detail" v-validate="'required'" rows="2" class="form-control" name="detail" ></textarea>
            <span v-show="errors.has('detail')" class="text-danger">{{ errors.first('detail') }}</span>
        </div>
        
        <div class="text-center">
            <button class="btn btn-outline-info" type="submit">SUBMIT</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';

export default {
    name: 'AddNoticeForm',
    data() {
		return {
			notice:{
				title: null,
				role_id: null,
				detail:null
			},
			userRoleList: null,
		}
	},
	async mounted() {
		try {
			if(this.$route.params.id != null) {
				this.getNoticeList();
		    }
			await this.getUserRole();
		} catch (err) {
			this.$snotify.error(null, err.message);
		}
	},
	methods: {
		async getNoticeList() {
			const res      = await axios.get('/api/v1/notice/list/'+this.$route.params.id)
			this.notice = res.data.data
		},
		async getUserRole(){
            const roleRes = await axios.get('/api/v1/auth/user/role')
            this.userRoleList = _.filter(roleRes.data.data, (user) => user.name !== 'super_admin');
        },
		async submitForm() {
			try {
				const result = await this.$validator.validateAll();
				if(!result){
					return
				}
			 	
				let res = null
				if(this.$route.params.id != null) {
					res = await axios.post('/api/v1/notice/update', this.notice)
				} else {
					res = await axios.post('/api/v1/notice/create', this.notice)
				}
		
				this.$router.push('/notice-list');
		  	}
		  	catch(err) {
		  		this.$snotify.error(null, err.message);
		  	}
		},
	}
}
</script>