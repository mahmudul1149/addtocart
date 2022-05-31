<template>
  <div>
    <header>
      <div @click="goTo('home')" class="logo">
        <h4>Sweet Dish</h4>
        <img src="../assets/bkk.png" alt="" />
      </div>
      <div class="box">
        <div class="icon-box">
          <img
            @click="goTo('cart')"
            src="../assets/cart-icon-28356.png"
            alt=""
          />
          <span class="cart-icon">{{ cartItemCount }}</span>
        </div>

        <img class="food-logo" src="../assets/food.logo.png" alt="" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    carts() {
      return this.$store.getters.carts;
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  methods: {
    goTo(page) {
      page == "home"
        ? this.$router.push("/")
        : this.$router.push("/food-details");
    },
  },
};
</script>

<style>
header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}
a {
  font-size: 1.5rem;
}
.logo {
  display: flex;
  align-items: center;
}
.food-logo {
  margin-left: 1rem;
}
.logo h4 {
  font-size: 1.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.box img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.logo img {
  width: 40px;
  height: 40px;
  margin-left: 0.4rem;
}
.box {
  display: flex;
  align-items: center;
}
.box a {
  text-decoration: none;
  color: #333;
  margin-left: 1.3rem;
}
.icon-box {
  position: relative;
}
.cart-icon {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 1.4rem;
  border: 2px solid #ccc;
  color: red;
  border-radius: 50%;
  position: absolute;
  right: -15px;
  top: -12px;
}
</style>