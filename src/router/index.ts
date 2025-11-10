import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import Teams from "../pages/Teams.vue";
import Career from "../pages/Career.vue";
import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";
import { computed } from "vue";

export const routes = [
  { path: "/", name: "Home", component: Home },
  { name: "Products", path: "/products", component: Products },
  { name: "Teams", path: "/teams", component: Teams },
  { name: "Career", path: "/career", component: Career },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "Contact", path: "/contact", component: Contact },
];

export const menuRoutes = computed(() => routes.slice(0, -1));

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
