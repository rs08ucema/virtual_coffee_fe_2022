<template>

  <div id="order-online-view-main">
    <Header
        v-bind:title="'Pedido Online'"
        v-bind:subtitle="'Lunes - Viernes (8:00 AM - 17:00 PM)'"
        v-bind:show-button="false"
    />

    <div id="order-online-view-content">
      <OrderOnline
          v-on:pushItem="item = $event"
      />
      <ShoppingCart v-bind:newItem="item"/>
    </div>

    <Footer/>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderOnline from "@/components/OrderOnline";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  name: "OrderOnlineView",
  components: {ShoppingCart, OrderOnline, Footer, Header},
  data() {
    return {
      item: {}
    }
  },
}
</script>

<style scoped>
#order-online-view-main {
  display: flex;
  flex-direction: column;
}

#order-online-view-content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}

</style>