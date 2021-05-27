<template>
  <div class="header">
      <a></a>
      <a href="/" class="logo"
        ><img src="https://i.imgur.com/9Hnf2pN.png" width="70px"/></a>
      <div class="header-right">
        <a v-if="connected" class="active" href="/app">Open</a>
        <a class="active" href="/register">Register</a>
        <a class="active" href="/login">Login</a>

      </div>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      connected: false
    };
  },
  created: function () {

    var token = localStorage.getItem("token");
    if (token == null) {
      console.log("not logged");
    } else {
      this.connected = true
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@900&display=swap");

* {
  box-sizing: border-box;
  font-family: "Rubik";
  margin: 0;
}

.header {
  overflow: hidden;
  background-color: #FDB7D7;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 17px;
  text-decoration: none;
  font-size: 25px;
  line-height: 25px;
  border-radius: 10px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
  padding: 0;
}

.header a.active:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: #F8E3EC;
  color: black;
  margin-left: 10px;
}

.header-right {
  float: right;
}
</style>
