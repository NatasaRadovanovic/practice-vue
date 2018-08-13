<template>
  <div class="container mt-4">
  <h1>Add Contact</h1>
  <router-link to="/">Go back</router-link>
  <h1>{{ $route.params.id }}</h1>
<div class="container mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group row">
        <label for="first_name" class="col-4 col-form-label">First Name</label>
        <div class="col-8">
          <div class="input-group">
            <input id="first_name" name="first_name" type="text" required="required" class="form-control here" v-model="contact.first_name">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="last_name" class="col-4 col-form-label">Last Name</label>
        <div class="col-8">
          <div class="input-group">
            <input id="last_name" name="last_name" type="text" required="required" class="form-control here" v-model="contact.last_name">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email</label>
        <div class="col-8">
          <input id="email" name="email" type="email" required="required" class="form-control here" v-model="contact.email">
        </div>
      </div>
      <div class="form-group row">
        <label for="number" class="col-4 col-form-label">Number</label>
        <div class="col-8">
          <div class="input-group">
            <input id="number" name="number" type="tel" required="required" class="form-control here" v-model="contact.number">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
  
  </div>
</template>

<script>

import { contacts } from '../services/Contacts.js'

export default {
  name: 'AddContact', 

  data(){
    return{
      contact:{
        first_name:'',
        last_name:'',
        email:'',
        number:''
      }
    }
  },
  methods:{
    onSubmit(){
      contacts.add(this.contact)
      .then(response => {
        this.$router.push('/contacts')//redirektovanje
        console.log(this.$router);
      })
      .catch(err => console.log(err))
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
