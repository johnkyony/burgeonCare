<template>
  <div id="app">
    <div id="nav">
      <navbar></navbar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  } , 
 async created() {
   await this.$store.dispatch('fetchAllClientDetails')
   await this.$store.dispatch('fetchClientStaticFiles')
 }
}
</script>
<style >

</style>
