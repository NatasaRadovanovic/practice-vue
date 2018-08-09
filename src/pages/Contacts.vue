<template>
  <div id="app">
  <h1>Contacts</h1>
  <router-link to="add-contact">Go to add contact</router-link>
  </div>
</template>

<script>

export default {
  name: 'Contacts',
  data(){
      return{
          contacts: [
         { id: 1, name: 'John Doe', email: 'johndoe@example.com', number: '555-12345' },
         { id: 2, name: 'Pera Peric', email: 'peraperic@example.com', number: '555-54321' },
         { id: 3, name: 'Nenad Vujicic', email: 'nenad.v@example.com', number: '555-67890' }
       ]
      }
  }
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
