import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import { routes } from './routes';

import store from './store/store.js';

Vue.use(VueRouter);
Vue.use(VueResource);

//Init vue Resource
Vue.http.options.root = 'https://vuejs-gus-project.firebaseio.com/';

//Filter creation
Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

//router
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
