<template>
  <div class="flex">
    <div>
      <h1>Sweet Dish</h1>
    </div>
    <div class="right">
      <div>
        <a href="#">About Us</a>
      </div>
      <div>
        <a href="#">T & C</a>
      </div>
      <div>
        <a href="#">Privacy Policy</a>
      </div>
      <div>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.flex {
  margin-top: 1.3rem;
  height: 50px;
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  font-size: 1.2rem;
}
.flex h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.right {
  display: flex;
  align-items: center;
}
.right a {
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
}
.right a:hover {
  color: green;
}
</style>