import login from "../views/login.vue";
import main from "../views/main.vue";

export const loginRoute = {
    path: "/login",
    name: "login",
    meta: {
        title: "LogIn"
    },
    component: login
};

export const otherRoutes = {
    path: "/main",
    name: "main",
    permission: "",
    meta: { title: "Main" },
    component: main
};

export const routes = [loginRoute, otherRoutes];
