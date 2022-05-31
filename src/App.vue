<template>
  <div id="app" class="container">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from "./components/HeaderView.vue";
import Footer from "./views/FooterView.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>