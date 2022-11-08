<template>

  <div id="shopping-cart-main">
    <h2 id="shopping-title">{{ title }}</h2>
    <img src="../assets/img/shopping_cart.png" alt="Foto Carrito">
    <hr>
    <div id="cart-item-container" v-for="(item, index) in shoppingCart" v-bind:key="index">
      <span class="item-remove" v-on:click="removeItem(index)">x</span>
      <span class="item-text">{{ item["name"] }}</span>
      <div class="quantity-selector">
        <input class="push-pop-items" type="submit" name="pop" value="-" v-on:click="popItem(index)">
        <input class="item-quantity" type="number" v-bind:value="item['quantity']" readonly min="1">
        <input class="push-pop-items" type="submit" name="push" value="+" v-on:click="pushItem(index)">
      </div>
      <span class="item-price">$ {{ item["price"] }}</span>
    </div>
    <hr v-if="orderDisable">

    <div id="summary-order" v-if="orderDisable">
      <span id="total-price">Total: $ {{ total }}</span>
      <input id="order-submit" type="submit" value="Ordenar" v-on:click="orderCart()">
    </div>

  </div>

</template>

<script>
import {toRaw} from 'vue';

export default {
  name: "ShoppingCart",
  props: ['newItem'],
  data() {
    return {
      title: "Carrito de Compras",
      shoppingCart: [],
      total: 0,
    }
  },
  computed: {
    orderDisable() {
      return this.total !== 0;
    }
  },
  watch: {
    newItem: function ($event) {
      const item = toRaw($event);
      this.addShoppingCart(item);
    },
    shoppingCart: {
      handler(newItem) {
        let subtotal = 0;
        newItem.forEach(item => subtotal += item["subtotal"])
        this.total = subtotal;
      },
      deep: true // when watch an array - to trigger on mutation, the deep option must be specified. 
    }
  },
  methods: {
    addShoppingCart(newItem) {
      let foundItem = this.shoppingCart.find((itemCart, index) => {
        if (itemCart.name === newItem.name) {
          this.shoppingCart[index]["quantity"] += 1;
          this.shoppingCart[index]["subtotal"] += Number(this.shoppingCart[index]["price"]);
          this.$forceUpdate()
          return true;
        }
      })
      if (foundItem === undefined) {
        newItem.quantity = 1;
        newItem.subtotal = Number(newItem["price"]);
        this.shoppingCart.push(newItem);
      }
    },
    pushItem(index) {
      this.shoppingCart[index]["quantity"]++;
      this.shoppingCart[index]["subtotal"] += Number(this.shoppingCart[index]["price"]);
      this.shoppingCart.sort();
    },
    popItem(index) {
      if (this.shoppingCart[index]["quantity"] > 1) {
        this.shoppingCart[index]["quantity"]--;
        this.shoppingCart[index]["subtotal"] -= Number(this.shoppingCart[index]["price"]);
        this.shoppingCart.sort();
      }
    },
    removeItem(index) {
      this.shoppingCart.splice(index, 1);
    },
    orderCart() {
      this.$router.push({
        name: "CheckoutRoute",
        query: {total: this.total, shoppingCart: JSON.stringify(this.shoppingCart)}
      })

    }
  }
}
</script>

<style scoped>
#shopping-cart-main {
  padding: 10px;
  margin-top: 20px;
  width: 400px;
  background-color: #eee;
  border: 5px solid rgb(109, 55, 55);
  border-radius: 5px;
  text-align: center;
}

#shopping-title {
  font-family: serif;
  font-style: italic;
  font-size: 160%;
}

#summary-order {
  display: flex;
  flex-direction: column;
}

#cart-item-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: bisque;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5px;
}

.item-quantity {
  border-radius: 5px;
  width: 30px;
  background-color: #eee;
  margin: 0 8px 0 8px;
  text-align: center;
}

.item-remove {
  color: red;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
}

.item-price {
  font-weight: bold;
  font-size: 120%;
  width: 70px;
}

.item-text {
  padding: 10px 0 10px 0;
  font-weight: bold;
  font-size: 120%;
  text-align: left;
  width: 120px;
}

#total-price {
  font-size: 200%;
  text-align: right;
  margin: 20px
}

#order-submit {
  width: 150px;
  padding: 10px;
  font-weight: bold;
  font-size: 100%;
  border-radius: 5px;
  background: #00bab3;
  border: 2px solid #493a2b;
  cursor: pointer;
  color: white;
  align-self: end;
}

#order-submit:hover {
  background-color: #3e1c08;
}

.quantity-selector {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 5px;
}

.push-pop-items {
  color: darkblue;
  font-size: 120%;
  cursor: pointer;
  border: none;
  background-color: bisque;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield !important;
}
</style>