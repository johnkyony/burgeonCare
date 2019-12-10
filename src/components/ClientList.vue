<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Client List 
        <b-link href="/addClient">(Add Client)</b-link>
      </h2>
     <!-- <b-table striped hover :items="clientList" :fields="fields">
        <template slot="actions" slot-scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table> -->
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th v-for="field in fields" scope="col">
              {{field.label}}
            </th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clientList" >
            <th scope="row">{{client.clientNo}}</th>
            <td>{{client.registeredName}}</td>
            <td>{{client.tradingName}}</td>
            <td>{{client.companyRegistrationNumber}}</td>
            <td>{{client.dateRegistered}}</td>
            <td> <b-btn size="sm" @click.stop="details(client.key)">Details</b-btn></td>

          </tr>
        </tbody>

      </table>
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
        this.clientList.sort((a,b) => {
          return a.clientNo - b.clientNo
        })
      })
    })
  }, 
  methods: {
    details (key){
      router.push({ name: 'ShowClientDetails' , params: {id: key}})
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