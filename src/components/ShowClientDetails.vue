<template>
<div>
     <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="convertedArray"
      
      @hide="handleHide"
    ></vue-easy-lightbox>
  <div>
    <div class="container emp-profile">
        <b-alert :show='showAlert' dismissible @input="handleAlertDismiss">You have no Client file uploaded</b-alert>
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                         {{client.registeredName}}
                                    </h5>
                                    <h6>
                                     {{client.clientNo}} <br>
                                       
                                        {{client.companyRegistrationNumber}} <br>
                                        {{client.dateRegistered}} <br>
                                                                    </h6>
                                    <!-- <p class="proile-rating">RANKINGS : <span>8/10</span></p> -->
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Company Details</a>
                                </li>
                                <!-- <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Notes</a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                   
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>Client Details</p>
                           <p> Client No : {{client.clientNo}} <br>
                            Registered Name:  {{client.registeredName}} <br>
                            Trading Name: {{client.tradingName}} <br>
                            Company Registration Number: {{client.companyRegistrationNumber}} <br>
                            Date Registered: {{client.dateRegistered}} <br></p>
                            <p>Contact Details: <br>
                                
                                Contact Name: {{client.fullData.contactName}} <br>
                                Office No : {{client.fullData.telephoneNo}} <br>
                                Cellphone No: {{client.fullData.cellPhoneNo}} <br>
                                Fax No : {{client.fullData.faxNo}} <br>
                                Email address : {{client.fullData.emailAddress}}</p>

                            <p> Actions</p>
                            <a @click.stop="editClient(client.key)">Edit Client</a><br>
                            
                            <a @click.stop="deleteClient(client.key)"> Delete Client</a>
                            <br>
                            <a @click.stop="fileUpload(client.key)">Client File Upload</a>
                            <br>
                            <a @click.stop="ViewFiles">View Client Files</a>
                             
                            <!-- <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/> -->
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label> Directors:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>
                                                    Member 1: <br>
                                                    Full Name: {{client.fullData.member1FullName}}<br>
                                                    Id No: {{client.fullData.member1IdNo}} <br>
                                                    ITR No: {{client.fullData.member1ItrNo}} <br>

                                                </p>
                                                <hr>
                                                <p>
                                                     Member 2: <br>
          
                                                    Full Name: {{client.fullData.member2FullName}} <br>
                                                    Id No: {{client.fullData.member2IdNo}} <br>
                                                    ITR No: {{client.fullData.member2ItrNo}} <br>
                                                    
                                                </p>
                                                <hr>
                                                <p>
                                                    Member 3: <br>
                                                        
                                                        Full Name: {{client.fullData.member3FullName}} <br>
                                                        Id No : {{client.fullData.member3IdNo}} <br>
                                                        ITR No : {{client.fullData.member3ItrNo}} <br>
                                                        

                                                </p>
                                                
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Sars Details</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Income Tax No : {{client.fullData.IncomeTaxNo}} <br>
                                                    Paye No : {{client.fullData.payeNo}} <br>
                                                    Vat No : {{client.fullData.vatNo}} <br>
                                                    UIF Labour No : {{client.fullData.uifLabourNo}} <br>
                                                    COIDA No : {{client.fullData.coidaNo}} <br>
                                                    Other ISO Registration No : {{client.fullData.otherIsoRegistration}} <br></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Banking Details</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Bank Name: {{client.fullData.bankName}} <br>
                                                    Account Type: {{client.fullData.accountType}} <br>
                                                    Account Holder Name: {{client.fullData.accountHolderName}} <br>
                                                    Account Number : {{client.fullData.accountNumber}} <br>
                                                    Branch Code : {{client.fullData.branchCode}} <br></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Bussiness Contact Details</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Physical Address: <br> 
                                                
                                                Street Address: {{client.fullData.streetAddress}} <br>
                                                city : {{client.fullData.city}} <br>
                                                State / Province / Region: {{client.fullData.stateProvinceRegion}} <br>
                                                Zip / Postal Code: {{client.fullData.zipPostalCode}} <br>
                                                
                                                Postal Address: <br>
                                                
                                                Street Address: {{client.fullData.postalStreetAddress}} <br>
                                                city : {{client.fullData.postalCity}} <br>
                                                State / Province / Region: {{client.fullData.postalStateProvinceRegion}} <br>
                                                Zip / Postal Code: {{client.fullData.postalZipPostalCode}} <br>
                                                </p>
                                            </div>
                                        </div>
                                        <!-- <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div> -->
                            </div>
                            <!-- <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </form>           
        </div>
  </div>
</div>
  <!-- <b-row>
   
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
  </b-row> -->
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
  /* .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  } */
  body{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}
 
.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
.actionButtons {
     display: inline-block;
    vertical-align: top;
}
</style>


