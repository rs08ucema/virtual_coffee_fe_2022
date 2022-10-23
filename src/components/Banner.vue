<template>
  <div id="main">
    <a href="https://www.amazon.com/Coffee-Bean-Tea-Leaf-Organic/dp/B00TX06T6M"
       target="_blank">
      <h3>Mex Organic</h3>
      <img src="../assets/img/banner_coffee_beans.png" alt="Banner Beans">
      <p id="description">The Coffee Bean & Tea Leaf Mexico Organic Whole Bean Coffee, 2 Pound</p>
      <p><span>COMPRAR!</span></p>
    </a>
  </div>
</template>

<script>
export default {
  name: "BannerComp"
}
</script>

<style scoped>
#main {
  margin-top: 30px;
  margin-right: 20px;
  margin-bottom: 30px;
  display: block;
  padding: 20px;
  max-width: 120px;
  border: thin solid black;
  border-radius: 5px;
  cursor: pointer;
}

img {
  margin: auto;
  width: 100px;
}

#description {
  font-size: 12px;
}

a {
  text-decoration: none;
  color: black;
}

span {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
</style>