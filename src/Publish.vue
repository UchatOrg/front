<template>
  <div id="app">


    <title>Publish</title>



    <div class="header">
      <div class="left">
        <a class="active" href="/app">Back</a>
      </div>
      <div class="middle">
        <a href="/app">
        <img  src="https://i.imgur.com/9Hnf2pN.png" width="6%" />
      </a>
      </div>
      <div class="right">
        <a class="active" :href="'/profile?u=' + user.username"><img :src="user.avatar" style="border-radius: 50%" width="6%"> {{user.username}}</a>
        <a class="active" href="/chat">Chat</a>
      </div>

      <!--<a href="#default" class="logo"
        >
      <div class="header-right">

      </div>-->
    </div>

      <div class="main">
        <div class="app">
          <div class="left"></div>
          <div class="middle">
          <div class="container">
            <PostForm />
          <div class="right"></div>
        </div>
      </div>
  </div>
</div>
</div>
</template>




<script>
import PostForm from "./components/PostForm.vue"
export default {
  name: "Publish",
  components: {
    PostForm,
  },
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
            self.user = final.user;
          } else {
            alert("Error with your credentials");
          }
        });
      });
    }
  },
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

.main .app {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 0px;
  background-color: #deb887;
  height: 90%;
}
.app .left {
  background-color: #5487BB;
  width: 20%;
}
.app .middle {
  background-color: #fff8dc;
  width: 60%;
}

.app .right {
  background-color: #FDB7D7;
  width: 20%;
}

.app {
  background-color: #5487BB;
}
.app .container {
  padding: 10%;
}

.app .container .post {
  width: 90%;
  background-color: #F8E3EC;
  border-radius: 10px;
  padding: 10%;
}

.app .container .username {
  text-decoration: underline;
  font-size: 30px;
}
.app .container .content {
  text-decoration: none;
  font-size: 20px;
}
.app .container .description {
  text-decoration: italic;
  font-size: 15px;
  color: grey;
}

.app .container .posti {
  width: 90%;
  background-color: #F8E3EC;
  border-radius: 10px;
  padding: 20%;
}

.app.container .username {
  text-decoration: underline;
  font-size: 30px;
}
.app container .contenti {
  text-decoration: none;
  font-size: 20px;
}
.app .container .description {
  text-decoration: italic;
  font-size: 15px;
  color: grey;
}

</style>
