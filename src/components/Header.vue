<template>
  <div id="header-container">

    <!-- TODO add router-link to HomePage-->
    <div>
      <img src="../assets/img/coffee_logo.jpg" alt="Coffee Logo">
    </div>


    <div id="header-title">
      <h1 id="title">{{ title }}</h1>
      <p id="subtitle">{{ subtitle }}</p>
    </div>

    <div class="header-button">
      <div style="width: 145px">
        <!-- TODO add router-link to NewSubscription-->
        <div id="menu-container" v-if="showButton">
          {{ subscription }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    showButton: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      title: "Virtual Coffee",
      subtitle: "El verdadero sabor a café",
      subscription: "Subscribite",
    }
  }
}
</script>

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
