import Vue from "vue";
import VueRouter from "vue-router";
import iView from "iview";
import { routes } from "./routers";
Vue.use(VueRouter);
const RouterConfig = {
    mode: "history",
    routes: routes
};
export const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});
router.afterEach(to => {
    iView.LoadingBar.finish();
});
//# sourceMappingURL=index.js.map