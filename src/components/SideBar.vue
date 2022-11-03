<template>
  <div id="navbar-container">
    <p class="menu" v-on:click="$emit('menuEvent', 'home')">Home</p>
    <p class="menu" v-on:click="$emit('menuEvent', 'beverage')">Menú Bebidas</p>
    <p class="menu" v-on:click="$emit('menuEvent', 'snacks')">Menú Snacks</p>

    <router-link :to="{name: 'OrderOnlineRoute'}">
      <p class="menu order">Pedido Online</p>
    </router-link>

    <img id="social-media" src="../assets/img/follow_us_social_media.png" alt="Seguimos...">
  </div>
</template>

<script>
export default {
  name: "SideBar",
  emits: ['menuEvent']
}
</script>

<style scoped>
#navbar-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: inline-block;
  margin-top: 30px;
  margin-left: 20px;
  width: 200px;
  background-color: #eee;
  border: 5px double rgb(109, 55, 55);
  border-radius: 5px;
  text-align: center;
}

#home-container p:hover {
  background-color: #ccc;
}

#home-container p.order {
  background-color: #3e1c08;
  color: white;
  text-decoration: none;
  font-style: normal;
}

.menu {
  font-weight: bold;
  background-color: #eee;
  color: black;
  display: block;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
}

a:link {
  text-decoration: none;
}

#social-media {
  width: 150px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}
</style>