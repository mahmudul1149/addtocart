<template>
  <div>
    <div class="wrapper">
      <div class="content-box">
        <h1 class="title">Top rated</h1>
        <div class="row">
          <div
            class="cart-box"
            @click="foodDetails(item)"
            v-for="item in topRated"
            :key="item.id"
          >
            <img :src="item.url" alt="" />

            <div class="cart">
              <h3>{{ item.name }}</h3>
              <h2>${{ item.price }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="content-box">
        <h1 class="title">All Categories</h1>
        <div class="row">
          <div
            class="cart-box"
            @click="foodDetails(item)"
            v-for="item in allCategories"
            :key="item.id"
          >
            <img :src="item.url" alt="" />

            <div class="cart">
              <h3>{{ item.name }}</h3>
              <h2>${{ item.price }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="content-box">
        <h1 class="title">Dishes Near You</h1>
        <div class="row">
          <div
            class="cart-box"
            @click="foodDetails(item)"
            v-for="item in disesNearYou"
            :key="item.id"
          >
            <img :src="item.url" alt="" />

            <div class="cart">
              <h3>{{ item.name }}</h3>
              <h2>${{ item.price }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
    allCategories() {
      return this.$store.state.allCategories;
    },
    disesNearYou() {
      return this.$store.state.disesNearYou;
    },
  },
  methods: {
    foodDetails(item) {
      this.$router.push({ name: "food-detail", params: item });
    },
  },
};
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.row .cart-box {
  margin-right: 1.5rem;
  border: 1px solid rgba(20, 10, 20, 0.2);
  border-radius: 10px;
  text-align: center;
  background: white;
}
.cart h3 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.row .cart-box:hover {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
}
.cart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
}
.row img {
  width: 250px;
  height: 200px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.title {
  color: rgb(71, 71, 219);
}
</style>