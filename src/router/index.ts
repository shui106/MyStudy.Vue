import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import iView from "iview";
import { routes } from "./routers";

const RouterConfig: RouterOptions = {
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
