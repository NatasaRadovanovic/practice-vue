<template>
  <div id="app">
  <h1>Contacts</h1>
  <ContactListProps :contactList="contacts"/>
  <ContactDetails :contact="contact" />


  </div>
</template>

<script>
import ContactListProps from '../components/ContactListProps.vue'
import ContactDetails from '../components/ContactDetails.vue'

export default {
    components:{
        ContactListProps,
        ContactDetails
    },
  name: 'Contacts',
  data(){
      return{
          contacts: [
         { id: 1, name: 'John Doe', email: 'johndoe@example.com', number: '555-12345' },
         { id: 2, name: 'Pera Peric', email: 'peraperic@example.com', number: '555-54321' },
         { id: 3, name: 'Nenad Vujicic', email: 'nenad.v@example.com', number: '555-67890' }
       ]
      }
     
  },
   computed: {
          contact(){
               let routeParam = this.$route.params.id;
               return this.contacts.find(contact => contact.id === routeParam);
            //   let routeParam = this.$route.params.id;
            //   let returnContact = {};
            //   this.contacts.forEach(contact => {
            //       if(contact.id == routeParam){
            //           console.log(contact);
            //          returnContact = contact;
            //       }
            //   });
            //   return returnContact;
            
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
