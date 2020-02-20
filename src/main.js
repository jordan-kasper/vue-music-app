import Vue from 'vue';
import axios from 'axios';
import {
  BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons,
  BIcon,
} from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(IconsPlugin);

Vue.component('BIcon', BIcon);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
