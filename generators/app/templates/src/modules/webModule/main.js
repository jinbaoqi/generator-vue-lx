import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './vuex/store'
import httpPromise from './plugs/httpPromise.js'
import i18n from './plugs/i18n.js'
import VuexRouterSync from 'vuex-router-sync'
console.log(i18nUrl);
VuexRouterSync.sync(store, router);
Vue.use(httpPromise,router);
Vue.use(i18n);
window.rootVue = new Vue({
	store,
	router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

