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
                    <!-- <li>
                        <router-link to="/branch-list">
                            <i class="metismenu-icon pe-7s-usb"></i>
                            Branch
                        </router-link>
                        
                    </li> -->
                     <li>
                        <router-link to="/package-list">
                            <i class="metismenu-icon pe-7s-gift"></i>
                            Package
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/product-list">
                            <i class="metismenu-icon pe-7s-diskette"></i>
                            Product
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/productsell-list">
                            <i class="metismenu-icon pe-7s-shopbag"></i>
                            Product Sell
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/staff-member-list">
                            <i class="metismenu-icon pe-7s-user"></i>
                            Staff Member
                        </router-link>
                    </li> 
                    <li>
                        <router-link to="/payment-list">
                            <i class="metismenu-icon pe-7s-cash"></i>
                            Payment
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/enquiry-list">
                            <i class="metismenu-icon pe-7s-call"></i>
                            Enquiry
                        </router-link>
                    </li>
                    <li> 
                        <router-link to="/customer-list">
                            <i class="metismenu-icon pe-7s-add-user"></i>
                            Customer
                        </router-link>
                    </li> 
                    <li>
                        <router-link to="/subscription-list">
                            <i class="metismenu-icon pe-7s-bell"></i>
                            Subscription
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/notice-list">
                            <i class="metismenu-icon pe-7s-note"></i>
                            Notice
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/expense-list">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Expense
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/invoice-list">
                            <i class="metismenu-icon pe-7s-news-paper"></i>
                            Invoice
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
	name: 'Sidebar'
}
</script>