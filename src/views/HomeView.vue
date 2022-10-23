<template>

  <Header/>

  <Footer id="footer"/>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
}

</style>