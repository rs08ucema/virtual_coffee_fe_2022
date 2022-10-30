<template>
  <div id="homepage">
    <Header/>

    <div id="home-container">
      <div>
        <!-- Notar que tanto v-on:custom-event como @custom-event son sinonimos -->
        <SideBar v-on:menuEvent="showMenuOptionSelected"/>
      </div>

      <div>
        <!-- Notar que tanto v-on:custom-event como @custom-event son sinonimos -->
        <Home v-if="menu.home" @menu-event="showMenuOptionSelected"/>
        <BeverageMenu v-if="menu.beverage"/>
        <SnackMenu v-if="menu.snacks"/>
        <OrderOnline v-if="menu.order"/>
      </div>

      <div id="div-banner">
        <Banner/>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";
import Home from "@/components/Home";
import BeverageMenu from "@/components/BeverageMenu";
import SnackMenu from "@/components/SnackMenu";
import OrderOnline from "@/components/OrderOnline";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    SideBar,
    Banner,
    Home,
    BeverageMenu,
    SnackMenu,
    OrderOnline
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