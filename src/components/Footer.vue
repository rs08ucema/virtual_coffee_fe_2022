<template>

  <div id="footer-container">

    <div id="footer-text">
      <p>Virtual Coffee</p>
      <p>Direccion: Alvear 123</p>
      <p>Telefono: 49231 - 1232</p>
      <p>Pasion por el cafe</p>
    </div>

  </div>

</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#footer-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: auto;
  display: inline;
  background-color: black;
  box-shadow: 0 0 15px darkgrey;
}
#footer-text {
  font-style: italic;
  font-size: 14px;
  padding-top: 10px;
  color: white;
  text-align: center;
}
#brand {
  font-size: 120%;
  font-weight: bold;
  font-family: serif;
  font-style: italic;
}
</style>