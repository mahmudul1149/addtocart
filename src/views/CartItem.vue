<template>
  <div class="cart">
    <ul>
      <li>
        <div class="cart-items">
          <div class="li-box">
            <img :src="cart.url" alt="" />
          </div>
          <div class="li-box">
            <h3>{{ cart.name }}</h3>
          </div>

          <div class="li-box">
            <button class="btn btn-secondery mr-3" @click="removeItem">
              -
            </button>
          </div>
          <div class="li-box">
            <h4>{{ cart.quantity }}</h4>
          </div>
          <div class="li-box">
            <button class="btn btn-primary mr-3" @click="addItem()">+</button>
          </div>
          <div class="li-box">
            <h2>{{ cart.price }}</h2>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["cart"],

  methods: {
    addItem() {
      const order = {
        quantity: 1,
        cartId: this.cart.id,
      };
      this.$store.dispatch("addItems", order);
      console.log(order);
      console.log("jj");
    },
    removeItem() {
      const order = {
        cartId: this.cart.id,
        quantity: 1,
      };
      this.$store.dispatch("removeItems", order);
      console.log(order);
    },
  },
};
</script>

<style>
.cart-itt {
  display: flex;
}
.cart {
  display: flex;
  align-items: center;
}
.li-box h4 {
  margin-left: 1.3rem;
}
</style>