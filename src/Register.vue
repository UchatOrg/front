<template>
  <div id="app">
    <Navbar />
    <HeroRegister />
  </div>
</template>

<script>
import HeroRegister from "./components/HeroRegister";
import Navbar from "./components/Navbar";

export default {
  name: "Register",
  components: {
    HeroRegister,
    Navbar,
  },
};
</script>

<style>
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
