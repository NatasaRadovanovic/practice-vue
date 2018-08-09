<template>
  <div id="app">
 <nav class="navbar navbar-dark bg-dark">
   <router-link to="/contacts">Contacts</router-link>
   <router-link to="add-contact">Add contact</router-link>
 </nav>
  </div>
</template>

<script>

export default {
  name: 'Add contact',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
