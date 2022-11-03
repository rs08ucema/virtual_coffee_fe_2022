<template>
  <div id="server-error-main">
    <Header/>
    <div id="server-error-container">
      <img src="../assets/img/server_error_shopping.png" alt="Error">
      <h2>Upss... no pudimos tomar tu pedido, por favor vuelva a intentar :)</h2>
    </div>

    <router-link :to="{ name: 'OrderOnlineRoute'}">Ordenar</router-link>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "ServerErrorView",
  components: {Footer, Header}
}
</script>

<style scoped>
#server-error-main {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;
  margin: 0;
}
#server-error-container {
  margin-top: 20px;
}
</style>