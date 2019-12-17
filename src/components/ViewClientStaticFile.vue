<template>
  <!-- <div >
    <div v-for="item in filteredArray">
      <b-card
  
    overlay
    :img-src="item.imageUrl"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>

    </div>
  
</div> -->
<div class="gallery">
  <div class="gallery-panel" v-for=" item in filteredArray" :key="item.key">
    <img :src="item.imageUrl" alt="" @click="lightbox(item.key)">

  </div>

</div>
</template>
<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }  .gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
</style>

<script>

import firebase from '../Firebase'
import router from '../router'
export default {
  data(){
    return {
      items: [],
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
    }
  },
  methods: {
    lightbox(id){
      router.push({
        name: 'LightBox',
        params: {id: id}
      })

    }
  }
  
}
</script>