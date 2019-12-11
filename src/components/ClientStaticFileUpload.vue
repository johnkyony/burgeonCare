<template>
  <div>
    <input type="file" multiple accept="image/jpeg" @change="detectFiles($event.target.files)">
    <div class="progress-bar" :style="{width: progressUpload + '%'}">{{progressUpload}}%</div>
  </div>
</template>

<script>
import firebase from '../Firebase'
export default {
  data(){
    return {
      progressUpload: 0,
      file: File , 
      uploadTask: ''
    }
  },
  methods: {
    detectFiles(fileList){
      Array.from(Array(fileList.length).keys())
      .map( x=> {
        this.upload(fileList[x])
      })
    },
    upload(file){
      this.uploadTask = firebase.storage().ref('documents')
      .put(file)
    }
  },
  watch: {
    uploadTask: () => {
      this.uploadTask.on('state_changed' , sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      },
      null , 
      () => {
        this.uploadTask.snapshot.ref.getDownloadURL()
        .then(downloadURL => {
          this.$emit('url' , downloadURL)
        })
      })
    }
  }
  
}
</script>

<style>
.progress-bar {
  margin: 10px 0;
}
</style>