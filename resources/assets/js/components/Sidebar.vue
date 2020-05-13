<template>
	<div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
                <div>
                    <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span class="btn-icon-wrapper">
                        <i class="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </span>
        </div>    <div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
                <ul class="vertical-nav-menu mt-4">
                    <li>
                        <router-link to="/dashboard">
                            <i class="metismenu-icon pe-7s-home"></i>
                            Dashboard
                        </router-link>
                    </li>
                    <li v-can:view__attendance>
                        <router-link to="/attendance">
                            <i class="metismenu-icon pe-7s-news-paper"></i>
                            Attendance
                        </router-link>
                    </li>
                     <li v-can:view__package>
                        <router-link to="/package-list">
                            <i class="metismenu-icon pe-7s-gift"></i>
                            Package
                        </router-link>
                    </li>
                    <li v-can:view__product>
                        <router-link to="/product-list">
                            <i class="metismenu-icon pe-7s-diskette"></i>
                            Product
                        </router-link>
                    </li>
                    <li v-can:view__product_sell>
                        <router-link to="/productsell-list">
                            <i class="metismenu-icon pe-7s-shopbag"></i>
                            Product Sell
                        </router-link>
                    </li>
                    <li v-can:view__staff_member>
                        <router-link to="/staff-member-list">
                            <i class="metismenu-icon pe-7s-user"></i>
                            Staff Member
                        </router-link>
                    </li> 
                    <li v-can:view__payment>
                        <router-link to="/payment-list">
                            <i class="metismenu-icon pe-7s-cash"></i>
                            Payment
                        </router-link>
                    </li>
                    <li v-can:view__enquiry>
                        <router-link to="/enquiry-list">
                            <i class="metismenu-icon pe-7s-call"></i>
                            Enquiry
                        </router-link>
                    </li>
                    <li v-can:view__customer> 
                        <router-link to="/customer-list">
                            <i class="metismenu-icon pe-7s-add-user"></i>
                            Customer
                        </router-link>
                    </li> 
                    <li v-can:view__subscription>
                        <router-link to="/subscription-list">
                            <i class="metismenu-icon pe-7s-bell"></i>
                            Subscription
                        </router-link>
                    </li>
                    <li v-can:view__notice>
                        <router-link to="/notice-list">
                            <i class="metismenu-icon pe-7s-note"></i>
                            Notice
                        </router-link>
                    </li>
                    <li v-can:view__expense>
                        <router-link to="/expense-list">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Expense
                        </router-link>
                    </li>
                    <li v-can:view__invoice>
                        <router-link to="/invoice-list">
                            <i class="metismenu-icon pe-7s-news-paper"></i>
                            Invoice
                        </router-link>
                    </li>
                    <li v-if="$can('view__attendance') || $can('view__subscription') || $can('view__product_sell')" @click="showReport=!showReport;" class="cursor-pointer">
                        <a to="#">
                            <i class="metismenu-icon pe-7s-note2"></i>
                            Report
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul v-if="showReport">
                            <li v-if="$can('view__attendance')">
                                <router-link to="/attendance-report">
                                    <i class="metismenu-icon pe-7s-news-paper"></i>
                                    Attendance Report
                                </router-link>
                            </li>
                            <li v-if="$can('view__subscription')">
                                <router-link to="/subscription-report">
                                    <i class="metismenu-icon pe-7s-news-paper"></i>
                                    Subscription Report
                                </router-link>
                            </li>
                            <li v-if="$can('view__product_sell')">
                                <router-link to="/product-sell-report">
                                    <i class="metismenu-icon pe-7s-news-paper"></i>
                                    Product Sell Report
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li v-can:permission_manage>
                        <router-link to="/user-permission">
                            <i class="metismenu-icon pe-7s-tools"></i>
                            User Permissions
                        </router-link>
                    </li>

                </ul>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
	name: 'Sidebar',
    data() {
        return {
            showReport: false,
        }
    }
}
</script>