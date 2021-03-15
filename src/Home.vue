<template>
  <div id="app">
    <Navbar />
    <HeroHome />
    <!--<HelloWorld msg="Hello Vue in CodeSandbox!" />-->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import HeroHome from "./components/HeroHome";

export default {
  name: "Home",
  components: {
    Navbar,
    HeroHome,
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
