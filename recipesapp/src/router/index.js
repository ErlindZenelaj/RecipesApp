import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Home from "../views/Home.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";
import { auth } from '../firebase'


const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/login",
        name: "Login",
        component: () => import('../views/Login.vue')
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})


export default router;
