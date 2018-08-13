import axios from 'axios'

export default class Contacts{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll(){
        return axios.get('contacts'); //da dovucemo
    }

    get(id){
        return axios.get(`contacts/${id}`); //samo jedan odredjeni kontakt
    }

    edit(contact){
        return axios.put(`contacts/${contact.id}`,contact); //contact.id jer imamo ceo objekat
    }
    
    add(contact){
        return axios.post('contacts', contact); //za add kontakt da ga posaljemo
    }

    delete(id){
        return axios.delete(`contacts/${id}`)
    }

}

export const contacts = new Contacts();