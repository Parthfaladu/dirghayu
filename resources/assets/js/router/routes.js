import Vue from 'vue';
import Router from 'vue-router'
import Login from '@views/Login.vue'
import store from '@store/store'

Vue.use(Router);
  
const router = new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          redirect: '/dashboard'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '@views/Dashboard.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/package-list',
            name: 'packagelistview',
            component: () => import(/* webpackChunkName: "package" */ '@views/PackageListView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-package',
            name: 'addpackageview',
            component: () => import(/* webpackChunkName: "package" */ '@views/AddPackageView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-package/:id',
            name: 'updatepackageview',
            component: () => import(/* webpackChunkName: "package" */ '@views/AddPackageView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/product-list',
            name: 'productlistview',
            component: () => import(/* webpackChunkName: "product" */ '@views/ProductListView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-product',
            name: 'addproductview',
            component: () => import(/* webpackChunkName: "product" */ '@views/AddProductView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-product/:id',
            name: 'updateproductview',
            component: () => import(/* webpackChunkName: "product" */ '@views/AddProductView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/productsell-list',
            name: 'productselllistview',
            component: () => import(/* webpackChunkName: "product" */ '@views/ProductSellListView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-product-sell',
            name: 'addproductsellview',
            component: () => import(/* webpackChunkName: "product" */ '@views/ProductSellView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-product-sell/:id',
            name: 'updateproductsellview',
            component: () => import(/* webpackChunkName: "product" */ '@views/ProductSellView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/staff-member-list',
            name: 'staffmemberlist',
            component: () => import(/* webpackChunkName: "staff" */ '@views/StaffMemberList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-staff-member',
            name: 'addstaffmember',
            component: () => import(/* webpackChunkName: "staff" */ '@views/AddStaffMember.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-staff-member/:id',
            name: 'updatestaffmember',
            component: () => import(/* webpackChunkName: "staff" */ '@views/AddStaffMember.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/payment-list',
            name: 'paymentlist',
            component: () => import(/* webpackChunkName: "payment" */ '@views/PaymentList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-payment',
            name: 'addpayment',
            component: () => import(/* webpackChunkName: "payment" */ '@views/AddPayment.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-payment/:id',
            name: 'updatepayment',
            component: () => import(/* webpackChunkName: "payment" */ '@views/AddPayment.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/enquiry-list',
            name: 'enquirylist',
            component: () => import(/* webpackChunkName: "enquiry" */ '@views/EnquiryList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-enquiry',
            name: 'addenquiry',
            component: () => import(/* webpackChunkName: "enquiry" */ '@views/AddEnquiry.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-enquiry/:id',
            name: 'updateenquiry',
            component: () => import(/* webpackChunkName: "enquiry" */ '@views/AddEnquiry.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/customer-list',
            name: 'customerlist',
            component: () => import(/* webpackChunkName: "customer" */ '@views/CustomerList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-customer',
            name: 'addcustomer',
            component: () => import(/* webpackChunkName: "user" */ '@views/AddCustomer.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-customer/:id',
            name: 'updatecustomer',
            component: () => import(/* webpackChunkName: "customer" */ '@views/UpdateCustomer.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/subscription-list',
            name: 'subscriptionlist',
            component: () => import(/* webpackChunkName: "subscription" */ '@views/SubscriptionList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-subscription',
            name: 'addsubscription',
            component: () => import(/* webpackChunkName: "subscription" */ '@views/AddSubscription.vue'),
            meta: {
                authenticated: true,
            }
        },
        // {
        //     path: '/update-subscription/:id',
        //     name: 'updatesubscription',
        //     component: () => import(/* webpackChunkName: "subscription" */ '@views/AddSubscription.vue'),
        //     meta: {
        //         authenticated: true,
        //     }
        // },
        {
            path: '/notice-list',
            name: 'noticelist',
            component: () => import(/* webpackChunkName: "notice" */ '@views/NoticeList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/view-notice/:id',
            name: 'viewnotice',
            component: () => import(/* webpackChunkName: "notice" */ '@views/ViewNotice.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-notice',
            name: 'addnotice',
            component: () => import(/* webpackChunkName: "notice" */ '@views/AddNotice.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-notice/:id',
            name: 'updatenotice',
            component: () => import(/* webpackChunkName: "notice" */ '@views/AddNotice.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/expense-list',
            name: 'expenselist',
            component: () => import(/* webpackChunkName: "expense" */ '@views/ExpenseList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-expense',
            name: 'addexpense',
            component: () => import(/* webpackChunkName: "expense" */ '@views/AddExpense.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-expense/:id',
            name: 'updateexpense',
            component: () => import(/* webpackChunkName: "expense" */ '@views/AddExpense.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/branch-list',
            name: 'branchlist',
            component: () => import(/* webpackChunkName: "branch" */ '@views/BranchList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-branch',
            name: 'addbranch',
            component: () => import(/* webpackChunkName: "branch" */ '@views/AddBranch.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/update-branch/:id',
            name: 'updatebranch',
            component: () => import(/* webpackChunkName: "branch" */ '@views/AddBranch.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/invoice-list',
            name: 'invoicelist',
            component: () => import(/* webpackChunkName: "invoice" */ '@views/InvoiceList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/add-invoice',
            name: 'addinvoice',
            component: () => import(/* webpackChunkName: "invoice" */ '@views/AddInvoice.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/view-invoice/:id',
            name: 'viewinvoice',
            component: () => import(/* webpackChunkName: "invoice" */ '@views/InvoiceView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/payment-invoice/:id',
            name: 'paymentinvoice',
            component: () => import(/* webpackChunkName: "invoice" */ '@views/PaymentInvoice.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/init',
            name: 'init',
            component: () => import(/* webpackChunkName: "product" */ '@views/InitializeView.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/attendance',
            name: 'attendance',
            component: () => import(/* webpackChunkName: "invoice" */ '@views/AttendanceList.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/attendance-report',
            name: 'attendanceReport',
            component: () => import(/* webpackChunkName: "report" */ '@views/AttendanceReport.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/subscription-report',
            name: 'subscriptionReport',
            component: () => import(/* webpackChunkName: "report" */ '@views/SubscriptionReport.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/product-sell-report',
            name: 'productSellReport',
            component: () => import(/* webpackChunkName: "report" */ '@views/ProductSellReport.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/user-permission',
            name: 'userPermission',
            component: () => import(/* webpackChunkName: "setting" */ '@views/UserPermission.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/change-password',
            name: 'changePassword',
            component: () => import(/* webpackChunkName: "setting" */ '@views/ChangePassword.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/profile',
            name: 'userProfile',
            component: () => import(/* webpackChunkName: "setting" */ '@views/UserProfile.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import(/* webpackChunkName: "setting" */ '@views/Settings.vue'),
            meta: {
                authenticated: true,
            }
        },
        {
            path: '/forgot-password',
            name: 'forgotPassword',
            component: () => import(/* webpackChunkName: "user" */ '@views/ForgotPassword.vue'),
        },

        // {
        //     path: '*',
        //     redirect: '/'
        // },
    ]
})


router.beforeEach((routeTo, routeFrom, next) => {
    
    const authRequired = routeTo.matched.some(r => r.meta.authenticated);

    if(!authRequired) return next()

    const isAuthenticated = store.getters['auth/isAuthenticated']

    if(!isAuthenticated) {
        return next({
            name: 'login'
        })
    }

    if(routeTo.name !== 'init' && !store.getters['init/isInitialized']) {
        return next({
            name: 'init',
            query: { redirectFrom: routeTo.fullPath },
        })
    }
    
    return next()
})

export default router;