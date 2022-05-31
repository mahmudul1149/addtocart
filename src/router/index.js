import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodDetail from "../views/FoodDetail.vue";
import Cart from "../views/CardView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/food-details",
    name: "food-detail",
    component: FoodDetail,
  },
  { path: "/cart", name: "cart", component: Cart },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
