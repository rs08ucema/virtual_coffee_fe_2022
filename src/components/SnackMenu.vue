<template>
  <div class="menu-main">

    <div id="menu-header-snacks" class="menu-header">
      <h1 class="menu-title">{{ title }}</h1>
    </div>

    <div class="products-container">
      <MenuProduct v-for="(product, index) in products" v-bind:key="index"
                   v-bind:name="product.name"
                   v-bind:image="product.image"
                   v-bind:description="product.description"
      />
    </div>

    <div id="menu-footer-snacks" class="menu-footer">
      <h1 class="menu-text-footer">{{ textFooter }}</h1>
    </div>
  </div>
</template>

<script>
import MenuProduct from "@/components/MenuProduct";
import {snacksProducts} from "@/assets/js/products";

export default {
  name: "SnackMenu",
  components: {MenuProduct},
  data () {
    return {
      title: "Menú de Snacks",
      textFooter: "Conocé nuestro estilo",
      products: snacksProducts
    }
  }
}
</script>

<style scoped>
@import "../assets/css/menu.css";
</style>