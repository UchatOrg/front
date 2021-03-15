<template>
  <div class="header">
    <a href="/"
      ><img src="https://i.imgur.com/QPRyafY.png" width="50px" class="logo"
    /></a>
    <a href="#home" class="active">Register</a>
    <a href="#home" class="active">Login</a>
  </div>
</template>

<script>
export default {
  name: "NavbarApp",
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
  padding: 20px 10px;
  height: 10%;
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
  padding: 17px;
  color: white;
}

.header a.active:hover {
  background-color: #ddd;
  color: black;
  cursor: pointer;
}

.header a.active {
  background-color: #F8E3EC;
  color: black;
  margin-left: 10px;
  float: right;
}

.header a.activered {
  background-color: #d31349;
  color: white;
  margin-left: 10px;
}

.header a.activered:hover {
  cursor: pointer;
  background-color: #555;
}
.header-right {
  float: right;
}
</style>
