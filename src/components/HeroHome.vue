<template>
  <div class="hero">
    <div class="middle-container">
      <img src="https://i.imgur.com/CIAt7Wu.png" width="325px" />
      <h2><p>Finally meet with privacy</p></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHome",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@900&display=swap");
* {
  font-family: Rubik;
  color: black;
}
.hero {
  background-color: #5487BB;
  height: 85vh;
  position: relative;
}
.middle-container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
