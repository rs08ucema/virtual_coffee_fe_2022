<template>
  <div id="main">
    <h2 class="product-title">{{ name }}</h2>
    <img class="product-img" v-bind:src="require('../assets/img/products/' + image)" v-bind:alt="productAlt">
    <p class="product-description">{{ description }}</p>
  </div>

</template>

<script>
export default {
  name: "MenuProduct",
  props: [
    "name",
    "image",
    "description"
  ],
  data() {
    return {
      productAlt: "Foto Producto"
    }
  }
}
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
}

.product-img {
  width: 300px;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.product-title {
  text-decoration: underline;
}

.product-description {
  font-style: italic;
  font-size: 14px;
}

</style>