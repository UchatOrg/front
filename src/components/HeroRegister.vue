<template>
  <div class="hero">
    <div class="middle-container">
      <h1>Register</h1>
      <br />




      <div class="door">

        <form @submit.prevent="register">

          <div class="container">
            <p class="p">Your email:</p>
            <input
            v-model="email"
            class="input"
            type="text"
            id="email"
            placeholder="email"
            />
          </div>


          <div class="container">
            <p class="p">Your username:</p>
            <input
            v-model="username"
            class="input"
            type="text"
            id="username"
            placeholder="username"
            />
          </div>

          <div class="container">
            <p class="p">Your password:</p>
            <input
            v-model="password"
            class="input"
            type="password"
            id="password"
            placeholder="password"
            />
          </div>

          <div class="container">
            <p class="p">Repeat your password:</p>
            <input
            v-model="cpassword"
            class="input"
            type="password"
            id="cpassword"
            placeholder="repeat password"
            />
          </div>

          <div class="container">
            <button class="button" name="button" type="submit">
              Register
            </button>
          </div>


        </form>



      </div>




    </div>
  </div>
</template>

<script>
export default {
  name: "HeroRegister",
  data() {
    return {
      username: "",
      password: "",
      cpassword: "",
      email: "",
    };
  },
  methods: {
    register: function () {
      const { username, password, email, cpassword } = this;
      if ( password != cpassword) return alert("les mots de passes sont différents")
      fetch("https://uchatorg.herokuapp.com/api/auth/register", {
        method: "POST",
        headers: {
          username: username,
          password: password,
          email: email
        },
      })
        .then(function(json) {
            json.json().then(function(final) {
              if (final.message == "youpi") {
                  alert("utilisateur enregistré");
                  window.location.href = "/login";
              } else {
                alert("Error with your credentials")
              }


            });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  /*mounted: function () {
    this.login();
  },*/
  };
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@900&display=swap");
* {
  font-family: Rubik;
  color: black;
}
.hero {
  background-color: #5487BB;
  height: 80vh;
  position: relative;
}
.middle-container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
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

.door .p {
  padding-bottom: 12px;
}

.door .container {
  padding: 15px;
}
</style>
