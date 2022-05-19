import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("@/views/HomeView.vue");
const About = () => import("@/views/TheAbout.vue");

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/#about", component: About },
  { name: "Band", path: "/#about", component: Home },
  { name: "Tour", path: "/#about", component: Home },
  { name: "Contact", path: "/#about", component: Home },
  {
    name: "More",
    path: "/more",
    component: Home,
    childeren: [
      { name: "Merchandise", path: "/#about", component: Home },
      { name: "Extras", path: "/#about", component: Home },
      { name: "Media", path: "/#about", component: Home },
    ],
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
