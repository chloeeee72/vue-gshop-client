import Vue from "vue";
import Router from "vue-router";
import MSite from "../pages/MSite/MSite.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Search from "../pages/Search/Search.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/msite"
    },
    {
      path: "/msite",
      name: "MSite",
      component: MSite
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    }
  ]
});
