<template>
  <div class="food-detail">
    <div>
      <h1>Add Item to cart</h1>
      <img :src="details.url" alt="" />
    </div>
    <div>
      <div class="content-box">
        <h3>Name: {{ details.name }}</h3>
        <h3>Price: {{ details.price }}</h3>
        <h3>Description: {{ details.desc }}</h3>
        <h3>Rating: {{ details.rate }}</h3>
      </div>
      <div class="button-box">
        <button class="btn btn-primary" @click="goToCart">Go to Cart</button>
        <button class="btn btn-secondery" @click="addCart()">Add item</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: this.$route.params,
    };
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addCart() {
      const order = {
        quantity: 1,
        cartId: this.details.id,
        imge: this.details.url,
        cartsPrice: this.details.price,
        name: this.details.name,
      };
      this.$store.dispatch("addCarts", order);
      console.log(order);
    },
  },
  created() {
    if (this.$route.params.id !== undefined)
      localStorage.setItem("details", JSON.stringify(this.$route.params));
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>

<style>
.food-detail {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.button-box {
  margin-left: 1rem;
}
.food-detail img {
  width: 300px;
  height: 300px;
  border-radius: 5px;
}
.content-box {
  margin-left: 0.8rem;
}
.btn {
  display: inline-block;
  cursor: pointer;
  padding: 0.4rem 1.2rem;
  border-radius: 5px;
  font-size: 1.3rem;
  border: none;
  outline: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  margin-right: 0.4rem;
}
.btn-primary {
  background: rgb(22, 22, 223);
  color: white;
}
.btn-secondery {
  background: rgb(142, 231, 8);
  color: white;
}
.btn-light {
  background: red;
  color: white;
}
</style>