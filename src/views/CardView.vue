<template>
  <div class="cart-box-container">
    <div class="box-container">
      <div>
        <h1>My Cart</h1>
        <h3 cl>Summary</h3>
        <div class="summary-box">
          <div>
            <h2>Total:</h2>
            <h2>Promo Code</h2>
            <h2>Shipping</h2>
            <div class="line width"></div>
            <h2>Subtotal:</h2>
          </div>
          <div>
            <h2>{{ total }}</h2>
            <h2>Sweet Dish</h2>
            <h2>RS 50</h2>
            <div class="line width"></div>
            <h2>{{ total + 50 }}</h2>
          </div>
        </div>
      </div>
      <div class="css">
        <app-cart v-for="cart in carts" :key="cart.id" :cart="cart"></app-cart>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: {
    appCart: CartItem,
  },
  computed: {
    carts() {
      return this.$store.getters.carts;
    },
    total() {
      return this.$store.getters.total;
    },
  },
};
</script>

<style>
.box-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-container .cart-items {
  display: flex;
  align-items: center;
  padding: 0.3rem;
}
.summary-box {
  display: flex;
}

.line {
  height: 1px;
  width: 200px;
  margin-right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.cart-items {
  background: white;
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.cart ul li {
  list-style: none;
}

.cart li {
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 60px;
}
.cart .li-box {
  width: 24%;
}
.cart img {
  height: 50px;
  width: 50px;
  text-align: center;
  border-radius: 50%;
}

.mr-3 {
  margin: 0 1rem;
}
</style>
