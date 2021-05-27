<template>
  <div id="app">


    <title>Uchat</title>

    <div id="myOverlay" class="overlay">
      <span class="closebtn" v-on:click="closeSearch" title="Close Overlay">×</span>
      <div class="overlay-content">
        <form @submit.prevent="search">
          <input type="text" placeholder="Search an username" name="search" v-model="searchcontent">
        </form>
      </div>
    </div>






      <div class="header">
        <div class="left">
          <a class="active" href="/publish">Publish</a>
          <a class="active" href="#search" v-on:click="openSearch">Search</a>
        </div>
        <div class="middle">
          <a href="/app">
          <img  src="https://i.imgur.com/9Hnf2pN.png" width="6%" />
        </a>
        </div>
        <div class="right">
          <a class="active":href="'/profile?u=' + user.username"><img :src="user.avatar" style="border-radius: 50%" width="6%"> {{user.username}}</a>
          <a class="active" href="/chat">Chat</a>
        </div>
      </div>

      <div class="main">
        <div class="app">
          <div class="left"></div>
          <div class="middle">
          <div class="container">
            <div class="post">
              <div class="username">
                @saravenpi
              </div>
              <div class="content">
                {{ user.username }}
              </div>
              <div class="description">
                magnificient!
              </div>
            </div>
            </div></div>
          <div class="right"></div>
        </div>
      </div>
  </div>
</template>



<script>
export default {
  name: "App",
  data() {
    return {
      token: "",
      user: "",
      searchcontent: "",
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
  methods: {
    openSearch: function () {
      document.getElementById("myOverlay").style.display = "block";
    },
    closeSearch: function () {
      document.getElementById("myOverlay").style.display = "none";
    },
    search: function () {
        const { searchcontent } = this;
        window.location = "/profile?u=" + searchcontent
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


* {
  box-sizing: border-box;
}

.openBtn {
  background: #f1f1f1;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
}

.openBtn:hover {
  background: #bbb;
}

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
}

.overlay-content {
  position: relative;
  top: 46%;
  width: 80%;
  text-align: center;
  margin-top: 30px;
  margin: auto;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  cursor: pointer;
  color: white;
}

.overlay .closebtn:hover {
  color: #ccc;
}

.overlay input[type=text] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: white;
}

.overlay input[type=text]:hover {
  background: #f1f1f1;
}

.overlay button {
  float: left;
  width: 20%;
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.overlay button:hover {
  background: #bbb;
}
</style>
