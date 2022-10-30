<template>
  <div id="main-order-item" v-on:click="addItem(name, price)" title="Agregar Producto">
    <div class="text-item-div">
      <h3 class="name-item">{{ name }}</h3>
      <p><span class="price-item">$ {{ price }}</span></p>
    </div>

    <div class="img-item-div">
      <img v-bind:src="require('../assets/img/products/' + image)" v-bind:alt="altText">
    </div>

  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: [
    "name",
    "image",
    "price"
  ],
  emits: ['addItem'],
  data() {
    return {
      altText: "Foto Producto"
    }
  },
  methods: {
    addItem(name, price) {
      this.$emit("addItem", {name: name, price: price})
    }
  }
}
</script>

<style scoped>
#main-order-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 400px;
  height: 130px;
  border: 1px solid lightgrey;
  margin: 5px 0 5px 0;
}
.text-item-div {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
}
.img-item-div img {
  width: 130px;
  height: 130px;
}
#main-order-item:hover {
  opacity: 60%;
  cursor: pointer;
}


</style>