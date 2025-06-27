<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  padding: 1rem;
  background: #f5f5f5;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
</style>
