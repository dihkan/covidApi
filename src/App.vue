<template>
  <div class="container">
    <div class="navbar navbar-dark d-flex">
      <router-link to="/" class="link">Ana Sayfa </router-link>
      <router-link to="/covid" class="link">Covid List </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup></script>
<style scoped>
.link {
  font-size: 15px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  border: 1px solid #eee;
  padding: 10px;
  color: #333;
  text-decoration: none;
  box-shadow: 1px 1px 5px;
  margin: 5px;
}
</style>
