<template>

  <div id="checkout-item-div">
    <span id="name-checkout-item">{{ name }}</span>
    <span id="quantity-checkout">x {{ quantity }}</span>
    <span id="price-checkout-item">$ {{ price }}</span>
  </div>

</template>

<script>
export default {
  name: "CheckoutItem",
  props: [
    "name",
    "price",
    "quantity"
  ],
  data() {
    return {}
  }
}
</script>

<style scoped>
#checkout-item-div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 350px;

  background-color: bisque;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5px;
}

#name-checkout-item {
  font-size: 120%;
  width: 150px;
  text-align: start;
  font-weight: bold;
  padding: 5px 0 5px 0;
}
#price-checkout-item {
  width: 50px;
  text-align: end;
  font-weight: bold;
}
#quantity-checkout {
  font-size: 12px;
}

</style>