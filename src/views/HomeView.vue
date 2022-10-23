<template>
  <div id="homepage">
    <Header/>

    <div id="home-container">
      <div>
        <h2>SideBar</h2>
        <!-- Here SideBar Component add the event listener as well-->
        <!-- How to use emit https://vuejs.org/guide/components/events.html#emitting-and-listening-to-events -->
      </div>

      <div>
        <h2>Home (menus y pedido)</h2>
        <!-- Here Home v-if="menu.home" add the event listener as well-->

        <!-- Also here add our Menu Options with the show conditions-->
        <!-- BeverageMenu -->
        <!-- SnackMenu -->
        <!-- OrderOnline -->
      </div>

      <div id="div-banner">
        <h2>Banner</h2>
        <!-- Here Banner -->
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import BeverageMenu, SnackMenu, OrderOnline
// import Banner
// import here SideBar and Home

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    // SideBar,
    // Home,
    // Banner,
    // BeverageMenu,
    // SnackMenu,
    // OrderOnline
  },
  data() {
    return {
      menu: {
        activeOption: "home",
        home: true,
        beverage: false,
        snacks: false,
        order: false,
      }
    }
  },
  methods: {
    showMenuOptionSelected(option) {
      let oldOption = this.menu.activeOption;
      this.menu.activeOption = option;
      this.menu[oldOption] = false;
      this.menu[this.menu.activeOption] = true;
    }
  },
}
</script>

<style scoped>
#homepage {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;
}
#home-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
#div-banner {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>