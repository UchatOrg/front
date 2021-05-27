<template>
  <div id="app">


    <title> {{ user.username }}</title>
    <link rel="stylesheet" href="/app/style.css" />


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
      </div>


    </div>

      <div class="main">
        <div class="app">
          <div class="middle">
            <div class="container">
              <div class="post">
                <div class="username">
                  <img :src="user.avatar" style="border-radius: 50%" width="6%"> {{user.username}}
                </div>
                <br>
                <div class="content">
                  followers: {{ user.followers.length }}
                  <br>
                  following: {{ user.following.length }}
                </div>

              </div>
            </div>

          </div>
          <div class="right">
            <div class="container">
              <div class="post">
                <div class="username">
                  {{ user.username }}

                </div>
                <div class="description">
                  <br>
                  {{ user.tags}}
                </div>

              </div>
            </div>
            <div class="container">
              <div class="post">

                <div class="content">
                  <ul>
                  <button class="button" v-on:click="follow"> {{ followtext }}</button>
                  <button class="button">Chat</button>
                </ul>
                </div>

              </div>
            </div>

            <div class="container">
              <div class="post">

                <div class="description">
                  {{ user.bio }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>




<script>
export default {
  name: "Profile",
  data() {
    return {
      token: "",
      user: "",
      following: false,
      followtext: "Follow"
    };
  },
  created: function () {
    var params = new URLSearchParams(window.location.search)
    var qusername =  params.get('u')
    this.username = qusername
    var token = localStorage.getItem("token");
    if (token == null) {
      window.location = "/login";
    } else {
      this.token = token;
      var self = this;
      fetch("https://uchatorg.herokuapp.com/api/info/user", {
        method: "POST",
        headers: {
          "token": this.token,
          "username": qusername
        },
      }).then(function (json) {
        json.json().then(function (final) {
          if (final) {
            self.user = final.user;
            console.log(self.user);
            self.following = final.followingstatus
            if (self.following == true) {
            self.followtext = 'Unfollow'
          }
          } else {
            alert("Error with your credentials");
          }
        });
      });
    }
  },
  methods: {
    follow: function () {

        var self = this;
        if (self.following == false) {
          fetch("https://uchatorg.herokuapp.com/api/follows/follow", {
            method: "POST",
            headers: {
              "token": self.token,
              "username": self.user.username
            },
          }).then(function (json) {
            json.json().then(function (final) {
              if (final.message == "youpi") {
                alert("Followed Successfuly")
                self.following = true
                self.followtext = 'Unfollow'
              } else {
                if (final.message == "already") {
                  alert('You are already following this user')
                } else {

                alert("Error with your credentials");
               }

              }
            });
          });
        } else {
          fetch("https://uchatorg.herokuapp.com/api/follows/unfollow", {
            method: "POST",
            headers: {
              "token": self.token,
              "username": self.user.username
            },
          }).then(function (json) {
            json.json().then(function (final) {
              if (final.message == "youpi") {
                alert("Unfollowed Successfuly")
                self.following = false
                self.followtext = 'Follow'
              } else {
                alert("Error with your credentials");
              }
            });
          });
        }


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
.app .middle {
  background-color: #5487BB;
  width: 60%;
}

.app .right {
  background-color: #5487BB;
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
  background-color: #EFE9CE;
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


.app .container  .button {
  color: black;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #FDB7D7;
  margin-right: 10px;



}

</style>
