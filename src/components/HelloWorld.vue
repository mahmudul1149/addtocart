<template>
  <div class="box">
    <ul>
      <li v-for="todo in allTodos" :key="todo.id">
        {{ todo.name }}
        <img :src="todo.url" alt="" />
      </li>
    </ul>
    <h1>Count: {{ count }}</h1>
    <button class="btn btn-primary" @click="increment">Add</button>
  </div>
</template>

<script>
export default {
  computed: {
    allTodos() {
      return this.$store.state.topRated;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increments");
    },
  },
};
</script>

<style scoped>
.box {
  background: green;
  color: white;
  width: 320px;
  height: 100%;
  padding: 1rem;
}

li {
  font-size: 1.3rem;
}
.btn {
  padding: 0.4rem 1.5rem;
  cursor: pointer;
  border: none;
  outline: none;
}
.btn-primary {
  color: white;
  background: #220cec;
}
</style>