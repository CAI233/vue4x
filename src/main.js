import Vue from "vue";
//项目搭建4.x  http://www.mamicode.com/info-detail-2813683.html
//引入element ui https://element.eleme.cn/2.0/#/zh-CN/component/quickstart
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import MyPlugin from './assets/js/plugin';

Vue.use(ElementUI)
Vue.use(MyPlugin)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
