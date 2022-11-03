<template>
  <div id="oder-container">

    <h2 class="order-title">Bebidas</h2>
    <div class="order-items">
      <OrderItem v-for="(item, index) in beverageItems" v-bind:key="index"
                 v-bind:name="item.name"
                 v-bind:image="item.image"
                 v-bind:price="item.price"
                 v-on:addItem="addItemToCart($event)"
      />
    </div>

    <h2 class="order-title">Snacks</h2>
    <div class="order-items">
      <OrderItem v-for="(item, index) in snacksItems" v-bind:key="index"
                 v-bind:name="item.name"
                 v-bind:image="item.image"
                 v-bind:price="item.price"
                 v-on:addItem="addItemToCart($event)"
      />
    </div>
  </div>
</template>

<script>
import OrderItem from "@/components/OrderItem";
import {beverageProducts, snacksProducts} from "@/assets/js/products";

export default {
  name: "OrderOnline",
  emits: ['pushItem'],
  components: {
    OrderItem
  },
  data() {
    return {
      beverageItems: beverageProducts,
      snacksItems: snacksProducts,
    }
  },
  methods: {
    addItemToCart(item) {
      this.$emit("pushItem", item)
    }
  }
}
</script>

<style scoped>
#oder-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
.order-items {
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 820px;
  align-items: center;
  justify-content: space-between;
}
.order-title {
  margin-left: 20px;
  font-weight: normal;
  font-size: 200%;
  text-align: left;
}
</style>