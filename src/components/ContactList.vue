<template>
<div>
    <h3>{{ title }}</h3>
    <h3>{{ title.split(' ').reverse().join()}}</h3>
    <h3>{{ reverseTitle() }}</h3>
    <h2>Contact List</h2>
    <form @submit.prevent>
        <label>Name</label>
        <input v-model="newContact.name" type="text" placeholder="name"><br><br> 
        <label>Email</label>
        <input v-model="newContact.email" type="text" placeholder="email"><br><br>
        <button @click="addContact" type="submit">Add Contact</button><br><br>
    </form>

  <table id="customers">
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>
  <tr v-for="(contact, key) in contacts" :key="key"><!--onda umesto ""
             :key="key"> ide :key="contact.id"> i brise se ovo key u zagradi tj
             <tr v-for="contact in contacts" :key="contact.id">-->
   <td v-if="contact.name == 'Natasa' "> Hello Natasa</td> 
   <td v-else > {{ contact.name }}</td> 
 <td>{{ contact.email }}</td> 
 <span>
    <button class="btn btn-danger" @click ="deleteContact(contact)">Delete</button>
 </span> 
  </tr>
</table>
  <button @click = "callParentMethod">Method from parent</button>
  </div> 
</template>

<script>

export default {
  props:['title'],
  name: 'ContactList',
  data()
  {
      return { 
      contacts: [
          {name: "Natasa", email:"test@gmail.com"}, //ako se doda npr id:1 itd onda gore key..
          {name: "Maja", email:"test1@gmail.com"},
          {name: "Marko", email:"test2@gmail.com"},
          {name: "Nikola", email:"test3@gmail.com"},
      ],

      newContact:{ // moze ovako a moze i samo prazan objekat kao i dole
          name: '',
          email: ''
      }
    }
  },
  methods: {
      callParentMethod(){
          this.$emit('parentMtd','Natasa'); //ako hocemo parametar, to je ovo posle zareza tj Natasa
      },
      addContact(){
          this.contacts.push(this.newContact); // pusujemo u listu contacts objekat newContact
          this.newContact = {};//za resetovanje
      },

      deleteContact(contact)
      {
          let indexOfContactToDelete = this.contacts.indexOf(contact);
          //indexOf taj kontakt
          this.contacts.splice(indexOfContactToDelete, 1);
      },
      reverseTitle(){
          return this.title.split(' ').reverse().join();
      }
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

#customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}

</style>
