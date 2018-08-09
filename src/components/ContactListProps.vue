<template>
  <div id="app">
  <!--{{ contactList }}-->
   <router-link 
   class="list-group-item list-group-item"
   v-for="(contact, key) in contactList" :key="key" 
   :to="{name:'contact-details',params: {id:contact.id}}"
   exact-active-class = "active">
   {{ contact.name }}<br>
   </router-link> 
  </div>
  </template>

<script>

export default {
  props : ['contactList']

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
