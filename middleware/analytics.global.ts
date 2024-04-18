export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const isLogin = localStorage.getItem("isLogin");
        if (isLogin) {
            console.log("isLogin", isLogin);
            if (to.path === "/login") {
                return navigateTo("/");
            }
        } else {
            if (to.path !== "/login") {
                // console.log("isLogin", isLogin);
                return navigateTo("/login");
                // return navigateTo("/login");
            }
        }
    }
});