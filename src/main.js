import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
import Profile from "./Profile.vue";
import Publish from "./Publish.vue";
import Chat from "./Chat.vue";

const NotFound = { template: "<p>Page not found</p>" };
Vue.config.productionTip = false;

const routes = {
  "/": Home,
  "/app": App,
  "/login": Login,
  "/register": Register,
  "/profile": Profile,
  "/publish": Publish,
  "/chat": Chat
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
