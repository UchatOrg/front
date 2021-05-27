<template>
  <div class="header">
    <div class="left">
      <a class="active" href="/publish">Publish</a>
      <a class="active" href="#search" v-on:click="openSearch">Search</a>
    </div>
    <div class="middle">
      <a href="/app">
      <img src="https://i.imgur.com/9Hnf2pN.png" width="6%" />
    </a>
    </div>
    <div class="right">
      <a class="active" :href="'/profile?u=' + username">
        <img :src="avatar" style="border-radius: 50%" width="6%"> {{ username }}
      </a>
      <a class="active" href="/chat">Chat</a>
    </div>




  </div>





</template>

<script>
export default {
  name: "NavbarApp",
  props: ['username', 'avatar']
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@900&display=swap");
* {
  font-family: Rubik;
}
.header {
  background-color: #FDB7D7;
  position: fixed;
  height: 10%;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 0px;
}

.header .left {
  padding: 2%;
  width: 20%;
  text-align: center;
}

.header .left a {
  background-color: #efe9ce;
  padding: 4%;
  color: grey;
  text-decoration: none;
  border-radius: 10px;
}

.header .middle {
  width: 60%;

  text-align: center;
}

.header .middle img {
  padding-top: 1%;
  padding-bottom: 1%;
}
.header .right {
  padding: 2%;
  width: 20%;
  background-color: #fff8dc;
  text-align: center;
}

.header .right a {
  background-color: #FDB7D7;
  padding: 4%;
  color: white;
  text-decoration: none;
  border-radius: 10px;
}



</style>
