<template>
<div>
  <br>
<div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card">
      <div v-if="imageData!=null">
           <img :src="idPicture" class="card-img-top" alt="#">
      </div>
     
      <div class="card-body">
        <h5 class="card-title">Upload Client Id</h5>
        <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile02" @change="previewImage" accept="image/*">
            <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
          </div>
          <div class="input-group-append">
            <span class="input-group-text" id="inputGroupFileAddon02"  @click="onUpload('id')">Upload</span>
          </div>
        </div>
        <b-progress :value="idUploadValue" :max="max" show-progress animated></b-progress>
        
       
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <div v-if="imageData!=null">
           <img :src="cpicPicture" class="card-img-top" alt="#">
      </div>
     
      <div class="card-body">
        <h5 class="card-title">Upload Client CPIC Documents</h5>
        <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile02" @change="previewImage" accept="image/*">
            <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
          </div>
          <div class="input-group-append">
            <span class="input-group-text" id="inputGroupFileAddon02" @click="onUpload('cpic')">Upload</span>
          </div>
        </div>
        <b-progress :value="cpicUploadValue" :max="max" show-progress animated></b-progress>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <div v-if="imageData!=null">
           <img :src="financialStatementPicture" class="card-img-top" alt="#">
      </div>
     
      
      <div class="card-body">
        <h5 class="card-title">Upload Client Financial Statements</h5>
        <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> -->
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile02" @change="previewImage" accept="image/*">
            <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
          </div>
          <div class="input-group-append">
            <span class="input-group-text" id="inputGroupFileAddon02" @click="onUpload('financial')">Upload</span>
          </div>
        </div>
        <b-progress :value="financialStatementUploadValue" :max="max" show-progress animated></b-progress>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <b-btn variant="danger" @click.stop="backToClient">Back To Client</b-btn>
  </div>
  
  <!-- <div class="col mb-4">
    <div class="card">
      <img src="#" class="card-img-top" alt="#">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> -->
</div>
</div>


  <!-- <div>
    
    <div >
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
      <button @click="onUpload">Upload</button>
    </div>
  </div> -->
</template>
<script>
import firebase from '../Firebase';
import router from '../router'

export default {
  name: 'Upload',
  data(){
	return{

      ref: firebase.firestore().collection('ClientStaticFiles'),
      databaseFileCopy: {
        clientId: this.$route.params.id , 
        fileCategory: null, 
        imageName: null,
        imageUrl: null
      },
      imageData: null,
      idPicture: null,
      cpicPicture: null , 
      financialStatementPicture: null , 
      idUploadValue: 0, 
      cpicUploadValue: 0,
      financialStatementUploadValue: 0
	}
  },
  methods:{
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(categoryType){
      this.idPicture=null;
      this.cpicPicture= null 
      this.financialStatementPicture = null 
      this.databaseFileCopy.imageName = this.imageData.name
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        if(categoryType === 'id'){
           this.idUploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        } else if (categoryType === 'cpic'){
           this.cpicUploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        } else {
          this.financialStatementUploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

        }
       
      }, error=>{console.log(error.message)},
      ()=>{
        if(categoryType === 'id'){
           this.idUploadValue = 100;
        } else if (categoryType === 'cpic'){
           this.cpicUploadValue = 100;
        } else {
          this.financialStatementUploadValue = 100;
        }
        
        // this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          // this.picture =url;
          this.databaseFileCopy.fileCategory = categoryType
          if(categoryType === 'id'){
            this.idPicture= url
            this.idUploadValue = 0;
            
            this.databaseFileCopy.imageUrl = this.idPicture
        } else if (categoryType === 'cpic'){
            this.cpicPicture= url;
           this.databaseFileCopy.imageUrl =  this.cpicPicture;
           this.cpicUploadValue = 0;
        } else {
          this.financialStatementPicture = url;
          this.databaseFileCopy.imageUrl = this.financialStatementPicture 
          this.financialStatementUploadValue = 0;
        }
         this.ref.add(this.databaseFileCopy)
        console.log(this.databaseFileCopy)
        });
       
        // .then((docRef) => {
        //   this.databaseFileCopy.imageUrl = null
        //   this.databaseFileCopy.fileCategory = null

        // })
      }
      );
    },
    
    backToClient(){
      router.push({name: 'ShowClientDetails' , params: {id: this.$route.params.id}})
    }

  }
}
</script>

