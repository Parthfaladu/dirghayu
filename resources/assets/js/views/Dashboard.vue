<template>
    <DashboardPage>
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i class="pe-7s-home icon-gradient bg-mean-fruit">
                            </i>
                        </div>
                        <div>Dirghayu Fitness Factory
                            <div class="page-title-subheading">
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
			<div v-if="this.$store.state.init.user.roles[0].name === 'super_admin' || this.$store.state.init.user.roles[0].name === 'manager' || this.$store.state.init.user.roles[0].name === 'staff'">           
				<div class="row">
					<div class="col-md-6 col-xl-4">
						<div class="card mb-3 widget-content bg-midnight-bloom">
							<div class="widget-content-wrapper text-white">
								<div class="widget-content-left">
									<div class="widget-heading">Total Customers</div>
									<div class="widget-subheading"></div>
								</div>
								<div class="widget-content-right">
									<div class="widget-numbers text-white"><span>{{ totalCustomer }}</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-xl-4">
						<div class="card mb-3 widget-content bg-arielle-smile">
							<div class="widget-content-wrapper text-white">
								<div class="widget-content-left">
									<div class="widget-heading">Total Subscription</div>
									<div class="widget-subheading"></div>
								</div>
								<div class="widget-content-right">
									<div class="widget-numbers text-white"><span>{{ totalSubscription }}</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-xl-4">
						<div class="card mb-3 widget-content bg-grow-early">
							<div class="widget-content-wrapper text-white">
								<div class="widget-content-left">
									<div class="widget-heading">Total Expenses</div>
									<div class="widget-subheading"></div>
								</div>
								<div class="widget-content-right">
									<div class="widget-numbers text-white"><span>{{ $store.getters['init/currency'] }} {{ totalExpense }}</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-lg-6">
						<div class="mb-3 card">
							<div class="card-header-tab card-header-tab-animation card-header">
								<div class="card-header-title">
									<i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
									New Customers
								</div>
							</div>
							<div class="card-body">
								<NewCustomerTable></NewCustomerTable>  
							</div>
						</div>
					</div>
					<div class="col-md-12 col-lg-6">
						<div class="mb-3 card">
							<div class="card-header-tab card-header">
								<div class="card-header-title">
									<i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
									Expiry Soon Subscription
								</div>
							</div>
							<div class="card-body">
								<div class="table-responsive">
									<ExpirySubscription></ExpirySubscription>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-xl-4">
						<div class="card mb-3 widget-content">
							<div class="widget-content-outer">
								<div class="widget-content-wrapper">
									<div class="widget-content-left">
										<div class="widget-heading">Total Staff Members</div>
										<div class="widget-subheading"></div>
									</div>
									<div class="widget-content-right">
										<div class="widget-numbers text-success">{{ totalStaffmember }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-xl-4">
						<div class="card mb-3 widget-content">
							<div class="widget-content-outer">
								<div class="widget-content-wrapper">
									<div class="widget-content-left">
										<div class="widget-heading">Total Products Sold</div>
										<div class="widget-subheading"></div>
									</div>
									<div class="widget-content-right">
										<div class="widget-numbers text-warning">{{ $store.getters['init/currency'] }} {{ totalProductSell }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-xl-4">
						<div class="card mb-3 widget-content">
							<div class="widget-content-outer">
								<div class="widget-content-wrapper">
									<div class="widget-content-left">
										<div class="widget-heading">Total Enquiry</div>
										<div class="widget-subheading"></div>
									</div>
									<div class="widget-content-right">
										<div class="widget-numbers text-danger">{{ totalEnquiry }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="this.$store.state.init.user.roles[0].name === 'customer'">
				<div class="row">
					<div class="col-md-6 col-xl-4">
						<div class="card mb-3 widget-content bg-midnight-bloom">
							<div class="widget-content-wrapper text-white">
								<div class="widget-content-left">
									<div class="widget-heading">Total Subscription</div>
									<div class="widget-subheading"></div>
								</div>
								<div class="widget-content-right">
									<div class="widget-numbers text-white"><span>{{ totalUserSubscription }}</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-xl-4">
						<div class="card mb-3 widget-content bg-arielle-smile">
							<div class="widget-content-wrapper text-white">
								<div class="widget-content-left">
									<div class="widget-heading">Total Payment</div>
									<div class="widget-subheading"></div>
								</div>
								<div class="widget-content-right">
									<div class="widget-numbers text-white"><span>{{ totalPayment }}</span></div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<div class="row">
					<div class="col-md-12 col-lg-6">
						<div class="mb-3 card">
							<div class="card-header-tab card-header-tab-animation card-header">
								<div class="card-header-title">
									<i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
									All Subscription
								</div>
							</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="mb-0 table">
										<thead>
										<tr>
											<th>Id</th>
											<th>Package Name</th>
											<th>Amount</th>
											<th>Start Date</th>
											<th>End Date</th>
										</tr>
										</thead>
										<tbody>
										<tr v-for="(subscription, index) in subscriptions" :key="index">
											<th>{{ subscription.id }}</th>
											<td>{{ subscription.package_name }}</td>
											<td>{{ subscription.amount }}</td>
											<td>{{ dateFormat(subscription.start_date) }}</td>
											<td>{{ dateFormat(subscription.end_date) }}</td>
										</tr>
										</tbody>
                                    </table>
								</div> 
							</div>
						</div>
					</div>
					<div class="col-md-12 col-lg-6">
						<div class="mb-3 card">
							<div class="card-header-tab card-header">
								<div class="card-header-title">
									<i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
									Package List
								</div>
							</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="mb-0 table">
										<thead>
										<tr>
											<th>Id</th>
											<th>Package Name</th>
											<th>Price</th>
											<th>Duration</th>
										</tr>
										</thead>
										<tbody>
										<tr v-for="(packageData, index) in packageList" :key="index">
											<th>{{ packageData.id }}</th>
											<td>{{ packageData.name }}</td>
											<td>{{ packageData.price }}</td>
											<td>{{ packageData.duration }}</td>
										</tr>
										</tbody>
                                    </table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    </DashboardPage>
</template>

<script>

import DashboardPage from '@layouts/DashboardPage';
import axios from 'axios';
import NewCustomerTable from '@components/NewCustomerTable.vue';
import ExpirySubscription from '@components/ExpirySubscription.vue';
import moment from 'moment';

export default {
	name: 'Dashboard',
	components: {
		DashboardPage,
        NewCustomerTable,
        ExpirySubscription
    },
	data(){
		return {
			totalCustomer: null,
			totalExpense: null,
			totalSubscription: null,
			totalPayment: null,
			activeSubscription: null,
			totalStaffmember: null,
			totalProductSell: null,
			totalEnquiry: null,
			totalUserSubscription: null,
			packageList: null,
			subscriptions: null
		}
	},
	async mounted() {
		await this.getDashboardDetail();
		await this.getPackageDetail();
		await this.getActiveSubscription();
	},
	methods: {
		async getDashboardDetail() {
			try {
				const res = await axios.get('/api/v1/dashboard/detail');
                this.totalCustomer = res.data.data.totalCustomer
                this.totalExpense = res.data.data.totalExpense
                this.totalSubscription = res.data.data.totalSubscription
                this.totalPayment = res.data.data.totalPayment
                this.activeSubscription = res.data.data.activeSubscription
                this.totalStaffmember = res.data.data.totalStaffMember
                this.totalProductSell = res.data.data.totalProductSell
                this.totalEnquiry = res.data.data.totalEnquiry
				this.totalUserSubscription = res.data.data.totalUserSubscription
			} catch (err) {
				this.$snotify.error(null, err.message);
			}
		},
		async getPackageDetail(){
			try{
				const packageRes = await axios.get('/api/v1/package/list');
				this.packageList = packageRes.data.data;
				
			}
			catch (err){
				this.$snotify.error(null, err.message);
			}
		},
		async getActiveSubscription(){
			try{
				const subscriptionRes = await axios.get('/api/v1/active/subscription/list');
				this.subscriptions = subscriptionRes.data.data;
				
			}
			catch (err){
				this.$snotify.error(null, err.message);
			}
		},
		dateFormat(date)
		{
			return moment(date).format("DD-MM-YYYY")
		}
	}
	
}
</script>
<style lang="scss" scoped>
.card-body {
    padding: 1.25rem!important;
}
</style>