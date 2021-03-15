import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";
import Login from "./Login.vue";
import Hello from "./Hello.vue";
import Register from "./Register.vue";

const NotFound = { template: "<p>Page not found</p>" };
Vue.config.productionTip = false;

const routes = {
  "/": Home,
  "/app": App,
  "/hello": Hello,
  "/login": Login,
  "/register": Register
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
