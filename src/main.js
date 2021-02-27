import Vue from 'vue';
import router from 'vuesrc/plugin/router/index.js';
import createApp from 'vuesrc/app.js';
import 'vuesrc/styles/index.vue';
const app = new Vue(createApp(router));

router.onReady(() => {
    app.$mount('#app');
});
