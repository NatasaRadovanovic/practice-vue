<template>
  <div id="app">
  <h1>Add Contact</h1>
  <router-link to="/">Go back</router-link>
  <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Add contact',
  components: {
    HelloWorld,
    
  },

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
