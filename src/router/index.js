import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Programmes from "../views/Programmes.vue";
import Service from "../views/Service.vue";
import Bloger from "../views/Bloger.vue";
import CallUs from "../views/CallUs.vue";
import ProgrammeDetails from "../views/ProgrammeDetails.vue";
import BlogersDetails from "../views/BlogersDetails.vue";
import ServicesDetails from "../views/ServicesDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Programmes",
    name: "Programmes",
    component: Programmes,
  },
  {
    path: "/Service",
    name: "Service",
    component: Service,
  },
  {
    path: "/Bloger",
    name: "Bloger",
    component: Bloger,
  },
  {
    path: "/CallUs",
    name: "CallUs",
    component: CallUs,
  },
  {
    path: "/ProgrammeDetails",
    name: "ProgrammeDetails",
    component: ProgrammeDetails,
  },
  {
    path: "/BlogersDetails",
    name: "BlogersDetails",
    component: BlogersDetails,
  },
  {
    path: "/ServicesDetails",
    name: "ServicesDetails",
    component: ServicesDetails,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: {
          y: 32,
        },
      };
    }

    return savedPosition ? savedPosition : { x: 0, y: 0 };
  },
});

export default router;
