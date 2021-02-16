import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: ":query",
        name: "Query",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
