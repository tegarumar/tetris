<template>
  <div class="card" v-show="!isMobile">
    <p class="card__text">
      Game Tetris ini mengadopsi konsep gravitasi dari fisika. Game ini dibuat
      sebagai bagian dari project UAS mata kuliah Fisika.
      <br />
      <br />
      Tegar Umar Abdillah
      <br />
      230621002
    </p>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
/* @import url("https://fonts.googleapis.com/css2?family=Wallpoet&display=swap"); */

.card {
  background-image: url(https://i.ibb.co.com/FWzWtL8/Group-22680.png);
  background-size: cover;
  width: 523.5px;
  height: 316px;
  color: white;
  padding: 42px 32px;

  position: absolute;
  left: auto;
  top: 15%;
  right: 115%;
}

.card__text {
  font-family: "Press Start 2P", system-ui;
  /* font-family: "Wallpoet", cursive; */
  font-weight: 400;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.25;
}
</style>
