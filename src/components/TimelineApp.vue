<template>
  <div class="container">
  <li v-for="post in timeline.reverse()" v-bind:key="post._id">

      <div class="post">
        <div class="username">
          {{ post.username}}
        </div>
        <div class="content">
          {{ post.content }}
        </div>
        <div class="description" v-on:click="like(post._id)">
          🤎{{ post.likes.length }}
        </div>
      </div>
      <br>
  </li>
</div>
</template>

<script>
export default {
  name: "TimelineApp",
  data() {
    return {
      token: "",
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
      fetch("https://uchatorg.herokuapp.com/api/posts/timeline", {
        method: "POST",
        headers: {
          "token": this.token
        }
      }).then(function (json) {

        json.json().then(function (final) {

          if (final) {
            console.log(final.posts);
            self.timeline = final.posts
          } else {

            alert("Error with your credentials");

          }

        });
      });


    }
  },
  methods: {
    like: function (postid) {
      var self = this;
      fetch("https://uchatorg.herokuapp.com/api/posts/like", {
        method: "POST",
        headers: {
          "token": self.token,
          "postid": postid
        }
      }).then(function (json) {

        json.json().then(function (final) {

          if (final.message == "youpi") {
            window.location.reload();
          } else {

            alert("Error with your credentials");

          }
          });
        });
    }
  }
};
</script>

<style scoped>
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

li {
  list-style: none;
}



</style>
