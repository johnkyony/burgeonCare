<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Client List 
        <b-link href="/addClient">(Add Client)</b-link>
      </h2>
     <b-table striped hover :items="clientList" :fields="fields">
        <template slot="actions" slot-scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name: 'ClientList',
  data(){
    return{ 
      fields: [
        
         {
          label: 'Client #' , sortable: true , 'class': 'text-left'

        },
         {
          label: 'Registered Name' , sortable: true 
        },
         {
          label: 'Trading Name' , sortable: true 
        },
        {
          label: 'Company Registration #' , sortable: true
        },
         {
          label: 'Date Registered'  , sortable: true
        },
        { label: 'Action' , 'class' : 'text-center'},
        
      ],
     
      clientList: [],
      errors: [],
      ref: firebase.firestore().collection('ClientList'),
    }
  },
  created(){
    this.ref.onSnapshot((querySnapshot) => {
      this.clientList = []
      querySnapshot.forEach((doc) => {
        this.clientList.push({
          key: doc.id ,
          clientNo: doc.data().clientNo,
          registeredName: doc.data().registeredName,
          tradingName: doc.data().tradingName,
          companyRegistrationNumber: doc.data().companyRegistrationNumber,
          dateRegistered: doc.data().dateRegistered
          
        })
      })
    })
  }, 
  methods: {
    details (clientList){
      router.push({ name: 'ShowClientDetails' , params: {id: clientList.key}})
    }
  }
  
}
</script>
<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>