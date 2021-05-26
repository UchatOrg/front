<template>
  <div class="about">
       <div class="container">
         <h1>
           What is Uchat:
         </h1>

         <div class="parag">
           Uchat is a safe place to chat with your friends, without<br />
           being watched by evil corporations, here your data<br />
           stays warm with you ^^
         </div>
         <br />

         <h2>
           Created with ❤️ by:
         </h2>
         <br />
         <div class="grid-container">
           <div>Yann<br><img src="https://avatars.githubusercontent.com/u/61117321" width="100px" style="border-radius:10px;"></div>
           <div>Lisa<br><img src="https://i.imgur.com/45lZ6ZE.png" width="100px" height="100px" style="border-radius:10px;"></div>
           <div>Vivi<br><img src="https://i.imgur.com/pKXX6Nd.png" width="100px" height="100px" style="border-radius:10px;"></div>
         </div>
       </div>
     </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@900&display=swap");

* {
  box-sizing: border-box;
  font-family: "Rubik";
  margin: 0;
}

.about {
  background-color: #efe9ce;
}
.about {
  background-color: #efe9ce;
}


.container {
  padding: 40px;
}

.container h1 {
  font-size: 50px;
  padding-bottom: 20px;
}
.container h2 {
  font-size: 34px;
  font-family: monospace;
}
.parag {
  font-size: 25px;
  font-family: monospace;
  padding-left: 100px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 50px;
  //background-color: #2196F3;
  padding: 10px;
}

.grid-container > div {
  background-color: #FDB7D7;
  font-size: 50px;
  text-align: center;
  padding: 15px;
  border-radius: 10px;

}

</style>
