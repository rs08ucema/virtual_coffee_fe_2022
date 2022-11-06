<template>
  <div id="checkout-success-main">
    <Header
        v-bind:title="'Pedido Online'"
        v-bind:subtitle="'Lunes - Viernes (8:00 AM - 17:00 PM)'"
        v-bind:show-button="true"
    />
    <div>
      <img src="../assets/img/shopping_cart_success_icon_177410.png" alt="Orden OK">
      <h2>Estamos elaborando su pedido</h2>
      <h3>Pedido número: #{{ this.$route.query["order_id"] }}</h3>
    </div>

    <router-link :to="{ name: 'HomeRoute'}">Home</router-link>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "CheckoutSuccessView",
  components: {Footer, Header}
}
</script>

<style scoped>
#checkout-success-main {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;
  margin: 0;
}

</style>