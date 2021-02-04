import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { store } from "./store";

import Router from "vue-router";

import "./styles/main.scss";

import Buefy from "buefy";

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(Buefy, {
  defaultIconPack: "fas",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
