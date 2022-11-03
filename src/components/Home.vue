<template>
  <div id="main-home">

    <div class="main-box">
      <router-link :to="{name: 'OrderOnlineRoute'}" class="button-box">
        Pedido Online
      </router-link>
      <img class="home-img" src="../assets/img/community-1.jpg" alt="Comunidad 1">
      <p class="phrases">Creamos una comunidad</p>
    </div>

    <div class="main-box">
      <span class="button-box" v-on:click="$emit('menuEvent', 'beverage')">Menú Bebidas</span>
      <img class="home-img" src="../assets/img/community-2.jpg" alt="Comunidad 2">
      <p class="phrases">Tostamos nuestros granos</p>
    </div>

    <div class="main-box">
      <span class="button-box" v-on:click="$emit('menuEvent', 'snacks')">Menú Snacks</span>
      <img class="home-img" src="../assets/img/community-3.jpg" alt="Comunidad 3">
      <p class="phrases">Pasión por lo que hacemos</p>
    </div>

  </div>

</template>

<script>
export default {
  name: 'HomeComp',
  emits: ['menuEvent']
}
</script>

<style scoped>
@import "../assets/css/home.css";

a:link {
  text-decoration: none;
}
</style>
