import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/pages/td-home.vue"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("../views/pages/td-articles-list.vue"),
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: () => import("../views/pages/td-the-article.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/pages/td-login.vue")
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import("../views/pages/td-admin.vue"),
    beforeEnter: (to, from, next) => store.state.isAdmin ? next() : next('/login')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import("../views/error/td-error-page.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
