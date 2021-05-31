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


    <div id="usermodal" class="overlay">
      <span class="closebtn" v-on:click="closeusermodal" title="Close Overlay">×</span>
      <div class="overlay-content">
        <form @submit.prevent="updateuser">
          <div class="door">

          <div class="container">
            <p class="p">Your bio:</p>
            <input
            v-model="bio"
            class="input"
            type="text"
            id="bio"
            placeholder="bio"
            />
          </div>
          <div class="container">
            <p class="p">Your tags:</p>
            <input
            v-model="tags"
            class="input"
            type="text"
            id="tags"
            placeholder="tags"
            />
          </div>
        </div>
          </form>
      </div>
    </div>

    <div class="header">
      <div class="left">
        <a class="active" href="/publish">Publish</a>
        <a class="active" href="#" v-on:click="openSearch">Search</a>
      </div>
      <div class="middle">
        <a href="/app">
        <img src="https://i.imgur.com/9Hnf2pN.png" width="6%" />
      </a>
      </div>
      <div class="right">
        <a class="active" :href="'/profile?u=' + user.username">
          <img :src="user.avatar" style="border-radius: 50%" width="6%"> {{ user.username }}
        </a>
        <a class="active" href="/chat">Chat</a>
      </div>




    </div>





      <div class="main">
        <div class="app">
          <div class="left">
            <div class="container">
            <a class="button-red" href="#" v-on:click="logout">Logout</a>
            <a class="button" href="#" v-on:click="openusermodal">Settings</a>
          </div>
          </div>
          <div class="middle">



              <TimelineApp />



          </div>
          <div class="right"></div>
        </div>
      </div>
  </div>
</template>



<script>

import TimelineApp from "./components/TimelineApp";

export default {
  name: "App",
  components: {
    TimelineApp
  },
  data() {
    return {
      token: "",
      user: "",
      searchcontent: "",
      timeline: []
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
            localStorage.setItem("username", final.user.username);
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
    openusermodal: function () {
      document.getElementById("usermodal").style.display = "block";
    },
    closeusermodal: function () {
      document.getElementById("usermodal").style.display = "none";
    },
    search: function () {
        const { searchcontent } = this;
        window.location = "/profile?u=" + searchcontent
    },
    logout: function () {
      localStorage.clear();
      window.location = "/login"
    },
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

.app .left .button{
  background-color: #efe9ce;
  padding: 4%;
  color: black;
  text-decoration: none;
  border-radius: 10px;
}

.app .left .button-red{
  background-color: #c14b86;
  padding: 4%;
  color: white;
  text-decoration: none;
  border-radius: 10px;
}
.app .left .container{

  padding-left: 4%;
  padding-top: 10%;


}


.app .middle {
  background-color: #fff8dc;
  width: 60%;
  overflow-x: hidden;
  overflow-y: auto;
}

.app .right {
  background-color: #FDB7D7;
  width: 20%;
}

.app {
  background-color: #5487BB;
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

.door {
  color: #fff8dc;
  text-align: left;
  border-radius: 10px;
  background-color: #FDB7D7;
  padding: 15px;
  width: auto;
  border: 6px solid #F8E3EC;
}
.door .input {
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #5487BB;
}

::placeholder {
  color: white;
}

.door .button {
  color: black;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #F8E3EC;
}
.door .textarea {
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #5487BB;
}
.door .p {
  padding-bottom: 12px;
}

.door .container {
  padding: 15px;
}
</style>
