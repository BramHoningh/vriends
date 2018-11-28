import Vue from 'vue';
import App from './App/App.vue';
import router from './router';
import store from './store';

// Import SCSS and Globals
import './assets/styles/main.scss';
import './components/_globals';
import './directives/_globals';
import './filters/_globals';
import './mixins/_globals';
import i18n from './i18n';

// Vue Init
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
