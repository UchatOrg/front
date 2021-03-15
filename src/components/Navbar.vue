<template>
  <div class="header">
    <a href="/"
      ><img src="https://i.imgur.com/QPRyafY.png" width="42px" class="logo"
    /></a>
    <a href="/register" class="active header-right">Register</a>
    <a href="/login" class="active header-right">Login</a>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@900&display=swap");
* {
  font-family: Rubik;
}
.header {
  overflow: hidden;
  background-color: #FDB7D7;
  padding: 10px;
  position: relative;
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
  text-align: center;
}

.header a.logo {
  font-weight: bold;
  padding: 17px;
  color: white;
}

.header a.active {
  background-color: #F8E3EC;
  color: black;
  margin-left: 10px;
  float: right;
}

.header a.active:hover {
  background-color: #ddd;
  color: black;
  cursor: pointer;
}

.header-right {
  float: right;
}
</style>
