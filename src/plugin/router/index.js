import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexPage from 'vuesrc/pages/index/routes.js';
import TodoPage from 'vuesrc/pages/todo/routes.js';

Vue.use(VueRouter);

const routes = [...IndexPage, ...TodoPage];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
