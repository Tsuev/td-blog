import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/pages/td-home.vue"),
  },
  {
    path: "/articles",
    name: "articles",
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
    name: 'error',
    component: () => import("../views/error/td-error-page.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: '/td-blog/',
  routes,
});

export default router;
