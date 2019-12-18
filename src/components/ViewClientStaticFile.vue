<template>
<div>
  <vue-easy-lightbox escDisabled moveDisabled :visible="true" :imgs="convertedArray" :index="index">

  </vue-easy-lightbox>
</div>
</template>


<script>

import firebase from '../Firebase'
import router from '../router'
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  data(){
    return {
      items: [],
      imgs: [],
      ref: firebase.firestore().collection('ClientStaticFiles'),
    }
  },
  async created() {
   
     await firebase.firestore().collection('ClientStaticFiles')
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          this.items.push({
            key: doc.id,
            clientId: doc.data().clientId,
            fileCategory: doc.data().fileCategory, 
            imageName: doc.data().imageName,
            imageUrl: doc.data().imageUrl
          })
        })
      })
      console.log(this.$route.params.id)
      return this.items
    
  },
  computed: {
    filteredArray (){
      return this.items.filter(item => item.clientId === this.$route.params.id)
    },
    convertedArray(){
    const imgUrl = []
    this.filteredArray.forEach((imgs) =>{
      imgUrl.push(imgs.imageUrl)
      })
      return imgUrl
    }
    
  },
  methods: {
    lightbox(id){
      router.push({
        name: 'LightBox',
        params: {id: id}
      })

    }
  },
  components: {
    VueEasyLightbox
  }
  
}
</script>