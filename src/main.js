import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import AddContact from './pages/AddContact.vue';
import Contacts from './pages/Contacts.vue';
import MyPlugin from './plugins'; //ne ide / kad je index.js ,prepoznaje

Vue.use(VueRouter);
Vue.use(MyPlugin);

Vue.config.productionTip = false

/*Vue.directive('focus', {
   inserted:function(el, binding, vnode, oldVnode){
     el.focus();
      console.log(el, binding, vnode, oldVnode);
   } //element u domu, binding objekat sa puno parametra
   //vnode i oldVnode su virtuelni dom-ovi
   
})*/



const routes = [
  {path: '/', redirect: "contacts"},
  {path: '/contacts', component: Contacts},
  {path: '/contacts/:id', component: Contacts, name: "contact-details"},
  {path: '/add-contact', component: AddContact, name: "add-contact"},
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
