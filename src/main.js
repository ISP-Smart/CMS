import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import titleMixin from '../mixins/titleMixin'
import VueToastify from "vue-toastify";



Vue.config.productionTip = false;
Vue.mixin(titleMixin)
Vue.use(VueToastify, {
  position: "top-right",
  theme: "light",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
