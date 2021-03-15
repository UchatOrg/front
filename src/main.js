import Vue from "vue";
import App from "./App.vue";
import Login from "./Login.vue";
const NotFound = { template: "<p>Page not found</p>" };
Vue.config.productionTip = false;

const routes = {
  "/": App,
  "/login": Login
};

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});
