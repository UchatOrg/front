<template>
<div class="door">
  <form @submit.prevent="post">
  <div class="container">
    <p class="p">Write a post:</p>
    <textarea
      v-model="content"
      class="textarea"
      type="text"
      id="username"
      placeholder="Write seomething to post!"
    />
  </div>


  <div class="container">
    <button class="button" name="button" type="submit">Publish</button>
  </div>
</form>
</div>
</template>

<script>
export default {
  name: "HeroLogin",
  data() {
    return {
      token: "",
      content: "",
    };
  },
  methods: {
    post: function () {
      const { content } = this;
      var token = localStorage.getItem("token");
      if (token == null) {
        window.location = "/login";
      } else {
        this.token = token;
        var self = this
        if (content.length != 0) {
      fetch("https://uchatorg.herokuapp.com/api/posts/post", {
        method: "POST",
        headers: {
          token: token,
          type: "text",
          contenu: content
        },
      })
        .then(function(json) {
            json.json().then(function(final) {
              if (final.message == "youpi") {
                self.content = ""
                alert("Post Published")
              } else {
                alert("Something weird happened")
              }


            });
        })
        .catch((err) => {
          console.error(err);
        });
      } else {
      alert("you can't publish an empty post!")}
      }
    },
  },
  /*mounted: function () {
    this.login();
  },*/
};
</script>

<style scoped>

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
