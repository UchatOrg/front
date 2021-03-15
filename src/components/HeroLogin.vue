<template>
  <div class="hero">
    <div class="middle-container">
      <h1>Login:</h1>
      <br />
      <div class="door">
        <div class="container">
          <p class="p">Your username:</p>
          <input
            class="input"
            type="text"
            id="username"
            placeholder="username"
          />
        </div>

        <div class="container">
          <p class="p">Your password:</p>
          <input
            class="input"
            type="password"
            id="password"
            placeholder="password"
          />
        </div>

        <div class="container">
          <button class="button" name="button" onclick="login();">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroLogin",
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
