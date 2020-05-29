import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import MyTest from './layouts/MyTest.vue';

import {Button, Layout, Menu, Icon} from 'ant-design-vue';

Vue.config.productionTip = false;
Vue.component('my-test-layout',MyTest);

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);






new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
