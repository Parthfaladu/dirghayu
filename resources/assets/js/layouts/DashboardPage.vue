<template>
	<div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
	    <Header></Header>
        <vue-snotify></vue-snotify>          
        <div class="app-main">
            <Sidebar></Sidebar>
            <div class="app-main__outer">
                <slot></slot>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
<script>
import Footer from '@components/Footer.vue';
import Header from '@components/Header.vue';
import Sidebar from '@components/Sidebar.vue';


export default {
	name: 'DashboardPage',
	components: {
		Footer,
		Header,
        Sidebar
    },
    mounted() {
        this.$snotify.clear();
    }
}
</script>