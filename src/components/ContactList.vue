<template>
<div>
    <h2>Contact List</h2>
    
    <table>
        <thead>
        <th>Name</th>
         <th>Email</th>
        </thead>
        <tbody>
            <tr v-for="(contact, key) in contacts" :key="key">
                <td>{{ contact.name }}</td> 
                <td>{{ contact.email }}</td> 
            </tr>
        </tbody>
  </table>
  
  </div> 
</template>

<script>

export default {
  name: 'ContactList',
  data()
  {
      return { 
      contacts: [
          {name: "Natasa", email:"test@gmail.com"},
          {name: "Maja", email:"test1@gmail.com"},
          {name: "Marko", email:"test2@gmail.com"},
          {name: "Nikola", email:"test3@gmail.com"},
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
