<template>
  <div class="menu-main">

    <div class="menu-header">
      <h1 class="menu-title">{{ title }}</h1>
    </div>

    <div class="products-container">
      <!-- Here uncomment this code and dig in -->
<!--      <MenuProduct v-for="(product, index) in products" v-bind:key="index"-->
<!--                   v-bind:name="product.name"-->
<!--                   v-bind:image="product.image"-->
<!--                   v-bind:description="product.description"-->
<!--      />-->
    </div>

    <div class="menu-footer">
      <h1 class="menu-text-footer">{{ textFooter }}</h1>
    </div>
  </div>
</template>

<script>
// import MenuProduct from "@/components/MenuProduct";
// import {beverageProducts} from "@/assets/js/products";

export default {
  name: "BeverageMenu",
  // components: {MenuProduct},
  data () {
    return {
      title: "Menú de Bebidas",
      textFooter: "Conocé nuestro estilo",
      // products: beverageProducts
    }
  },
}
</script>

<style scoped>
@import "../assets/css/menu.css";
</style>