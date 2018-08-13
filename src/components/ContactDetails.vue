<template>
  <div id="app">
  <!-- {{contact}} -->
  <table class="table">
  <thead>
    <tr>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ contact.first_name }}</td>
       <td>{{ contact.last_name }}</td>
      <td>{{ contact.email }}</td>
      <td>{{ contact.number }}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>

export default {
  name: 'Contactdetails',
  props:['contact']

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
