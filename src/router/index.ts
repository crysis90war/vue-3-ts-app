import { useUsers } from "./../stores/users";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TrainingView from "../views/trainings/TrainingView.vue";
import LeRepaireDuWebView from "../views/trainings/LeRepaireDuWebView.vue";
import ParentView from "../views/trainings/ParentView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts",
    component: () => import("@/views/posts/IndexView.vue"),
    children: [
      {
        path: "",
        name: "posts",
        component: () => import("@/views/posts/ListView.vue"),
      },
      {
        path: "create",
        name: "post-create",
        component: () => import("@/views/posts/CreateView.vue"),
        beforeEnter: () => {
          const usersStore = useUsers();
          if (!usersStore.currentUserId) {
            return {
              path: "/",
            };
          }
        },
      },
      {
        path: ":id",
        name: "post-details",
        component: () => import("@/views/posts/DetailsView.vue"),
      },
      {
        path: ":id/edit",
        name: "post-edit",
        component: () => import("@/views/posts/EditView.vue"),
      },
    ],
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
        component: () => import("../views/cars/CarView.vue"),
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
