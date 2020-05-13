<template>
	<div class="scroll-area-sm">
		<div class="scrollbar-container">
			<ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
				<li v-for="(newCustomer, index) in newCustomers" :key="index" class="list-group-item">
					<div class="widget-content p-0">
						<div class="widget-content-wrapper">
							<div class="widget-content-left mr-3">
								<img width="42" class="rounded-circle" :src="newCustomer.photo_url" alt="">
							</div>
							<div class="widget-content-left">
								<div class="widget-heading">{{ newCustomer.first_name }} {{ newCustomer.last_name }}</div>
								<div class="widget-subheading">{{ newCustomer.email }}</div>
							</div>
							<div class="widget-content-right">
								<div class="font-size-lg text-muted">
									<small class="text-danger pl-2">
										<i class="fa fa-phone"></i>
									</small>
									<span>{{ newCustomer.phone }}</span>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	name: 'NewCustomerTable',
	components: {
		
	},
	data() {
		return {
			newCustomers: null,
		}
	},
	async mounted() {
		await this.getNewCustomer();
	},
	methods: {
		async getNewCustomer() {
			try {
				const res = await axios.get('/api/v1/newcustomer/list');
				this.newCustomers = res.data.data
			} catch (err) {
				this.$snotify.error(null, err.message);
			}
		},
	}
	
}
</script>
<style scoped>
.scroll-area-sm{
	height: 470px;
}
</style>