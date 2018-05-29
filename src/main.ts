import Vue from 'vue'
import App from './App.vue'
import "./theme.less";
import iView from 'iview';
import { router } from "./router/index";
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
