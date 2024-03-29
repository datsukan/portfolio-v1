import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Frame from '../views/Frame.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Frame',
    component: Frame,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
