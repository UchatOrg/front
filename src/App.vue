<template>
  <div id="app">
    <h1>Uchat App</h1>
    <h2>{{ user }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      token: "",
      user: "",
    };
  },
  created: function () {
    var token = localStorage.getItem("token");
    if (token == null) {
      window.location = "/login";
    } else {
      this.token = token;
      var self = this;
      fetch("https://uchatorg.herokuapp.com/api/info/token", {
        method: "POST",
        headers: {
          "token": this.token,
        },
      }).then(function (json) {
        json.json().then(function (final) {
          if (final) {
            self.user = final;
          } else {
            alert("Error with your credentials");
          }
        });
      });
    }
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
