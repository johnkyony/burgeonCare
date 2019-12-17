<template>
  <b-row>
    <b-col cols="12">
     

      <b-jumbotron>
     
        <template slot="header">
          {{client.registeredName}}
        </template>
        <template slot="lead">
          
          Client#: {{client.clientNo}} <br>
          registered Name:  {{client.registeredName}} <br>
          trading Name: {{client.tradingName}} <br>
          company Registration Number: {{client.companyRegistrationNumber}} <br>
          date Registered: {{client.dateRegistered}} <br>
          <hr>
          Directors: <br>
          <hr>
          Member 1: <br>
          <hr>
          Full Name: {{client.member1FullName}} <br>
          Id No: {{client.member1IdNo}} <br>
          ITR No: {{client.member1ItrNo}} <br>
          <hr>
          Member 2: <br>
          <hr>
          Full Name: {{client.member2FullName}} <br>
          Id No: {{client.member2IdNo}} <br>
          ITR No: {{client.member2ItrNo}} <br>
          <hr>
          Member 3: <br>
          <hr>
          Full Name: {{client.member3FullName}} <br>
          Id No : {{client.member3IdNo}} <br>
          ITR No : {{client.member3ItrNo}} <br>
          <hr>
          Sars Details: <br>
          <hr>
          Income Tax No : {{client.IncomeTaxNo}} <br>
          Paye No : {{client.payeNo}} <br>
          Vat No : {{client.vatNo}} <br>
          UIF Labour No : {{client.uifLabourNo}} <br>
          COIDA No : {{client.coidaNo}} <br>
          Other ISO Registration No : {{client.otherIsoRegistration}} <br>
          <hr>
          Banking Details <br>
          <hr> 
          Bank Name: {{client.bankName}} <br>
          Account Type: {{client.accountType}} <br>
          Account Holder Name: {{client.accountHolderName}} <br>
          Account Number : {{client.accountNumber}} <br>
          Branch Code : {{client.branchCode}} <br>
          <hr>
          Bussiness Contact Details: <br>
          <hr>
          Physical Address: <br> 
          <hr> 
          Street Address: {{client.streetAddress}} <br>
          city : {{client.city}} <br>
          State / Province / Region: {{client.stateProvinceRegion}} <br>
          Zip / Postal Code: {{client.zipPostalCode}} <br>
          <hr>
          Postal Address: <br>
          <hr>
          Street Address: {{client.postalStreetAddress}} <br>
          city : {{client.postalCity}} <br>
          State / Province / Region: {{client.postalStateProvinceRegion}} <br>
          Zip / Postal Code: {{client.postalZipPostalCode}} <br>
          <hr>
          Contact Details: <br>
          <hr>
          Contact Name: {{client.contactName}} <br>
          Office No : {{client.telephoneNo}} <br>
          Cellphone No: {{client.cellPhoneNo}} <br>
          Fax No : {{client.faxNo}} <br>
          Email address : {{client.emailAddress}}
        </template>
        <hr class="my-4">
        <b-btn  variant="success" @click.stop="editClient(key)">Edit Client</b-btn>
        <b-btn variant="danger" @click.stop="deleteClient(key)">Delete Client</b-btn>
        <b-btn variant="primary" @click.stop="fileUpload(key)">Client File Upload</b-btn>
         <b-btn  @click.stop="ViewFiles(key)">View Client Files</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name: 'ShowClientDetails',
  data(){
    return{
      key: '', 
      client: {}
    }
  },
  created() {
    const ref = firebase.firestore().collection('ClientList')
    .doc(this.$route.params.id)
    ref.get()
    .then((doc) => {
      if(doc.exists){
        this.key = doc.id
        this.client = doc.data()
      } else {
        alert("No such document !")
      }
    })
  },
  methods: {
    editClient(id){
      router.push({
        name: 'editClient',
        params: {id : id}
      })
    },
    deleteClient(id){
      alert('You about to delete this client')
      firebase.firestore().collection('ClientList')
      .doc(id).delete()
      .then(() => {
        router.push({
          name: 'ClientList'
        })
      })
      .catch((error) => {
        alert("Error removing document: " , error)
      })
    },
    fileUpload(id){
      router.push({
        name: 'ClientStaticFileUpload', 
        params: {id: id}
      })

    }, 
    ViewFiles(id){
      router.push({
        name: 'ViewClientStaticFile',
        params: {id: id}
      })
    }
  }
  
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>


