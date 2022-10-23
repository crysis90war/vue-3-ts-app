import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TrainingView from "../views/TrainingView.vue";
import LeRepaireDuWebView from "../views/LeRepaireDuWebView.vue";
import ParentView from "../views/ParentView.vue";
import NewPostView from "@/views/NewPostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts",
      name: "posts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PostView.vue"),
      children: [],
    },
    {
      path: "/posts/new",
      name: "new-post",
      component: NewPostView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/trainings",
      name: "trainings",
      redirect: { name: "cars" },
      children: [
        {
          path: "cars",
          name: "cars",
          component: () => import("../views/CarView.vue"),
        },
        {
          path: "training",
          name: "training",
          component: TrainingView,
        },
        {
          path: "lerepaireduweb",
          name: "lerepaireduweb",
          component: LeRepaireDuWebView,
        },
        {
          path: "parent-child",
          name: "parent-child",
          component: ParentView,
        },
        {
          path: "/:catchAll(.*)",
          redirect: "/",
        },
      ],
    },
  ],
});

export default router;
