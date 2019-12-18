<template>
  <b-row>
   
    <b-col cols="12">
     
      <b-jumbotron>
       
      <b-alert :show='showAlert' dismissible @input="handleAlertDismiss">You have no Client file uploaded</b-alert>
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
          Full Name: {{client.fullData.member1FullName}} <br>
          Id No: {{client.fullData.member1IdNo}} <br>
          ITR No: {{client.fullData.member1ItrNo}} <br>
          <hr>
          Member 2: <br>
          <hr>
          Full Name: {{client.fullData.member2FullName}} <br>
          Id No: {{client.fullData.member2IdNo}} <br>
          ITR No: {{client.fullData.member2ItrNo}} <br>
          <hr>
          Member 3: <br>
          <hr>
          Full Name: {{client.fullData.member3FullName}} <br>
          Id No : {{client.fullData.member3IdNo}} <br>
          ITR No : {{client.fullData.member3ItrNo}} <br>
          <hr>
          Sars Details: <br>
          <hr>
          Income Tax No : {{client.fullData.IncomeTaxNo}} <br>
          Paye No : {{client.fullData.payeNo}} <br>
          Vat No : {{client.fullData.vatNo}} <br>
          UIF Labour No : {{client.fullData.uifLabourNo}} <br>
          COIDA No : {{client.fullData.coidaNo}} <br>
          Other ISO Registration No : {{client.fullData.otherIsoRegistration}} <br>
          <hr>
          Banking Details <br>
          <hr> 
          Bank Name: {{client.fullData.bankName}} <br>
          Account Type: {{client.fullData.accountType}} <br>
          Account Holder Name: {{client.fullData.accountHolderName}} <br>
          Account Number : {{client.fullData.accountNumber}} <br>
          Branch Code : {{client.fullData.branchCode}} <br>
          <hr>
          Bussiness Contact Details: <br>
          <hr>
          Physical Address: <br> 
          <hr> 
          Street Address: {{client.fullData.streetAddress}} <br>
          city : {{client.fullData.city}} <br>
          State / Province / Region: {{client.fullData.stateProvinceRegion}} <br>
          Zip / Postal Code: {{client.fullData.zipPostalCode}} <br>
          <hr>
          Postal Address: <br>
          <hr>
          Street Address: {{client.fullData.postalStreetAddress}} <br>
          city : {{client.fullData.postalCity}} <br>
          State / Province / Region: {{client.fullData.postalStateProvinceRegion}} <br>
          Zip / Postal Code: {{client.fullData.postalZipPostalCode}} <br>
          <hr>
          Contact Details: <br>
          <hr>
          Contact Name: {{client.fullData.contactName}} <br>
          Office No : {{client.fullData.telephoneNo}} <br>
          Cellphone No: {{client.fullData.cellPhoneNo}} <br>
          Fax No : {{client.fullData.faxNo}} <br>
          Email address : {{client.fullData.emailAddress}}
        </template>
        <hr class="my-4">
        <b-btn  variant="success" @click.stop="editClient(client.key)">Edit Client</b-btn>
        <b-btn variant="danger" @click.stop="deleteClient(client.key)">Delete Client</b-btn>
        <b-btn variant="primary" @click.stop="fileUpload(client.key)">Client File Upload</b-btn>
         <b-btn  @click.stop="ViewFiles">View Client Files</b-btn>
      </b-jumbotron>
          <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="convertedArray"
      
      @hide="handleHide"
    ></vue-easy-lightbox>
   
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  name: 'ShowClientDetails',
  data(){
    return{

      visible: false,
      showAlert: false
    }
  },
  
 async created() {
    // const ref =  firebase.firestore().collection('ClientList')
    // .doc(this.$route.params.id)
    // ref.get()
    // .then((doc) => {
    //   if(doc.exists){
    //     this.key = doc.id
    //     this.client = doc.data()
    //     this.$store.dispatch('fetchClientStaticFiles',)
    //   } else {
    //     alert("No such document !")
    //   }
    // })
   
    // const files = await firebase.firestore().collection('ClientStaticFiles')
    // .get()
    // .then(querySnapshot => {
    //   this.clientStaticFiles.push({
    //     key: doc.id , 
    //     clientId: doc.data().clientId,
    //     fileCategory: doc.data().fileCategory,
    //     imageName: doc.data().imageName, 
    //     imageUrl: doc.data().imageUrl
    //   })
     
    // })
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
    ViewFiles(){
      // router.push({
      //   name: 'ViewClientStaticFile',
      //   params: {id: id}
      // })
      if(this.filteredArray.length != 0){
        this.visible = true
      }else {
        console.log('empty')
        
         this.showAlert = true

      }
      

    },
    handleHide(){
      this.visible = false 
    },
    handleAlertDismiss(payload){
      this.showAlert = false
    }

  },
  computed: {
    filteredArray(){
      return this.$store.state.clientStaticFiles.filter(file => file.clientId === this.$route.params.id)
    },
    convertedArray(){
      // const imgUrl = []
      // this.filteredArray.forEach((imgs) => {
      //   imgUrl.push(imgs.imageUrl)
      // })
      const imgUrl = this.filteredArray 
      return imgUrl.map((val , i , imgUrl) => {
        return val.imageUrl
      })
    }, 
    client(){
     return this.$store.state.clientList.find(obj => obj.key === this.$route.params.id)
    }

  },
  components: {
    VueEasyLightbox
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


