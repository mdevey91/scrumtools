import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import RetroBoard from '../views/RetroBoard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/retroboard/:id',
    name: 'retroBoard',
    component: RetroBoard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
