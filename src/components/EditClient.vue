<template>
  <b-row>
    <b-col cols="12">
     
      <b-jumbotron>
        <b-form @submit="onSubmit">
          Edit Client Details : <br>
          <hr>
          <b-form-group id="fieldsetHorizontal" horizontal :label-cols="4"
          breakpoint="md" label="Enter Client Number">
            <b-form-input id="clientNo" v-model.trim="client.clientNo"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Regirered Name">
            <b-form-input id="registeredName" v-model="client.registeredName"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Trading Name">
            <b-form-input id="registeredName" v-model="client.tradingName"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter company registration number">
            <b-form-input id="registeredName" v-model="client.companyRegistrationNumber"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Date Registered">
            <b-form-input id="dateRegistered" v-model="client.dateRegistered"></b-form-input>
          </b-form-group>
          <hr>
          Directors: <br>
          <hr>
          Director 1: <br>
          <hr>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director Full Name">
            <b-form-input id="member1FullName" v-model="client.member1FullName"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director Id Number">
            <b-form-input id="member1IdNo" v-model="client.member1IdNo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director ITR No">
            <b-form-input id="member1ItrNo" v-model="client.member1ItrNo"></b-form-input>
          </b-form-group>
           <br>
          <hr>
          Director 2: <br>
          <hr>
            <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director Full Name">
            <b-form-input id="member1FullName" v-model="client.member2FullName"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director Id Number">
            <b-form-input id="member1IdNo" v-model="client.member2IdNo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director ITR No">
            <b-form-input id="member1ItrNo" v-model="client.member2ItrNo"></b-form-input>
          </b-form-group>
           <br>
          <hr>
           Director 3: <br>
          <hr>
            <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director Full Name">
            <b-form-input id="member1FullName" v-model="client.member3FullName"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director Id Number">
            <b-form-input id="member1IdNo" v-model="client.member3IdNo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Director ITR No">
            <b-form-input id="member1ItrNo" v-model="client.member3ItrNo"></b-form-input>
          </b-form-group>
           <br>
          <hr>
          Sars Details: <br>
          <hr>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Income Tax No">
            <b-form-input id="IncomeTaxNo" v-model="client.IncomeTaxNo"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Paye No">
            <b-form-input id="payeNo" v-model="client.payeNo"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter Vat No">
            <b-form-input id="vatNo" v-model="client.vatNo"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter UIF Labour No">
            <b-form-input id="uifLabourNo" v-model="client.uifLabourNo"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label="Enter  COIDA No">
            <b-form-input id="coidaNo" v-model="client.coidaNo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Other ISO Registration No">
            <b-form-input id="otherIsoRegistration" v-model="client.otherIsoRegistration"></b-form-input>
          </b-form-group>
          <br>
          <hr>
          Banking Details <br>
          <hr> 
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Bank Name">
            <b-form-input id="bankName" v-model="client.bankName"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Account Type">
            <b-form-input id="accountType" v-model="client.accountType"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Account Holder Name">
            <b-form-input id="accountType" v-model="client.accountHolderName"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Account Number">
            <b-form-input id="accountNumber" v-model="client.accountNumber"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter  Branch Code">
            <b-form-input id="branchCode" v-model="client.branchCode"></b-form-input>
          </b-form-group>
          <br>
          <hr>
          Bussiness Contact Details: <br>
          <hr>
          Physical Address: <br> 
          <hr> 
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter   Street Address">
            <b-form-input id="streetAddress" v-model="client.streetAddress"></b-form-input>
          </b-form-group>

           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter city">
            <b-form-input id="city" v-model="client.city"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter State / Province / Region">
            <b-form-input id="stateProvinceRegion" v-model="client.stateProvinceRegion"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Zip / Postal Code">
            <b-form-input id="zipPostalCode" v-model="client.zipPostalCode"></b-form-input>
          </b-form-group>
           <br>
          <hr>
          Postal Address: <br>
          <hr>
           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter   Street Address">
            <b-form-input id="streetAddress" v-model="client.postalStreetAddress"></b-form-input>
          </b-form-group>

           <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter city">
            <b-form-input id="city" v-model="client.postalCity"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter State / Province / Region">
            <b-form-input id="stateProvinceRegion" v-model="client.postalStateProvinceRegion"></b-form-input>
          </b-form-group>

          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Zip / Postal Code">
            <b-form-input id="zipPostalCode" v-model="client.postalZipPostalCode"></b-form-input>
          </b-form-group>
           <br>
          <hr>
          Contact Details: <br>
          <hr>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Contact Name">
            <b-form-input id="contactName" v-model="client.contactName"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter Office No">
            <b-form-input id="telephoneNo" v-model="client.telephoneNo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter  Cellphone No">
            <b-form-input id="CellphoneNo" v-model="client.cellPhoneNo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter   Fax No ">
            <b-form-input id="faxNo" v-model="client.faxNo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal" horizontal
          :label-cols = "4" breakpoint="md" label=" Enter  Email address ">
            <b-form-input id="emailAddress" v-model="client.emailAddress"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Update</b-button>
           <b-btn variant="danger" @click.stop="backToClient()">Back</b-btn>
        </b-form>
      </b-jumbotron>
     
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name: 'editClient',
  data(){
    return {
      key: this.$route.params.id, 
      client: {} ,
      ref: firebase.firestore().collection('ClientList')
    }
  },
  created(){
    this.ref.doc(this.$route.params.id)
    .get()
    .then((doc) => {
      if(doc.exists){
        this.client = doc.data()
      } else {
        alert("No such Document")
      }
    })

    // const ref = firebase.firestore().collection('ClientList')
    // .doc(this.$route.params.id)

    // ref.get().then((doc) => {
    //   updateRef.set(this.client).then((docRef) => {
     

   
    //   })
    // })
    // .catch((error) => 
    // {
    //   alert("Error adding document: " , error)
    // })
  },
  methods: {
    onSubmit(event){
      event.preventDefault()
      const updateRef = this.ref.doc(this.$route.params.id)
      updateRef.set(this.client) 
      .then((docRef) => {
        this.client.clientNo = ''
        this.client.registeredName = ''
        this.client.tradingName = ''
        this.client.companyRegistrationNumber = ''
        this.client.dateRegistered = ''
        this.client.member1FullName = ''
        this.client.member1IdNo = ''
        this.client.member1ItrNo = ''
        this.client.member2FullName = ''
        this.client.member2IdNo = ''
        this.client.member2ItrNo = ''
        this.client.member3FullName = ''
        this.client.member3IdNo = ''
        this.client.member3ItrNo = ''
        this.client.IncomeTaxNo = ''
        this.client.payeNo = ''
        this.client.vatNo = '' 
        this.client.uifLabourNo = ''
        this.client.coidaNo = ''
        this.client.otherIsoRegistration = ''
        this.client.bankName = ''
        this.client.accountType = ''
        this.client.accountHolderName = ''
        this.client.accountNumber = ''
        this.client.streetAddress = ''
        this.client.city = ''
        this.client.stateProvinceRegion = ''
        this.client.zipPostalCode = ''
        this.client.postalStreetAddress = ''
        this.client.postalCity = ''
        this.client.postalStateProvinceRegion = ''
        this.client.postalZipPostalCode = ''
        this.client.contactName = ''
        this.client.telephoneNo = ''
        this.client.cellPhoneNo = ''
        this.client.faxNo = ''
        this.client.emailAddress = ''

        router.push({name: 'ShowClientDetails' , params: {id: this.$route.params.id}})
      })
      .catch((error) =>{
        alert("Error adding document :" , error)
      })
    },
    backToClient(){
      router.push({name: 'ShowClientDetails' , params: {id: this.$route.params.id}})
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>