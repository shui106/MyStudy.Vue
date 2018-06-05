import Vuex from 'vuex';
import Vue from "vue";
import App from "./App.vue";
import "./theme.less";
import iView from "iview";
import { router } from "./router/index";
import store from "./store/index";
Vue.use(Vuex);
Vue.use(iView);
Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount("#app");
//# sourceMappingURL=main.js.map