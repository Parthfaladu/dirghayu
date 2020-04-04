<template>
	<div class="app-header header-shadow">
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
            </div>    
            <div class="app-header__content">
                <div class="app-header-left">
                </div>
                <div class="app-header-right">
                    <div class="header-btn-lg pr-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <!-- <div class="widget-content-left  ml-3 header-user-info">
                                    <div class="widget-heading">
                                        Alina Mclourd
                                    </div>
                                    <div class="widget-subheading">
                                        VP People Manager
                                    </div>
                                </div> -->
                                <div class="widget-content-right header-user-info ml-3">
                                    <button class="btn btn-outline-primary" @click="logout()"><i class="fas fa-sign-out-alt"></i> Log Out</button>

                                    <!-- <button type="button" class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                    </button> -->
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </div> 
</template>
<script>
export default {
    name: 'Header',
    methods: {
        logout() {
			this.$store.commit('auth/logout');
            // this.$snotify.success("Logout successfully!");
            
		},
    }
}
</script>