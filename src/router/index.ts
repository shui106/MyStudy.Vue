import Vue from "vue";
import VueRouter from "vue-router";
import iView from "iview";
import { routes } from "./routers";

const RouterConfig = {
    mode: "history",
    routes: { routes }
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    /*if (to.name === 'login')
    {
        next(false);
    } 
    else    
    {
        next(false);
    }*/
});
router.afterEach(to => {
    iView.LoadingBar.finish();
});
