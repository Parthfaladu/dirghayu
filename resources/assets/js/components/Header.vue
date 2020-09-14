<template>
	<div class="app-header header-shadow">
            <div class="app-header__logo">
                <!-- <div v-if="logoUrl"><img :src="logoUrl" height="53px"></div> -->
                <div><img src="/images/dirghayu_logo.svg" height="53px"></div>
            
                <!-- <div class="header__pane ml-auto">
                    <div>
                        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div> -->
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
                    <QuickMenu></QuickMenu>
                    <div class="header-btn-lg pr-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                    <div class="btn-group">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                                            <img width="42px" height="42px" class="rounded-circle" :src="userProfilePic" alt="">
                                            
                                            <i class="fa fa-angle-down ml-2 opacity-8"></i>
                                        </a>
                                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                            <span class="dropdown-item"><i class="fa fa-user-circle pr-2"></i> {{$store.state.init.user.first_name}} {{$store.state.init.user.last_name}}</span>
                                            <router-link to="/profile" tag="button" type="button" tabindex="0" class="dropdown-item">User Profile</router-link>
                                            <router-link to="/change-password" tag="button" type="button" tabindex="0" class="dropdown-item">Change Password</router-link>
                                            <router-link v-if="$can('permission_manage')" to="/settings" tag="button" type="button" tabindex="0" class="dropdown-item">General Settings</router-link>
                                            <div tabindex="-1" class="dropdown-divider"></div>
                                            <button type="button" tabindex="0" class="dropdown-item" @click="logout()">Log Out</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="widget-content-right header-user-info ml-3">
                                    <button class="btn btn-outline-primary-new" @click="logout()"><i class="fas fa-sign-out-alt"></i> Log Out</button>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> 
</template>
<script>
import QuickMenu from '@components/QuickMenu.vue';
export default {
    name: 'Header',
    components: {
        QuickMenu
    },
    data() {
        return {
            logoUrl: null,
            userProfilePic: this.$store.state.init.user.photo_url,
        }
    },
    computed: {
        storeLogoUrl() {
            if(this.$store.getters['init/settings'] && this.$store.getters['init/settings'].logoUrl) {
                return this.$store.getters['init/settings'].logoUrl
            }
            return null
        }
    },
    watch: {
        storeLogoUrl(newValue) {
            console.log(newValue)
            if(newValue !== this.logoUrl) {
                this.logoUrl = newValue;
            }
        }
    },
    methods: {
        async logout() {
            await this.$store.commit('auth/logout');
            this.$router.push({name: 'login'});
        },
        changePassword() {
            this.$router.push('/change-password');
        }
    }
}
</script>
