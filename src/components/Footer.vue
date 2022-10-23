<template>
  <div id="footer-container">

    <div id="footer-text">
      <p id="brand">{{ title }}</p>
      <p>{{ phone }}</p>
      <p>{{ location }}</p>
      <p>{{ copyRight }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data () {
    return {
      title: "Virtual Coffee",
      phone: "Teléfono: 4832 1232",
      location: "Dirección: Av. Leandro Além 321 PB",
      copyRight: "© Copyright 2022 Virtual Coffee. Todos los derechos reservados",
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