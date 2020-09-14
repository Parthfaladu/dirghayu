<template>
<div>
    <button type="button" class="btn-open-options btn btn-quick-menu quick-menu" @click="tooltipDemo=!tooltipDemo;" >
        <i class="fas fa-grip-horizontal fa-w-16 fa-spin fa-2x quick-menu"></i>
    </button>
    <div v-click-outside="onClickOutside" class="ui-theme-settings settings-open">
        <transition name="slide-fade" mode="in-out">
            <div v-if="tooltipDemo" class="theme-settings__inner">
                <div class="scrollbar-container">
                    <div class="theme-settings__options-wrapper">
                        <div class="themeoptions-heading d-flex">
                            <i class="fas fa-tasks pr-2"> </i> <h5 class="pt-2 mr-auto align-content-start"> QUICK ACTIONS</h5>
                            <div class="align-content-end font-close" @click="tooltipDemo=false;" >
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <div class="p-3 col-12 col-sm-12">
                            <div class="row">
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__customer class="quick-access-button">
                                        <router-link
                                            to="/add-customer"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Customer</router-link>
                                    </div>      
                                </div>
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__enquiry class="quick-access-button">
                                        <router-link
                                            to="/add-enquiry"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Enquiry</router-link>
                                    </div>     
                                </div>
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__expense class="quick-access-button">
                                        <router-link
                                        to="/add-expense"
                                        class="btn quick-btn"
                                        ><i class="fas fa-plus-circle"></i> Expense</router-link>
                                    </div>    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__invoice class="quick-access-button">
                                        <router-link
                                            to="/add-invoice"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Invoice</router-link
                                        >
                                    </div>    
                                </div>
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__notice class="quick-access-button">
                                        <router-link
                                            to="/add-notice"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Notice</router-link>
                                    </div>
                                            
                                </div>
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__package class="quick-access-button">
                                        <router-link
                                            to="/add-package"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Package</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__payment class="quick-access-button">
                                        <router-link
                                            to="/add-payment"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Payment</router-link>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__product class="quick-access-button">
                                        <router-link
                                            to="/add-product"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Product</router-link>
                                    </div>  
                                </div>
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__product_sell class="quick-access-button">
                                        <router-link
                                            to="/add-product-sell"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Product Sell</router-link
                                        >
                                    </div>    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-xl-4 mb-3">
                                    <div v-can:add__subscription class="quick-access-button">
                                        <router-link
                                            to="/add-subscription"
                                            class="btn quick-btn"
                                            ><i class="fas fa-plus-circle"></i> Subscription</router-link
                                        >
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>  
</div>
</template>
<script>
import ClickOutside from 'vue-click-outside'
export default {
    name: 'QuickMenu',
    directives: {
        ClickOutside
    },
    data() {
        return {
            tooltipDemo: false
        }
    },
    methods: {
      onClickOutside (event) {
        if(event && event.srcElement && !event.srcElement.className.includes("quick-menu")) {
            this.tooltipDemo = false
        }
      }
    },
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.quick-access-button{
    text-align: center!important;
    font-size: 16px!important;
    font-weight: 600!important;
}

.quick-btn{
    color: #3f4254a3;
    background-color: #E4E6EF;
    border-color: transparent;
    font-size: 14px!important;
    font-weight: 600!important;
    width: 100%!important;
    text-align: left;
    padding-left: 12px;
}
.quick-btn:hover{
    color: #E4E6EF!important;
    background-color: #3f4254a3;
    border-color: transparent;
    font-size: 14px!important;
    font-weight: 600!important;
    width: 100%!important;
    text-align: left;
    padding-left: 12px;
}
.font-close{
    font-size: 24px!important;
    color:#bec0c1;
    cursor: pointer;
}
.btn-quick-menu{
    color:#b1b7b9;
    border: 2px solid #b1b7b9;
}
.btn-quick-menu:hover{
    background-color:#b1b7b9;
    color: #fff;
    border: 2px solid #b1b7b9;
}
</style>