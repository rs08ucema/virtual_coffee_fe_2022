<template>

  <div id="main">
    <HomeView/>
  </div>

</template>

<script>
import HomeView from "@/views/HomeView";

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
