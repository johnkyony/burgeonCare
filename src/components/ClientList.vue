<template>
  <div class="container emp-profile">
    <b-row>
    <b-col cols="12">
        <vue-bootstrap4-table :rows="clientList" :columns="columns" :config="config" @on-select-row="details" >
        </vue-bootstrap4-table>
      <!-- <table class="table">
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

      </table> -->
    </b-col>
  </b-row>
    
  </div>
  
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
import VueBootstrap4Table from 'vue-bootstrap4-table'
export default {
  name: 'ClientList',
  data(){
    return{ 
      columns: [
        {
          label: "Client #" , 
          name: "clientNo" , 
          filter: {
            type: "simple" ,
            placeholder: "Enter Client No"
          },
          sort: true,
          uniqueId: true
        }, 
        {
          label: "Registered Name", 
          name: "registeredName",
          filter: {
            type: "simple", 
            placeholder: "Enter Registered Name", 

          }, 
          sort: true
        }, 
        {
          label: "Trading Name",
          name: "tradingName",
          filter: {
            type: "simple", 
            placeholder: "Enter Trading Name"
          },
          sort: true
        }, 
        {
          label: "Company Registration #",
          name: "companyRegistrationNumber",
          filter: {
            type: "simple", 
            placeholder: "Enter Company Registration Number"
          } , 
          sort: true 
        }, 
        {
          label: "Date Registered", 
          name: "dateRegistered", 
          
        }

      ] ,
      config: {
        // checkbox_rows: true, 
        rows_selectable: true, 
        card_title: "Burgeon Care Client List",
        per_page: 20,
        

      },

      
      // fields: [
        
      //    {
      //     label: 'Client #' , name: "Client" , sortable: true , 'class': 'text-left' , 
      //       filter: {
      //         type: "simple",
      //         placeholder: "Client No"
      //       }
      //     }

      // ,
      //    {
      //     label: 'Registered Name' , name: "registered Name" , sortable: true , filter: {
      //       type: "simple",
      //       placeholder: "Enter Registered Name"

      //     }
      //   },
      //    {
      //     label: 'Trading Name' , sortable: true , filter: {
      //       type: "simple",
      //       placeholder: "Enter Trading Name"
      //     }
      //   },
      //   {
      //     label: 'Company Registration #' , sortable: true
      //   },
      //    {
      //     label: 'Date Registered'  , sortable: true
      //   },
      //   { label: 'Action' , 'class' : 'text-center'},
        
      // ],
      // config: {
      //   checkbox_rows: true,
      //   rows_selectable: true , 
      //   card_title: "Vue Bootstrap 4 advanced table"
      // },
     
      // clientList: [],
      
    }
  },
  components: {
    VueBootstrap4Table
  },
  computed:{
   clientList(){
     return this.$store.state.clientList.sort((a,b) => {
          return a.clientNo - b.clientNo
        })
   }
  },
  created(){
    
    
    // this.ref.onSnapshot((querySnapshot) => {
    //   this.clientList = []
    //   querySnapshot.forEach((doc) => {
    //     this.clientList.push({
    //       key: doc.id ,
    //       clientNo: doc.data().clientNo,
    //       registeredName: doc.data().registeredName,
    //       tradingName: doc.data().tradingName,
    //       companyRegistrationNumber: doc.data().companyRegistrationNumber,
    //       dateRegistered: doc.data().dateRegistered
          
    //     })
    //     this.clientList.sort((a,b) => {
    //       return a.clientNo - b.clientNo
    //     })
        
    //   })
    // })
  }, 
  methods: {
    details(payload){
     
        console.log(payload)
        router.push({ name: 'ShowClientDetails' , params: {id: payload.selected_item.key}})
      
      
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