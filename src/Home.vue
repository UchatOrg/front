<template>
  <div id="app">
    <Navbar />

    <HeroHome />

    <AboutHome />
  </div>
</template>

<script>
import HeroHome from "./components/HeroHome";
import Navbar from "./components/Navbar";
import AboutHome from "./components/AboutHome";
export default {
  name: "Home",
  components: {
    HeroHome,
    Navbar,
    AboutHome,
  },
};
</script>

<style>
* { margin: 0px}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
