import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import cake from "../assets/cake.jpg";
import marcroni from "../assets/macroni.jpg";
import noodles from "../assets/noodles.jpg";
import rezela from "../assets/rezela.png";
import pizza from "../assets/pizza.jpg";
import salad from "../assets/salad.jpg";
import samosa from "../assets/samosa.jpg";
import tomatosos from "../assets/tomatosos.png";
import soup from "../assets/soup.jpg";
import tacos from "../assets/tacos.jpg";

export default new Vuex.Store({
  state: {
    topRated: [
      {
        id: 1,
        name: "Cake",
        price: 100,
        url: cake,
        desc: "Very Tasty Cake",
        rate: 4.1,
      },
      {
        id: 2,
        name: "Noddles",
        price: 200,
        url: noodles,
        desc: "Very Tasty Cake",
        rate: 4.1,
      },

      {
        id: 3,
        name: "Chicken",
        price: 375,
        url: rezela,
        desc: "Crispy",
        rate: 4.1,
      },
    ],
    allCategories: [
      {
        id: 4,
        name: "Pizza",
        price: 400,
        url: pizza,
        desc: "Very Tasty",
        rate: 4.1,
      },
      {
        id: 5,
        name: "Sald",
        price: 275,
        url: salad,
        desc: "Very Tasty",
        rate: 4.3,
      },
      {
        id: 6,
        name: "Tomatosos",
        price: 200,
        url: tomatosos,
        desc: "Very Tasty",
        rate: 4.2,
      },
    ],
    disesNearYou: [
      {
        id: 7,
        name: "Samosa",
        price: 50,
        url: samosa,
        desc: "Very Tasty ",
        rate: 4.1,
      },
      {
        id: 8,
        name: "Soup",
        price: 70,
        url: soup,
        desc: "Very Tasty ",
        rate: 4.1,
      },
      {
        id: 9,
        name: "Marconi",
        price: 75,
        url: marcroni,
        desc: "Crispy",
        rate: 4.2,
      },
      {
        id: 10,
        name: "Tacos",
        price: 50,
        url: tacos,
        desc: "Crispy",
        rate: 4.0,
      },
    ],
    carts: [],
  },
  getters: {
    carts(state) {
      return state.carts;
    },
    cartItemCount(state) {
      return state.carts.length;
    },
    total: (state) => {
      return state.carts.reduce(
        (acc, val) => acc + val.quantity * val.price,
        0
      );
    },
  },
  mutations: {
    ADD_CART(state, { cartId, quantity, imge, name, cartsPrice }) {
      const record = state.carts.find((item) => item.id == cartId);
      if (record) {
        record.quantity += quantity;
      } else {
        state.carts.push({
          id: cartId,
          name: name,
          quantity: quantity,
          url: imge,
          price: cartsPrice,
        });
      }
    },
    REMOVE_ITEMS(state, { cartId, quantity }) {
      const record = state.carts.find((item) => item.id == cartId);
      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.carts.splice(state.carts.indexOf(record), 1);
      }
    },
    ADD_ITEM(state, { quantity, cartId }) {
      const record = state.carts.find((el) => el.id == cartId);
      record.quantity += quantity;
    },
  },
  actions: {
    addCarts({ commit }, order) {
      commit("ADD_CART", order);
    },
    addItems({ commit }, order) {
      commit("ADD_ITEM", order);
    },

    removeItems({ commit }, order) {
      commit("REMOVE_ITEMS", order);
    },
  },
});
