/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import Vue from 'vue';
import "jquery";
import "bootstrap";
import store from "@store/store";
import router from '@router/routes';
import App from "./App.vue"; 
import VueI18n from 'vue-i18n'
import messageEn from '@i18n/en';
import Snotify from 'vue-snotify';

import "./assets/js/jquery.dataTables.js";

const options = {
	toast: {
		titleMaxLength: 150,
		timeout: 3500,
	  position: 'rightTop'
	}
  }
  
Vue.use(Snotify, options)
Vue.use(VueI18n)

const messages = {
	en: messageEn
}

const i18n = new VueI18n({
  locale: 'en',
  messages,
})
// bootstrap the app
new Vue({
	i18n,
  	router,
  	store,
  	components: { App },
}).$mount('#app');