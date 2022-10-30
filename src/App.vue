<template>

  <div id="main">
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view/>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {}
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
