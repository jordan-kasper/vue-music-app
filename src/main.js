import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
