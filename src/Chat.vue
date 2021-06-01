<template>
  <div id="app">


    <title>Chat</title>



      <div class="header">
        <div class="left">
          <a class="active" href="/register">Back</a>
        </div>
        <div class="middle">

            <img :src="user.avatar" style="border-radius: 50%" width="6%">
              <a class="group" href="/chat">Oral de Nsi</a>

          <!-- <a class="active" href="/chat">Chat</a>-->

        </div>
        <div class="right">
          <img src="https://i.imgur.com/9Hnf2pN.png" width="6%" />

        </div>

        <!--<a href="#default" class="logo"
          >
        <div class="header-right">

        </div>-->
      </div>

      <div class="main">
        <div class="app">
          <div class="left">

              <div class="username">
                <img :src="user.avatar" width="15%"> {{ user.username }}
              </div>
              <br>
              <div class="convs" v-for="channel in channels.reverse()" v-bind:key="channel._id">
                  <div class="post">
                      <div class="conv">
                        <img :src="user.avatar" width="10%"> {{ channel.name}}
                      </div>
                    </div>
                    <br>



            </div>
            <br>
            <div class="button-add">
              +
            </div>

            <div class="settings">
              Settings
            </div>
            </div>
          <div class="middle">
            <div id="chat-messages" class="card-content" v-html="chatContent">
            </div>
            <div class="chat">
            </div>
            <div class="form">
              <button class="button" @click="send"><img src="https://i.imgur.com/3lrMwcn.png"></button>
              <input class="input" v-model="newMsg" @keyup.enter="send">

            </div>
          </div>
          <div class="right">
            <div class="title">
              Dans ce groupe:
            </div>


            <div class="active user">
              <img :src="user.avatar" width="10%"> Sara
            </div>
            <br>
            <div class="user">
              <img :src="user.avatar" width="10%"> Lisa
            </div>
            <br>
            <div class="user">
              <img :src="user.avatar" width="10%"> Vivi
            </div>

          </div>
        </div>
      </div>
  </div>
</template>




<script>
export default {
  name: "Publish",
  data() {
    return {
      token: "",
      user: "",
      channels: [],
      newMsg: '',
      chatContent: '',
      currentRoom: ''
    };
  },
  created: function () {


    var self = this;
    var token = localStorage.getItem("token");
    if (token == null) {
      window.location = "/login";
    } else {
      this.token = token;
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

      fetch("https://uchatorg.herokuapp.com/api/channels/list", {
        method: "POST",
        headers: {
          "token": this.token
        }
      }).then(function (json) {

        json.json().then(function (final) {

          if (final) {
            console.log(final.channels);
            for (var i = 0; i < final.channels.length; i++) {
              self.channels.push(final.channels[i])
            }

          } else {

            alert("Error with your credentials");

          }

        });
      });



      let socket = new WebSocket("ws://localhost:8889/ws")
      console.log("Attempting Websocket Connection")
      socket.onopen = () => {
          console.log("Successfully Connected")
          this.socket = socket
          self.emit("handshake", "handshake", JSON.stringify({ authorization: this.token}))
      }

      socket.onclose = (event) => {
          console.log("Socket Closed Connection: ", event)
      }

      socket.onmessage = (msg) => {
          msg = JSON.parse(msg.data)
          self.slog(msg.content)
          console.log(msg)
      }
      socket.onerror = (error) => {
          console.log("Socket Error: ", error)
      }



    }





  },
  methods : {
    send: function () {
        var self = this;
        if (this.newMsg != '') {

            var query = this.newMsg

            self.disp(query);

            this.newMsg = ''; // Reset newMsg


        }


    },

    disp: function(content) {

        var self = this;

            var msg = content
            self.chatContent += '<div class="post">'
                    + '<img src="' + this.user.avatar +'">' // Avatar
                    + this.user.username
                + '</div>'
                + msg + '<br/>';

            var element = document.getElementById('chat-messages');
            element.scrollTop = element.scrollHeight; // Auto scroll to the bottom
    },
    emit: function(event, content, data){
        this.socket.send(
                JSON.stringify({
                    content: content,
                    type: this.Type,
                    event: event,
                    data: data
                }));
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
  vertical-align: middle;
  width: 60%;
  background-color: #5487BB;
  text-align: left;
  padding: 1%;
}

.header .inline {
  display: inline-block;
  color: white;
}
.header .middle img {
  vertical-align: middle;
  padding-bottom: 1%;
  margin-right:15px;
}

.header .middle .active{
  background-color: #FDB7D7;
  padding: 1%;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  margin-right:15px;
}
.header .middle .group {

  padding: 1%;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  margin-right:15px;
  font-size: 40px;
}


.header .right img {

  width: 20%;
}
.header .right {
  padding: 1%;
  width: 20%;
  background-color: #FDB7D7;
  text-align: center;
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
  overflow-y: auto;
}
.app .middle {
  background-color: #F8E3EC;
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

.app .left .username {

  width: 100%;
  background-color: #EFE9CE;
  padding: 10%;
  font-size: 30px;
}

.app .left .username img {
  border-radius: 50%;
  display: inline;
}



.app .left .conv {
  width: 100%;
  background-color: #EFE9CE;
  padding: 5%;
  font-size: 15px;
}

.app .left .conv img {
  border-radius: 50%;
  display: inline;
}

.app .left .active  {
  background-color: #F8E3EC;
}

.app .left .button-add {
  text-align: center;
  padding: 7%;
  margin: 10%;
  background-color: #EFE9CE;
  border-radius: 10px;
  font-size: 30px;

}

.app .left .settings {
  width: 100%;
  text-align: center;
  background-color: #EFE9CE;
  padding: 10%;
  position: relative;
  font-size: 15px;
  bottom: 0;
  left: 0;

}



.middle .form {
  background-color: #FDB7D7;
  position: fixed;
  height: 10%;
  bottom: 0;
  left: 20%;
  right: 20%;
  display: flex;
  padding: 10px;
}

.middle .form .button{
  width: 10%;
  background-color: #5487BB;
  border: none;
  border-radius: 50px 0px 0px 50px;
}


.middle .form .button img {
  height: 75%;
  transform: scaleX(-1);
}

.middle .form .input{
  width: 90%;
  background-color: #5487BB;
  border: none;
  border-radius: 0px 50px 50px 0px;
}



.app .right .title {

  width: 100%;
  /*background-color: #EFE9CE;*/
  padding: 10%;
  font-size: 30px;
  color: white;
}




.app .right .user {
  width: 100%;
  background-color: #EFE9CE;
  padding: 10%;
  font-size: 15px;
}

.app .right .user img {
  border-radius: 50%;
  display: inline;
}
</style>
