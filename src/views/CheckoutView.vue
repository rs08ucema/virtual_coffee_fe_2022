<template>
  <div id="checkout-view-main">
    <Header
        v-bind:title="'Pedido Online'"
        v-bind:subtitle="'Lunes - Viernes (8:00 AM - 17:00 PM)'"
        v-bind:show-button="false"
    />
    <div style="margin: auto">
      <div id="checkout-data">
        <div id="checkout-item-list">
          <h2>Carrito</h2>
          <CheckoutItem v-for="(item, index) in JSON.parse($route.query['shoppingCart'])" v-bind:key="index"
                        v-bind:name="item.name"
                        v-bind:quantity="item.quantity"
                        v-bind:price="item.price"
          />
        </div>

        <div id="select-payment-method">
          <h2>Medio de Pago</h2>
          <div class="payment-method">
            <label class="shipping-fields">Pago en efectivo</label>
            <input type="radio" name="payment-method" v-on:click="showQR = false" checked>
          </div>
          <div class="payment-method">
            <label class="shipping-fields">Pago con QR</label>
            <input type="radio" name="payment-method" v-on:click="showQR = true">
          </div>
          <img id="qr-code-img" src="../assets/img/random_qr_code.png" alt="QR" v-if="showQR">
        </div>

        <div id="checkout-shipping">
          <h2>Envío</h2>
          <form id="shipping-form" @submit.prevent="orderCart()">
            <label class="shipping-fields">Nombre completo</label>
            <input type="text" required v-model="fullName">

            <label class="shipping-fields">Teléfono celular</label>
            <input type="text" v-model="phoneNumber" required>

            <label class="shipping-fields">Dirección</label>
            <input type="text" v-model="address" required>

            <div>
              <h2>Total: <span>$ {{ $route.query['total'] }}</span></h2>
              <input id="confirm-order" type="submit" value="Confirmar Pedido">
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>

  </div>
</template>

<script>
import Header from "@/components/Header";
import CheckoutItem from "@/components/CheckoutItem";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "CheckoutView",
  components: {Footer, CheckoutItem, Header},
  data() {
    return {
      fullName: "",
      address: "",
      phoneNumber: "",
      showQR: false,
      paymentMethod: ""
    }
  },
  methods: {
    orderCart() {
      axios.post("http://localhost:5000/api/v1/orders", {
        user: this.fullName,
        address: this.address,
        phone_number: this.phoneNumber,
        shopping_cart: JSON.parse(this.$route.query['shoppingCart']),
      })
          .then(response => {
            console.log(response)
            this.$router.push({name: "CheckoutSuccessRoute", params: {order_id: response.data["order_id"]}})
          })
          .catch(error => {
            console.log(error);
            this.$router.push({name: "CheckoutServerErrorRoute"})
          });
    }
  },
  mounted() {
    if (this.$route.query['shoppingCart'] === undefined) {
      this.$router.push({name: "OrderOnlineRoute"})
    }
  }
}
</script>

<style scoped>
#checkout-view-main {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;
  margin: 0;
}

#checkout-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 20px 0;
  width: 440px;
  border: 1px solid lightgrey;
}

#shipping-form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  text-align: right;
}

#select-payment-method {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#checkout-item-list {
  display: inline-block;
}

#qr-code-img {
  margin-top: 10px;
  border: 6px solid black;
  border-radius: 3px;
  width: 200px;
}

.payment-method {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}

#confirm-order {
  width: 180px;
  height: 50px;
  padding: 10px;
  font-weight: bold;
  font-size: 100%;
  border-radius: 5px;
  background: #00bab3;
  border: 2px solid #493a2b;
  cursor: pointer;
  color: white;
  align-self: end;
}

#confirm-order:hover {
  background-color: #3e1c08;
}

#checkout-shipping {
  padding-bottom: 20px;
}

.shipping-fields {
  margin: 5px;
  font-weight: bold;
  color: dimgrey;;
}

</style>