<template>
  <div id="app">
    <Navbar />
    <HeroLogin />
  </div>
</template>

<script scoped>

import Navbar from "./components/Navbar";
import HeroLogin from "./components/HeroLogin";


export default {
  name: "Login",
  components: {
    HeroLogin,
    Navbar,
  },

  created: function () {

    var token = localStorage.getItem("token");
    if (token == null) {
      console.log("not logged");
    } else {
      window.location.href='/app';
    }
  }
};
</script>

<style scoped>
* {
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
