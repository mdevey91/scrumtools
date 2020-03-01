/* eslint-disable */
import Vue from 'vue';
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';
import '@babel/polyfill';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';
import VueMovable from 'vue-movable';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueMovable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
