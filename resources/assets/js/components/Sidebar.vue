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
                <ul class="vertical-nav-menu">
                    <li class="app-sidebar__heading">Dashboards</li>
                    <li>
                        <router-link to="/dashboard" class="mm-active">
                            <i class="metismenu-icon pe-7s-rocket"></i>
                            Dashboard
                        </router-link>
                    </li>
                    <li class="app-sidebar__heading">UI Components</li>
                   <!--  <li>
                        <router-link to="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Package
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/package-list">
                                    <i class="metismenu-icon"></i>
                                    Package List
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/add-package">
                                    <i class="metismenu-icon"></i>
                                    Add-Package
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Product
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/product-list">
                                    <i class="metismenu-icon"></i>
                                    Product List
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/add-product">
                                    <i class="metismenu-icon"></i>
                                    Add-Product
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/productsell-list">
                                    <i class="metismenu-icon"></i>
                                    Product Sell
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Staff Member
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/staff-member-list">
                                    <i class="metismenu-icon"></i>
                                    Staff Member List
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/add-staff-member">
                                    <i class="metismenu-icon"></i>
                                    Add Staff Member
                                </router-link>
                            </li>
                        </ul>
                    </li> -->
                    <li>
                        <router-link to="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Payment
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/payment-list">
                                    <i class="metismenu-icon"></i>
                                    Payment List
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/add-payment">
                                    <i class="metismenu-icon"></i>
                                    Add Payment
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Enquiry
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/enquiry-list">
                                    <i class="metismenu-icon"></i>
                                    Enquiry List
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/add-enquiry">
                                    <i class="metismenu-icon"></i>
                                    Add Enquiry
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Customer
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/customer-list">
                                    <i class="metismenu-icon"></i>
                                    Customer List
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/add-customer">
                                    <i class="metismenu-icon"></i>
                                    Add Customer
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Subscription
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/subscription-list">
                                    <i class="metismenu-icon"></i>
                                    Subscription List
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/add-subscription">
                                    <i class="metismenu-icon"></i>
                                    Add Subscription
                                </router-link>
                            </li>
                        </ul>
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