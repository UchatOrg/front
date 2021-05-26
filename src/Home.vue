<template>
  <div id="app">
    <Navbar />
    <HeroHome />

  </div>
</template>

<script>
import HeroHome from "./components/HeroHome";
import Navbar from "./components/Navbar";


export default {
  name: "Home",
  components: {
    HeroHome,
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
