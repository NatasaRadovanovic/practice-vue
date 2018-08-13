<template>
  <div id="app">
    <h1>Contacts</h1>
    <ContactListProps :contactList="contacts"/>
    <ContactDetails v-if="contact && contact.id" :contact="contact" 
    @contactDeleted = "onContactDelete"/>
  </div>
</template>

<script>
import ContactListProps from '../components/ContactListProps.vue'
import ContactDetails from '../components/ContactDetails.vue'
import { contacts } from './../services/Contacts.js'

export default {
    components:{
        ContactListProps,
        ContactDetails
    },
  name: 'Contacts',
  data(){
      return{
          contacts: []
      }
    },
    beforeRouteEnter (to, from, next) { //pre nego sto se kreira sama instanca this. nije dostupno
    //a created je reload tad se okida
      contacts.getAll()
      .then(response =>{
       next(vm => {
         vm.contacts = response.data
       }) //vm je kao this
      })
      .catch(err => console.log(err))
    },
   computed: {
          contact(){
               let routeParam = this.$route.params.id;
               //console.log(routeParam);
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
      },

      methods:{
        onContactDelete(contact){
          let contactIndex = this.contacts.findIndex(c => c.id === contact.id)
          this.contacts.splice(contactIndex, 1)
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
