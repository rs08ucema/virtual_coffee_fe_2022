<template>

  <div>

    <!--  how to refactor this using Vue  -->
    <h1>Virtual Coffee</h1>
    <p>{{ subtitle }}</p>

  </div>

</template>

<script>
export default {
  name: 'HeaderComp',
  data() {
    return {
      subtitle: "El verdadero sabor a café",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #f6f4ef;
  border-bottom: 2px solid gray;
  padding: 10px;
  box-shadow: 0 4px darkgrey;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}

img {
  max-width: 120px;
  border-radius: 50%;
}
#header-title {
  text-align: center;
}
#title {
  font-family: serif;
  font-style: italic;
  font-size: 300%;
}
#subtitle {
  font-style: italic;
  font-size: 14px;
}
#menu-container {
  align-self: center;
  padding: 15px 25px;
  border-radius: 5px;
  background: #c7a17a;
  border: 2px solid #493a2b;
}
.header-button {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

</style>
