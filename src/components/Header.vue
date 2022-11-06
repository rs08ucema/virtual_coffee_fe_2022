<template>
  <div id="header-container">

    <router-link :to="{name: 'HomeRoute'}">
      <img src="../assets/img/coffee_logo.jpg" alt="Coffee Logo">
    </router-link>


    <div id="header-title">
      <h1 id="title">{{ title }}</h1>
      <p id="subtitle">{{ subtitle }}</p>
    </div>

    <router-link class="header-button" :to="{name: 'SubscriptionRoute'}">
      <div style="width: 145px">
        <div id="menu-container" v-if="showButton">
          {{ subscription }}
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    showButton: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "Virtual Coffee"
    },
    subtitle: {
      type: String,
      default: "El verdadero sabor a café"
    }
  },
  data() {
    return {
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
