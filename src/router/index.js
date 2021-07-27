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
    path: "/ProgrammeDetails/:id",
    name: "ProgrammeDetails",
    component: ProgrammeDetails,
    props: true,
  },
  {
    path: "/BlogersDetails/:id",
    name: "BlogersDetails",
    component: BlogersDetails,
    props: true,
  },
  {
    path: "/ServicesDetails/:id",
    name: "ServicesDetails",
    component: ServicesDetails,
    props: true,
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
});

export default router;
