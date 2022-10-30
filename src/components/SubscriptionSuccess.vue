<template>

  <div id="success-sub-main">
    <Header v-bind:show-button="false"/>
    <span class="title-sub-success">¡{{ this.$route.params["clientName"] }}!</span>
    <span class="title-sub-success"> Gracias por la  suscripción, recibiras un e-mail con descuentos</span>

    <div id="sub-success-img">
      <img src="../assets/img/coffee_subscription_footer.png" alt="">
    </div>

    <router-link :to="{ name: 'HomeRoute'}">Volver</router-link>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "SubscribeSuccess",
  components: {Footer, Header}
}
</script>

<style scoped>
#success-sub-main {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;
}
#sub-success-img {
  display: flex;
  flex-direction: column;
  margin: auto;
}
#sub-success-img img {
  border-radius: 5px;
}
.title-sub-success {
  margin: 10px;
  font-size: 200%;
  font-weight: bold;
}
</style>